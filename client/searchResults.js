const searchResults = document.getElementById('autocomplete');

let userIn = "";
let parks = [];
searchResults.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    userIn = e.target.value;
    console.log(userIn);
    loadParks();
    //parks.filter();
});

const parksList = document.getElementById('parksList');
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
            //console.log("test");
        }

        //console.log(splitCity[1]);
        for (let i = 0; i < parks.data.length; i++){
            //console.log(parks.data[i].states);
            if(parks.data[i].states == stateVal){
                console.log(parks.data[i]);
            }
        }
        //console.log(parks);
    }
    catch(err){
        console.error(err);
    }
};
