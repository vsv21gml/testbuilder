var request = require('request')
var clientid = 'WYtueaQWm4bbvmwPEn6R'
var clientSecret = 'yXj4Gj6oPL'
var apiUrl = 'https://openapi.naver.com/vi/datalab/search';
var requestBody = {
    "startDate": "2019-01-01",
    "endDate": "2019-04-04",
    "timeUnit": "month",
    "keywordGroup":[
        {
            "groupName": "한글",
            "keywords":[
                "한글",
                "korean",
            ]
        },
        {
            "groupName": "영어",
            "keywords":[
                "영어",
                "english",
            ]
        },
    ],
    "device": "pc",
    "ages": ["1","2"],
};

//request.post({
//        url: apiUrl,
//        body: JSON.stringify(requestBody),
//        headers:{
//         'X-Naver-Client-Id': clientid,
//         'X-Naver=Client-Secret': clientSecret,
//         'Client-Type': 'application/json',
//        }
//    },
//    function(error,response,body){
//        console.log(body)
 //   }
//)

request.get({
            url: apiUrl,
            headers:{
             'X-Naver-Client-Id': clientid,
             'X-Naver=Client-Secret': clientSecret,
             'Client-Type': 'application/json',
            }
        },
        function(error,response,body){
            console.log(body)
   }
)
