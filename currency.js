
const csv = require('csvtojson')
const rp = require('request-promise');
const json2csv = require('json2csv').parse;
const schema = require('./lib/validator');
const joi = require('joi');

exports.generateDoc = async function (req, res) {

    try {
        let currencyCode = req.query;
        let file = req.files[0];
        file = file.buffer;
        let fileStr = file.toString('utf8');
        let jsonArray = await csv().fromString(fileStr);
        let filterRec = await validateData(jsonArray)

        let newCurrencyData = await convertToBaseCurrency(filterRec.records, currencyCode)
        let groupedRecord = await groupByNonProfit(newCurrencyData, 'Nonprofit')
        let csvRes = json2csv(groupedRecord);

        //Seting headre content
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=\"Currency.csv\"');
        res.send(csvRes)
    } catch (err) {
        console.log("Error while parsign data", err)
    }

}


//Validate data and remove from records if not valid
async function validateData(records) {
    let invalidRec = []
    await records.map(async (item, index) => {

        let { error } = joi.validate(item, schema.validateRecords);
        if (error) {
            records.splice(index, 1);
            invalidRec.push(item)
        }

    });

    return { records, invalidRec };
}


//Converting to base currency format
async function convertToBaseCurrency(data, currency) {

    let currencyRes = await rp.get(`https://api.exchangeratesapi.io/latest?base=${currency.CURRENCY_CODE}`)
    let baseCurrency = JSON.parse(currencyRes)
    if (baseCurrency && baseCurrency.rates) {
        data.map(item => {
            item.New_Donation_Amount = (Number(item.Donation_Amount) / (baseCurrency.rates[item.Donation_Currency])).toFixed(2)
            item.New_Fee = (Number(item.Fee) / (baseCurrency.rates[item.Donation_Currency])).toFixed(2)
        });
    }

    return data
}

//Grouping the data on the basis of 'Non Profit' and preparing final response
function groupByNonProfit(objectArray, property) {
    let cumilativeRec = []
    let groupedRec = objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});

    //Preparing final response data
    for (let key in groupedRec) {
        let obj = {}
        obj.Nonprofit = key
        obj.Total_Amount = groupedRec[key].reduce((a, b) => { return parseFloat(a) + parseFloat(b['New_Donation_Amount']) }, 0);
        obj.Total_Fee = groupedRec[key].reduce((a, b) => { return parseFloat(a) + parseFloat(b['New_Fee']) }, 0);
        obj.Number_Of_Donations = groupedRec[key].length
        cumilativeRec.push(obj)

    }

    return cumilativeRec
}





