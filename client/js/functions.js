function getRandomInt(max) {
    return Math.floor(Math.random() *( max ));
}

function generateParkInfo(){
   var varState= document.getElementById("inputState1").value;
   // const state = new String(varState);

    var iteminJSON = 0;
    var request = require('request');

    var options = {
    'method': 'GET',
    'url': 'https://developer.nps.gov/api/v1/parks?q=camping&api_key=clKNqgX4H1lU7WEsGuUOkJxbKEyEFPoL6tXRDBEu&stateCode=TX',
    'headers': {
        'api_key': 'clKNqgX4H1lU7WEsGuUOkJxbKEyEFPoL6tXRDBEu'
      },
      json:true
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
     //   console.log(response.body)
        if(response.body.limit > response.body.total ){
            iteminJSON = getRandomInt(response.body.total );
            document.write("1");

        }
        else{
            iteminJSON = getRandomInt(response.body.limit );
            document.write("2");
        }
       console.log(response.body.data[iteminJSON]);
    });
