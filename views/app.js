let uploadText = document.querySelector('.uploadText');
let removeButton = document.querySelector('.remove-button');
let uploadedFile = document.querySelector('#uploadedFile');
let inputField = document.querySelector('.input');
let dataListOptions = document.querySelector('#currencies');

let currentCurrency = ["CAD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","HRK","JPY","THB","CHF","EUR","MYR","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","SGD","AUD","ILS","KRW","PLN"]

document.addEventListener('DOMContentLoaded', function(){

    let options = '';
    for (let ele of currentCurrency) {
        options += '<option value="' + ele + '">'
    }

    dataListOptions.innerHTML = options;

});


function getFileData(file) {
    let files = file.files[0];
    let fileName = files.name;
    uploadText.innerHTML = fileName;
    if (fileName !== 'Upload csv file') {
        removeButton.classList.remove('remove-button')
    }
    if (fileName.lastIndexOf('.csv') === -1) {
        alert('Please upload a valid csv file');
        uploadedFile.value = '';
    }
}

function removeFileData() {
    uploadText.innerHTML = 'Upload csv file';
    removeButton.classList.add('remove-button');
    uploadedFile.value = '';
}

$("form#data").submit(function (e) {
    e.preventDefault();
    // console.log(this)
    // console.log(formData)
    let param = document.querySelector('.input').value;
    var formData = new FormData(file);
    formData.append('file', file)
    $.ajax({
        url: "http://localhost:3000/doc/generate?CURRENCY_CODE=" + param,
        type: 'POST',
        data: formData,
        success: function (data) {
            alert('Hurray, File uploaded!! Please click OK to download the file');
            window.location.href = './index.html';
            var blob = new Blob([data]);
            var a = window.document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = "currency.csv";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        },
        error: function (error) {
            document.querySelector('.error').innerHTML = "Error - " + error.responseJSON.response.error.message

        },
        cache: false,
        contentType: false,
        processData: false
    });
});

function handleFileSelect() {
    file = event.target.files[0]
}

document.getElementById('uploadedFile').addEventListener('change', handleFileSelect, false);


