const searchButton = document.getElementById('searchButton');
searchButton.addEventListener("click", getParks);

function getParks(){
    fetch('https://developer.nps.gov/api/v1/parks?q=camping&api_key=clKNqgX4H1lU7WEsGuUOkJxbKEyEFPoL6tXRDBEu')
        .then(response => response.json())
        .then(parks => showParks(parks.data));
}

const searchResults = document.getElementById('autocomplete');
let userIn = "";
searchResults.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    userIn = e.target.value;
});

showParks = parks => {
    const parksDiv = document.querySelector('#parksList');
    parks.forEach(park => {
      const parkElement = document.createElement('p');
      parkElement.innerText = `Park Name: ${park.fullName}`;
      console.log(park.states == userIn);
      if(park.states == userIn){
          console.log(park.states);
          parksDiv.append(parkElement);
      }
    });
}


/*const searchResults = document.getElementById('autocomplete');
const parksList = document.getElementById('parksList');

let userIn = "";
let parksArr = [];
searchResults.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    userIn = e.target.value;
    console.log(userIn);
    loadParks();
});

const statesCon = [
    ['Arizona', 'AZ'],
    ['Alabama', 'AL'],
    ['Alaska', 'AK'],
    ['Arkansas', 'AR'],
    ['California', 'CA'],
    ['Colorado', 'CO'],
    ['Connecticut', 'CT'],
    ['Delaware', 'DE'],
    ['Florida', 'FL'],
    ['Georgia', 'GA'],
    ['Hawaii', 'HI'],
    ['Idaho', 'ID'],
    ['Illinois', 'IL'],
    ['Indiana', 'IN'],
    ['Iowa', 'IA'],
    ['Kansas', 'KS'],
    ['Kentucky', 'KY'],
    ['Louisiana', 'LA'],
    ['Maine', 'ME'],
    ['Maryland', 'MD'],
    ['Massachusetts', 'MA'],
    ['Michigan', 'MI'],
    ['Minnesota', 'MN'],
    ['Mississippi', 'MS'],
    ['Missouri', 'MO'],
    ['Montana', 'MT'],
    ['Nebraska', 'NE'],
    ['Nevada', 'NV'],
    ['New Hampshire', 'NH'],
    ['New Jersey', 'NJ'],
    ['New Mexico', 'NM'],
    ['New York', 'NY'],
    ['North Carolina', 'NC'],
    ['North Dakota', 'ND'],
    ['Ohio', 'OH'],
    ['Oklahoma', 'OK'],
    ['Oregon', 'OR'],
    ['Pennsylvania', 'PA'],
    ['Rhode Island', 'RI'],
    ['South Carolina', 'SC'],
    ['South Dakota', 'SD'],
    ['Tennessee', 'TN'],
    ['Texas', 'TX'],
    ['Utah', 'UT'],
    ['Vermont', 'VT'],
    ['Virginia', 'VA'],
    ['Washington', 'WA'],
    ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'],
    ['Wyoming', 'WY'],
];

const loadParks = async() => {
    try{
        //console.log("here")
        const res = await fetch('https://developer.nps.gov/api/v1/parks?q=camping&api_key=clKNqgX4H1lU7WEsGuUOkJxbKEyEFPoL6tXRDBEu');
        let parks = await res.json();
        //displayParks(parks);
        let splitCity = userIn.split(",");;
        let stateVal;
        if(userIn.search(',') != -1){
            //console.log(userIn.search(','));
            if(userIn.search(',') == 2){
                stateVal = splitCity[0].trim();
            }else{
                if(splitCity.length == 2 && splitCity[0].length != 2){
                    for(i = 0; i < statesCon.length; i++){
                        if(statesCon[i][0] == splitCity[0]){
                            stateVal = statesCon[i][1];
                        }
                    }
                }else{
                    stateVal = splitCity[1].trim();
                }
            }
        }
        else{
            if(splitCity[0].length != 2){
                for(i = 0; i < statesCon.length; i++){
                    if(statesCon[i][0] == splitCity[0]){
                        stateVal = statesCon[i][1];
                    }
                }
            }else{
                stateVal = userIn;
            }
        }
        for (let i = 0; i < parks.data.length; i++){
            if(parks.data[i].states == stateVal){
                console.log(parks.data[i]);
                displayParks(parks.data[i]);
            }
        }
    }
    catch(err){
        console.error(err);
    }
};

displayParks = parks => {
    const parksDiv = document.querySelector('#parksList');
    parks.forEach(park =>{
        const parkElement = document.createElement('p');
        parkElement.innerText = 'Park Name: ${parks.data.fullName}';
        parksDiv.append(parkElement);
    });
}*/


