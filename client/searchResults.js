const searchButton = document.getElementById('searchButton');
searchButton.addEventListener("click", getParks);
var parkName = "";

function getParks(){
    const resultsDiv = document.getElementById('results')
    //console.log(resultsDiv);
    if(resultsDiv != null){
        resultsDiv.remove();
        parkName = "";
    }
    fetch('https://developer.nps.gov/api/v1/parks?q=camping&limit=466&api_key=clKNqgX4H1lU7WEsGuUOkJxbKEyEFPoL6tXRDBEu')
        .then(response => response.json())
        .then(parks => showParks(parks.data));
}

const searchResults = document.getElementById('autocomplete');
let userIn = "";
searchResults.addEventListener('keyup', (e) => {
    userIn = e.target.value;
});

showParks = parks => {
    const parksDiv = document.querySelector('#parksList');
    const resultsDiv = document.createElement('div');
    resultsDiv.setAttribute("id", "results");
    parksDiv.append(resultsDiv);
    
    let splitCity = userIn.split(",");
    let stateVal;
    console.log(splitCity);
    if(userIn.search(',') != -1){
        if(userIn.search(',') == 2){
            stateVal = splitCity[0].trim();
        }else{
            if((splitCity.length == 2) && splitCity[0].length != 2){ //just state
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

    parks.forEach(park => {
        const parkDiv = document.createElement('div');
        const parkElement = document.createElement('h2');
        const parkImg = document.createElement('img');
        const pageLink = document.createElement('a');
        if(park.states == stateVal){
            parkElement.innerText = `Park Name: ${park.fullName}`;
            pageLink.setAttribute("href", '#'); //have to change this once on heroku
            pageLink.setAttribute("id", `${park.fullName}`);
            pageLink.setAttribute("onclick", "loadPage(); return false;");
            //pageLink.setAttribute("onload", "generatePage();");
            pageLink.addEventListener("click", function(){
                parkName = this.id;
                localStorage.setItem('parkNameVal', parkName);
            }, true);
            parkImg.setAttribute("src", `${park.images[0].url}`);
            parkImg.setAttribute("width", "200px");
            parkImg.setAttribute("height", "auto");
            parkDiv.append(parkElement);
            pageLink.append(parkImg);
            parkDiv.append(pageLink);
            parkDiv.setAttribute("id", `${park.fullName}`);
            resultsDiv.append(parkDiv);
        }
    });
}

function loadPage(){
    window.location.href = "searchResult.html";
}

/*function generatePage(){
    let nameOfPark = localStorage.getItem('parkNameVal');
    console.log(nameOfPark);
    const parkDiv = document.querySelector('#clickResult');
    console.log(parkDiv);
    const infoDiv = document.createElement('div');
    console.log(infoDiv);
    const parkNamePage = document.createElement('h2');
    let title = "Park Name: ";
    parkNamePage.innerText = title.concat(nameOfPark);
    infoDiv.append(parkNamePage);
    parkDiv.append(infoDiv);
}*/

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