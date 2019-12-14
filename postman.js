//API to get required data
// curl -X POST \
//   'http://localhost:3000/doc/generate?CURRENCY_CODE=USD' \
//   -H 'Accept: */*' \
//   -H 'Accept-Encoding: gzip, deflate' \
//   -H 'Cache-Control: no-cache' \
//   -H 'Connection: keep-alive' \
//   -H 'Content-Length: 141545' \
//   -H 'Content-Type: multipart/form-data; boundary=--------------------------640713926196245003547284' \
//   -H 'Host: localhost:3000' \
//   -H 'Postman-Token: 12469052-0c6f-47f8-a098-32ccfd85f261,05f1a4d8-5e2f-4a63-ab13-98b57e81698d' \
//   -H 'User-Agent: PostmanRuntime/7.20.1' \
//   -H 'cache-control: no-cache' \
//   -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
//   -F file=@/home/anilsingh/Documents/self/assignment/give/backend-developer-challenge/sample.csv


// {
//     "status": true,
//     "response": [
//       {
//         "Nonprofit": "Evidyaloka Trust",
//         "Total_Amount": 1343.1699999999998,
//         "Total_Fee": 33.010000000000005,
//         "Number_Of_Donations": 28
//       },
//       {
//         "Nonprofit": "Bal Sansar Sanstha",
//         "Total_Amount": 1295.14,
//         "Total_Fee": 29.389999999999993,
//         "Number_Of_Donations": 26
//       },
//       {
//         "Nonprofit": "Bangalore Baptist Hospital Society",
//         "Total_Amount": 2002.5800000000006,
//         "Total_Fee": 44.730000000000004,
//         "Number_Of_Donations": 21
//       },
//       {
//         "Nonprofit": "Mantra Social Services",
//         "Total_Amount": 1417.6700000000003,
//         "Total_Fee": 29.889999999999997,
//         "Number_Of_Donations": 19
//       },
//       {
//         "Nonprofit": "Sant Singaji Educational Society",
//         "Total_Amount": 1127.7,
//         "Total_Fee": 26.130000000000003,
//         "Number_Of_Donations": 17
//       },
//       {
//         "Nonprofit": "The CounterMedia Trust",
//         "Total_Amount": 1016.9999999999999,
//         "Total_Fee": 25.339999999999996,
//         "Number_Of_Donations": 22
//       },
//       {
//         "Nonprofit": "The Association of People with Disability",
//         "Total_Amount": 775.12,
//         "Total_Fee": 14.569999999999999,
//         "Number_Of_Donations": 14
//       },
//       {
//         "Nonprofit": "Vaishnavi Welfare and Charitable Trust",
//         "Total_Amount": 2220.15,
//         "Total_Fee": 50.41,
//         "Number_Of_Donations": 27
//       },
//       {
//         "Nonprofit": "Reaching Sky Foundation",
//         "Total_Amount": 1798.6800000000003,
//         "Total_Fee": 43.41999999999999,
//         "Number_Of_Donations": 26
//       },
//       {
//         "Nonprofit": "Prayas",
//         "Total_Amount": 1172.49,
//         "Total_Fee": 26.620000000000005,
//         "Number_Of_Donations": 20
//       },
//       {
//         "Nonprofit": "Bangalore Medical Services Trust",
//         "Total_Amount": 1981.6299999999997,
//         "Total_Fee": 46.550000000000004,
//         "Number_Of_Donations": 27
//       },
//       {
//         "Nonprofit": "Bhumi",
//         "Total_Amount": 1977.4,
//         "Total_Fee": 46.88999999999999,
//         "Number_Of_Donations": 36
//       },
//       {
//         "Nonprofit": "Babul Films Society",
//         "Total_Amount": 1630.2699999999998,
//         "Total_Fee": 33.63999999999999,
//         "Number_Of_Donations": 26
//       },
//       {
//         "Nonprofit": "Gir Pachhat Jati Vikas Seva Samiti",
//         "Total_Amount": 1295.4900000000007,
//         "Total_Fee": 30.17,
//         "Number_Of_Donations": 29
//       },
//       {
//         "Nonprofit": "Y4D Foundation",
//         "Total_Amount": 990.59,
//         "Total_Fee": 22.990000000000002,
//         "Number_Of_Donations": 23
//       },
//       {
//         "Nonprofit": "Vidyarthi Sahayak Samiti",
//         "Total_Amount": 805.6299999999999,
//         "Total_Fee": 19.629999999999995,
//         "Number_Of_Donations": 17
//       },
//       {
//         "Nonprofit": "Agrasar",
//         "Total_Amount": 965.82,
//         "Total_Fee": 22.680000000000003,
//         "Number_Of_Donations": 19
//       },
//       {
//         "Nonprofit": "Simple Education Foundation",
//         "Total_Amount": 1627.7100000000003,
//         "Total_Fee": 39.010000000000005,
//         "Number_Of_Donations": 24
//       },
//       {
//         "Nonprofit": "Amenity Lifeline Emergency Response Team (ALERT)",
//         "Total_Amount": 977.4200000000001,
//         "Total_Fee": 22.510000000000005,
//         "Number_Of_Donations": 22
//       },
//       {
//         "Nonprofit": "Hariraj Charitable Trust",
//         "Total_Amount": 1700.65,
//         "Total_Fee": 39.72,
//         "Number_Of_Donations": 21
//       },
//       {
//         "Nonprofit": "Collective action for Basic Rights Foundation (CBRF)",
//         "Total_Amount": 1382.35,
//         "Total_Fee": 30.969999999999995,
//         "Number_Of_Donations": 25
//       },
//       {
//         "Nonprofit": "E and H Foundation",
//         "Total_Amount": 1243.3600000000001,
//         "Total_Fee": 29.39,
//         "Number_Of_Donations": 27
//       },
//       {
//         "Nonprofit": "Hyderabad Eye Institute ( L V Prasad Eye Institute)",
//         "Total_Amount": 856.9000000000001,
//         "Total_Fee": 20.350000000000005,
//         "Number_Of_Donations": 16
//       },
//       {
//         "Nonprofit": "PURE India Trust",
//         "Total_Amount": 806.5600000000001,
//         "Total_Fee": 19.620000000000005,
//         "Number_Of_Donations": 21
//       },
//       {
//         "Nonprofit": "Let's Live Together Charitable Trust",
//         "Total_Amount": 1439.86,
//         "Total_Fee": 33.8,
//         "Number_Of_Donations": 25
//       },
//       {
//         "Nonprofit": "Gubbachi Learning Community",
//         "Total_Amount": 1129.85,
//         "Total_Fee": 26.830000000000005,
//         "Number_Of_Donations": 21
//       },
//       {
//         "Nonprofit": "Barefoot Edu Foundation (Kokanes Kohinoor Technical Trust)",
//         "Total_Amount": 1474.77,
//         "Total_Fee": 35.63,
//         "Number_Of_Donations": 23
//       },
//       {
//         "Nonprofit": "Centre for Wildlife Studies",
//         "Total_Amount": 1808.6100000000001,
//         "Total_Fee": 40.33,
//         "Number_Of_Donations": 24
//       },
//       {
//         "Nonprofit": "Dream a Dream",
//         "Total_Amount": 857.5500000000001,
//         "Total_Fee": 18.799999999999994,
//         "Number_Of_Donations": 19
//       },
//       {
//         "Nonprofit": "Bangiya Ayurveda Samaj",
//         "Total_Amount": 1429.63,
//         "Total_Fee": 33.470000000000006,
//         "Number_Of_Donations": 19
//       },
//       {
//         "Nonprofit": "Sanjeevani Life Beyond Cancer",
//         "Total_Amount": 1081.8600000000001,
//         "Total_Fee": 26.62,
//         "Number_Of_Donations": 25
//       },
//       {
//         "Nonprofit": "Navnirman Trust (Jagrutha Mahila Sanghatan)",
//         "Total_Amount": 1534.19,
//         "Total_Fee": 36.870000000000005,
//         "Number_Of_Donations": 31
//       },
//       {
//         "Nonprofit": "Sahyog Care For You",
//         "Total_Amount": 1709.9899999999998,
//         "Total_Fee": 40.63000000000002,
//         "Number_Of_Donations": 25
//       },
//       {
//         "Nonprofit": "Humana People to People India",
//         "Total_Amount": 1579.5899999999997,
//         "Total_Fee": 36.09,
//         "Number_Of_Donations": 17
//       },
//       {
//         "Nonprofit": "Yuvraj Singh Foundation",
//         "Total_Amount": 1678.1399999999999,
//         "Total_Fee": 39.91,
//         "Number_Of_Donations": 24
//       },
//       {
//         "Nonprofit": "Sethu Trust",
//         "Total_Amount": 1112.95,
//         "Total_Fee": 26.02999999999999,
//         "Number_Of_Donations": 19
//       },
//       {
//         "Nonprofit": "Khel Khel Mein Foundation",
//         "Total_Amount": 1649.3400000000001,
//         "Total_Fee": 37.81,
//         "Number_Of_Donations": 25
//       },
//       {
//         "Nonprofit": "Susheel Foundation",
//         "Total_Amount": 1243.5499999999997,
//         "Total_Fee": 28.040000000000003,
//         "Number_Of_Donations": 26
//       },
//       {
//         "Nonprofit": "Cross Blood Foundation",
//         "Total_Amount": 1280.4200000000003,
//         "Total_Fee": 28.249999999999993,
//         "Number_Of_Donations": 22
//       },
//       {
//         "Nonprofit": "Deva Kirubai Social Help Association - DKSHA",
//         "Total_Amount": 1114.31,
//         "Total_Fee": 24.22,
//         "Number_Of_Donations": 17
//       },
//       {
//         "Nonprofit": "Vanavil Trust",
//         "Total_Amount": 976.7,
//         "Total_Fee": 23.31000000000001,
//         "Number_Of_Donations": 25
//       },
//       {
//         "Nonprofit": "RadhaKrushna Charitable Trust",
//         "Total_Amount": 948.4700000000004,
//         "Total_Fee": 23.67,
//         "Number_Of_Donations": 24
//       },
//       {
//         "Nonprofit": "Cuddles Foundation",
//         "Total_Amount": 737.16,
//         "Total_Fee": 18.06,
//         "Number_Of_Donations": 18
//       },
//       {
//         "Nonprofit": "Deendayal Navrachna Pratisthan Sondara Gurukul Domri",
//         "Total_Amount": 1965.39,
//         "Total_Fee": 37.980000000000004,
//         "Number_Of_Donations": 25
//       },
//       {
//         "Nonprofit": "Happy Horizons Trust",
//         "Total_Amount": 1942.62,
//         "Total_Fee": 43.47,
//         "Number_Of_Donations": 22
//       },
//       {
//         "Nonprofit": "Society for Children (SOCH)",
//         "Total_Amount": 2009.2100000000003,
//         "Total_Fee": 42.7,
//         "Number_Of_Donations": 24
//       },
//       {
//         "Nonprofit": "QUEST Alliance",
//         "Total_Amount": 877.8200000000002,
//         "Total_Fee": 20.360000000000003,
//         "Number_Of_Donations": 18
//       },
//       {
//         "Nonprofit": "Suyam Charitable Trust",
//         "Total_Amount": 682.7199999999999,
//         "Total_Fee": 16.56,
//         "Number_Of_Donations": 17
//       },
//       {
//         "Nonprofit": "Parivaar Education Society",
//         "Total_Amount": 2216.65,
//         "Total_Fee": 52.57000000000002,
//         "Number_Of_Donations": 32
//       },
//       {
//         "Nonprofit": "The Akshaya Patra Foundation",
//         "Total_Amount": 1175.61,
//         "Total_Fee": 28.570000000000007,
//         "Number_Of_Donations": 25
//       },
//       {
//         "Nonprofit": "Sambhav Foundation",
//         "Total_Amount": 776.4599999999999,
//         "Total_Fee": 19.569999999999997,
//         "Number_Of_Donations": 19
//       },
//       {
//         "Nonprofit": "Teach For India",
//         "Total_Amount": 1262.34,
//         "Total_Fee": 28.770000000000003,
//         "Number_Of_Donations": 22
//       },
//       {
//         "Nonprofit": "Quality Education Support Trust (QUEST)",
//         "Total_Amount": 924.9699999999999,
//         "Total_Fee": 23.439999999999998,
//         "Number_Of_Donations": 24
//       },
//       {
//         "Nonprofit": "Community Reconstruction of Social Service (CROSS)",
//         "Total_Amount": 1070.3300000000002,
//         "Total_Fee": 24.91,
//         "Number_Of_Donations": 20
//       },
//       {
//         "Nonprofit": "Tender Heart Education Society",
//         "Total_Amount": 2173.29,
//         "Total_Fee": 50.13999999999999,
//         "Number_Of_Donations": 20
//       },
//       {
//         "Nonprofit": "Sayodhya Home for Women in Need",
//         "Total_Amount": 1182.56,
//         "Total_Fee": 28.349999999999998,
//         "Number_Of_Donations": 18
//       },
//       {
//         "Nonprofit": "Million Sparks Foundation",
//         "Total_Amount": 1061.81,
//         "Total_Fee": 26.69,
//         "Number_Of_Donations": 29
//       },
//       {
//         "Nonprofit": "Sri Sathya Sai Health & Education Trust",
//         "Total_Amount": 940.7900000000002,
//         "Total_Fee": 21.62,
//         "Number_Of_Donations": 17
//       },
//       {
//         "Nonprofit": "Waste Warriors Society",
//         "Total_Amount": 734.26,
//         "Total_Fee": 17.900000000000002,
//         "Number_Of_Donations": 18
//       },
//       {
//         "Nonprofit": "NavGurukul Foundation for Social Welfare",
//         "Total_Amount": 1103.73,
//         "Total_Fee": 25.019999999999996,
//         "Number_Of_Donations": 18
//       },
//       {
//         "Nonprofit": "Vivekananda Youth Forum",
//         "Total_Amount": null,
//         "Total_Fee": null,
//         "Number_Of_Donations": 30
//       },
//       {
//         "Nonprofit": "Jal Seva Charitable Foundation (WaterAid India)",
//         "Total_Amount": 1190.7900000000002,
//         "Total_Fee": 28.429999999999996,
//         "Number_Of_Donations": 19
//       },
//       {
//         "Nonprofit": "People for the Respect and Care of Animals",
//         "Total_Amount": 2183.4599999999996,
//         "Total_Fee": 49.95,
//         "Number_Of_Donations": 29
//       },
//       {
//         "Nonprofit": "Gramin Samassya Mukti Trust",
//         "Total_Amount": 957.91,
//         "Total_Fee": 23.629999999999995,
//         "Number_Of_Donations": 17
//       },
//       {
//         "Nonprofit": "Akshaya Aahara Foundation ( AAF)",
//         "Total_Amount": 544.84,
//         "Total_Fee": 13.33,
//         "Number_Of_Donations": 17
//       },
//       {
//         "Nonprofit": "United Sisters Foundation",
//         "Total_Amount": 1292.65,
//         "Total_Fee": 29.81,
//         "Number_Of_Donations": 24
//       },
//       {
//         "Nonprofit": "Fundacja Aravindam Social Development",
//         "Total_Amount": 661.33,
//         "Total_Fee": 15.66,
//         "Number_Of_Donations": 14
//       },
//       {
//         "Nonprofit": "Perambalur District Network for HIV Positive People",
//         "Total_Amount": 1410.68,
//         "Total_Fee": 32.82,
//         "Number_Of_Donations": 26
//       },
//       {
//         "Nonprofit": "Rostrum India Social Organization",
//         "Total_Amount": 1035.63,
//         "Total_Fee": 26.199999999999996,
//         "Number_Of_Donations": 23
//       },
//       {
//         "Nonprofit": "Synodical Board of Social Services of the Church of North India",
//         "Total_Amount": 1348.9399999999998,
//         "Total_Fee": 31.88,
//         "Number_Of_Donations": 20
//       },
//       {
//         "Nonprofit": "United Way of Delhi",
//         "Total_Amount": 1377.8700000000001,
//         "Total_Fee": 32.04,
//         "Number_Of_Donations": 25
//       },
//       {
//         "Nonprofit": "Team Everest",
//         "Total_Amount": 1269.39,
//         "Total_Fee": 30.869999999999997,
//         "Number_Of_Donations": 21
//       },
//       {
//         "Nonprofit": "Society For Development Activities",
//         "Total_Amount": 552.8800000000001,
//         "Total_Fee": 12.48,
//         "Number_Of_Donations": 15
//       },
//       {
//         "Nonprofit": "The Baale Mane Trust",
//         "Total_Amount": 981.4000000000001,
//         "Total_Fee": 23.560000000000002,
//         "Number_Of_Donations": 19
//       },
//       {
//         "Nonprofit": "Family of Disabled (Fod)",
//         "Total_Amount": 896.4800000000001,
//         "Total_Fee": 20.910000000000004,
//         "Number_Of_Donations": 16
//       },
//       {
//         "Nonprofit": "Change With One Foundation",
//         "Total_Amount": 2153.9500000000007,
//         "Total_Fee": 51.150000000000006,
//         "Number_Of_Donations": 27
//       },
//       {
//         "Nonprofit": "Isha Education",
//         "Total_Amount": 1495.65,
//         "Total_Fee": 34.45,
//         "Number_Of_Donations": 21
//       },
//       {
//         "Nonprofit": "Agrani India Foundation",
//         "Total_Amount": 729.1800000000001,
//         "Total_Fee": 17.69,
//         "Number_Of_Donations": 19
//       },
//       {
//         "Nonprofit": "Gudia Swayam Sevi Sansthan",
//         "Total_Amount": 643.12,
//         "Total_Fee": 16.080000000000002,
//         "Number_Of_Donations": 16
//       },
//       {
//         "Nonprofit": "Kriti Social Initiatives",
//         "Total_Amount": 2681.9500000000003,
//         "Total_Fee": 58.92,
//         "Number_Of_Donations": 15
//       },
//       {
//         "Nonprofit": "Peepal Foundation",
//         "Total_Amount": 1870.74,
//         "Total_Fee": 43.85,
//         "Number_Of_Donations": 19
//       },
//       {
//         "Nonprofit": "Chehak Trust",
//         "Total_Amount": 1483.1300000000003,
//         "Total_Fee": 32.98,
//         "Number_Of_Donations": 29
//       },
//       {
//         "Nonprofit": "Deesha Education Foundation",
//         "Total_Amount": 1090.9,
//         "Total_Fee": 25.729999999999997,
//         "Number_Of_Donations": 18
//       },
//       {
//         "Nonprofit": "Ek Tara",
//         "Total_Amount": 1153.69,
//         "Total_Fee": 22.62,
//         "Number_Of_Donations": 20
//       },
//       {
//         "Nonprofit": "South Central India Network for Development Alternatives",
//         "Total_Amount": 1415.3799999999999,
//         "Total_Fee": 32.46000000000001,
//         "Number_Of_Donations": 24
//       },
//       {
//         "Nonprofit": "Hope Kolkata Foundation",
//         "Total_Amount": 2327.7400000000002,
//         "Total_Fee": 49.61000000000001,
//         "Number_Of_Donations": 31
//       },
//       {
//         "Nonprofit": "Breakthrough Trust",
//         "Total_Amount": 1269.6700000000005,
//         "Total_Fee": 29.99999999999999,
//         "Number_Of_Donations": 28
//       },
//       {
//         "Nonprofit": "Anandam",
//         "Total_Amount": 1644.64,
//         "Total_Fee": 37.41,
//         "Number_Of_Donations": 24
//       },
//       {
//         "Nonprofit": "Foundation for Mother and Child Health",
//         "Total_Amount": 1328.2900000000002,
//         "Total_Fee": 30.930000000000007,
//         "Number_Of_Donations": 25
//       },
//       {
//         "Nonprofit": "Manzil Mystics",
//         "Total_Amount": 2675.8500000000004,
//         "Total_Fee": 59.89000000000001,
//         "Number_Of_Donations": 16
//       },
//       {
//         "Nonprofit": "World for All Animal Care And Adoptions",
//         "Total_Amount": 1312.6299999999999,
//         "Total_Fee": 28.229999999999993,
//         "Number_Of_Donations": 18
//       },
//       {
//         "Nonprofit": "Vidya Poshak",
//         "Total_Amount": 692.13,
//         "Total_Fee": 16.139999999999997,
//         "Number_Of_Donations": 20
//       },
//       {
//         "Nonprofit": "SERUDS - Sai Educational Rural And Urban Development Society",
//         "Total_Amount": 1481.5800000000002,
//         "Total_Fee": 35.120000000000005,
//         "Number_Of_Donations": 23
//       },
//       {
//         "Nonprofit": "Shikshan Ane Samaj Kalyan Kendra",
//         "Total_Amount": 710.14,
//         "Total_Fee": 15.550000000000002,
//         "Number_Of_Donations": 14
//       },
//       {
//         "Nonprofit": "Sevalaya",
//         "Total_Amount": 2279.2000000000003,
//         "Total_Fee": 48.010000000000005,
//         "Number_Of_Donations": 21
//       }
//     ]
//   }









//For setting base currency to get app currency code need ENTERPRISE edition of open exchange API
https://openexchangerates.org/api/latest.json?app_id=a790ccfc262e4ee1b3c9b7167629990f&base=INR

// {
//     "error": true,
//     "status": 403,
//     "message": "not_allowed",
//     "description": "Changing the API `base` currency is available for Developer, Enterprise and Unlimited plan clients. Please upgrade, or contact support@openexchangerates.org with any questions."
//   }

