export function parkInfo() {
    const state = localStorage.getItem("state");
    localStorage.removeItem("state");
    console.log(state);
    var iteminJSON = 0;
    require(['axios'], function (axios){
    //const axios = require('axios');
    axios.get('https://developer.nps.gov/api/v1/parks?q=camping&api_key=clKNqgX4H1lU7WEsGuUOkJxbKEyEFPoL6tXRDBEu&stateCode=TX')
      .then(response => {
    //    console.log(response.data);
        if(parseInt(response.data.limit) > parseInt(response.data.total) ){
            iteminJSON = getRandomInt(response.data.total );    
        }
        else{
            iteminJSON = getRandomInt(response.data.limit );
        
        }
        return(response.data.data[iteminJSON])
      })
      .catch(error => {
        console.log(error);
      });
    });
  }