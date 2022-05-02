//const searchButton = document.getElementById('searchButton');
//searchButton.addEventListener("click", getParks);
var parkName = "";
let count = 0;
let noResults;

function getParks(){
    const resultsDiv = document.getElementById('results')
    //console.log(resultsDiv);
    if(resultsDiv != null){
        resultsDiv.remove();
        noResults = true;
        count = 0;
        parkName = "";
    }
    fetch('https://developer.nps.gov/api/v1/parks?q=camping&limit=466&api_key=clKNqgX4H1lU7WEsGuUOkJxbKEyEFPoL6tXRDBEu')
        .then(response => response.json())
        .then(parks => showParks(parks.data));
}

const searchResults = document.getElementById('autocomplete');
let userIn = "";
searchResults.addEventListener('keyup', (e) => {
    userIn = e.target.value.toLocaleUpperCase();
    console.log(e.key);
    if (e.key === 'Enter') {
        getParks();
      }
});

showParks = parks => {
    const parksDiv = document.querySelector('#parksList');
    const resultsDiv = document.createElement('div');
    resultsDiv.className = "pkres";
    resultsDiv.setAttribute("id", "results");
    parksDiv.append(resultsDiv);

    let splitCity = userIn.split(",");
    let stateVal = "";
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
        parkDiv.className = "pksearch";
        const parkElement = document.createElement('h1');
        parkElement.className = "searchpkname";
        const parkImg = document.createElement('img');
        parkImg.className = "pksearchimg";
        const pageLink = document.createElement('a');
        if(park.states == stateVal){
            noResults = false;
            parkElement.innerText = `${park.fullName}`;
            pageLink.setAttribute("href", '#'); //have to change this once on heroku
            pageLink.setAttribute("id", `${park.fullName}`);
            pageLink.setAttribute("title", count);
            pageLink.setAttribute("onclick", "loadPage(); return false;");
            //pageLink.setAttribute("onload", "generatePage();");
            pageLink.addEventListener("click", function(){
                parkName = this.id;
                let start = this.title;
                //console.log(start);
                localStorage.setItem('parkNameVal', parkName);
                localStorage.setItem('startVal', start);
            }, true);
            parkImg.setAttribute("src", `${park.images[0].url}`);
            parkImg.setAttribute("width", "300px");
            parkImg.setAttribute("height", "auto");
            pageLink.append(parkElement);
            //parkDiv.append(parkElement);
            pageLink.append(parkImg);
            parkDiv.append(pageLink);
            parkDiv.setAttribute("id", `${park.fullName}`);
            resultsDiv.append(parkDiv);
        }
        count++;
    });
    if(noResults){
        const noresults = document.createElement('h2');
        noresults.setAttribute("id", "noresults");
        noresults.className = "error";
        noresults.innerText = "Looks like you wandered off trail, try another search!";
        resultsDiv.append(noresults);
    }
}

function loadPage(){
    window.location.href = "searchResult.html";
}

const statesCon = [
    ['ARIZONA', 'AZ'],
    ['ALABAMA', 'AL'],
    ['ALASKA', 'AK'],
    ['ARKANSAS', 'AR'],
    ['CALIFORNIA', 'CA'],
    ['COLORADO', 'CO'],
    ['CONNECTICUT', 'CT'],
    ['DELAWARE', 'DE'],
    ['FLORIDA', 'FL'],
    ['GEORGIA', 'GA'],
    ['HAWAII', 'HI'],
    ['IDAHO', 'ID'],
    ['ILLINOIS', 'IL'],
    ['INDIANA', 'IN'],
    ['IOWA', 'IA'],
    ['KANSAS', 'KS'],
    ['KENTUCKY', 'KY'],
    ['LOUISIANA', 'LA'],
    ['MAINE', 'ME'],
    ['MARYLAND', 'MD'],
    ['MASSACHUSETTS', 'MA'],
    ['MICHIGAN', 'MI'],
    ['MINNESOTA', 'MN'],
    ['MISSISSIPPI', 'MS'],
    ['MISSOURI', 'MO'],
    ['MONTANA', 'MT'],
    ['NEBRASKA', 'NE'],
    ['NEVADA', 'NV'],
    ['NEW HAMPSHIRE', 'NH'],
    ['NEW JERSEY', 'NJ'],
    ['NEW MEXICO', 'NM'],
    ['NEW YORK', 'NY'],
    ['NORTH CAROLINA', 'NC'],
    ['NORTH DAKOTA', 'ND'],
    ['OHIO', 'OH'],
    ['OKLAHOMA', 'OK'],
    ['OREGON', 'OR'],
    ['PENNSYLVANIA', 'PA'],
    ['RHODE ISLAND', 'RI'],
    ['SOUTH CAROLINA', 'SC'],
    ['SOUTH DAKOTA', 'SD'],
    ['TENNESSEE', 'TN'],
    ['TEXAS', 'TX'],
    ['UTAH', 'UT'],
    ['VERMONT', 'VT'],
    ['VIRGINA', 'VA'],
    ['WASHINGTON', 'WA'],
    ['WEST VIRGINIA', 'WV'],
    ['WISCONSIN', 'WI'],
    ['WYOMING', 'WY'],
];
