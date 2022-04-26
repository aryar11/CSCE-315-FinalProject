activitesList = [
    "Auto and ATV",
    "Biking",
    "Boating",
    "Jet Skiing",
    "Camping",
    "Fishing",
    "Freshwater Fishing",
    "Hiking",
    "Off-Trail Permitted Hiking",
    "Hunting and Gathering",
    "Hunting",
    "Paddling",
    "Canoeing",
    "Canoe or Kayak Camping",
    "Swimming",
    "Freshwater Swimming",
    "Wildlife Watching",
    "Birdwatching",
    "Dams",
    "Water Trails",
    "Waterfalls"
]

hours = [
    "12 a.m",
    "1 a.m",
    "2 a.m",
    "3 a.m",
    "4 a.m",
    "5 a.m",
    "6 a.m",
    "7 a.m",
    "8 a.m",
    "9 a.m",
    "10 a.m",
    "11 a.m",
    "12 p.m",
    "1 p.m",
    "2 p.m",
    "3 p.m",
    "4 p.m",
    "5 p.m",
    "6 p.m",
    "7 p.m",
    "8 p.m",
    "9 p.m",
    "10 p.m",
    "11 p.m"
]

function getRandomInt(max) {
    return Math.floor(Math.random() *( max ));
}

function saveParkinfo(){
    /*
    get name of state
    */
    var varState = document.getElementById("inputState1").value;
    const state = new String(varState);
    console.log(state);
    localStorage.setItem("state", state);

    /*
    get their budget
    */
    var varBudget = document.getElementById("enterbudget").value;
    const budget = new String(varBudget);
    localStorage.setItem("budget", budget);

    /*
    get start and end date
    */
    var varStartDate =  document.getElementById("startDate").value;
    var varEndDate =  document.getElementById("endDate").value;
    const startDate = new String(varStartDate);
    const endDate = new String(varEndDate);
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("endDate", endDate);
}


function displayParkInformation(data){
    //console.log(data);

    /*

    Get park Name
    */
    const nameDiv = document.getElementById("parkName");
    const parkName = data.fullName;
    const heading = document.createElement("h1.pkname");
    heading.innerHTML = parkName;

    nameDiv.appendChild(heading);

    /*
    Get Overview of Park
    */
    const overviewDiv = document.getElementById("parkOverview");
    const overview = data.description;
    const heading2 = document.createElement("h1");
    heading2.innerHTML = overview;
    overviewDiv.appendChild(heading2);

    /*
    Get Key Activities From Park
    */
    var activities = [];
    var act = data.activities;
    for (var i = 0; i < act.length; i++) {
        if(activitesList.includes(act[i].name))
            activities.push(act[i].name);
    }
    let list = document.getElementById("activities");
    var i = 0;
    activities.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })

    /*
    Grabbing the first two images from API reponse
    */
    const img1 = document.createElement("img");
    img1.src= data.images[1].url; //image 1
    img1.width="500"
    img1.height="400"

    const img2 = document.createElement("img");
    img2.src= data.images[0].url; //image 2
    img2.width="500"
    img2.height="400"

    var src = document.getElementById("parkImages");
    src.appendChild(img1); //adding the image to the page
    src.appendChild(img2);

    /*
    Entrance Fees
    */
    var budget1, budget2;
    const entranceDiv = document.getElementById("admissionFee");
    entranceDiv.className = "pkHelp";
    const fee = "$" + data.entranceFees[data.entranceFees.length-1].cost + " for " + data.entranceFees[data.entranceFees.length-1].description;
    const newheading = document.createElement("h1");
    // newheading.className = "pkdirections";
    newheading.innerHTML = fee;
    entranceDiv.appendChild(newheading);
    budget1 = data.entranceFees[0].cost;

    if(data.entranceFees.length > 1){

        const entranceDiv1 = document.getElementById("admissionFee");
        // entranceDiv1.className = "pkdirect";
        var last1 =  data.entranceFees[0];
        budget2 = last1.cost;
        const fee1 = "$" + last1.cost + " for " + last1.description;

        const newheading1 = document.createElement("p");
        newheading1.className = "pkHelper";
        newheading1.innerHTML = fee1;
        entranceDiv1.appendChild(newheading1);
    }

    const budget = localStorage.getItem("budget");
    localStorage.removeItem("budget");

    if(parseInt(budget) < budget1 ){

        const newheading2 = document.createElement("h3");
        newheading2.innerHTML = "*Note the park Entrance Fee is higher than your budget. We recommend adjusting your budget or refresh the page";
        entranceDiv.appendChild(newheading2);
    }

    /*
    get directions info
    */
    // const directionsDiv = document.getElementById("direction");
    // directionsDiv.className = "pkdirect";
    // const directions = data.directionsInfo;
    // const directionHeading = document.createElement("h1");
    // directionHeading.className = "pkdirections";
    //
    // directionHeading.innerHTML = directions;
    //
    // directionsDiv.appendChild(directionHeading);
    //
    // const directionURLHeading = document.createElement("a");
    // directionURLHeading.className = "pkURL";
    // var link = document.createTextNode("Click Here for more direction details");
    // directionURLHeading.appendChild(link);
    //
    // directionURLHeading.title  = "Click Here for more direction details";
    //
    // directionURLHeading.href = data.directionsUrl;
    // directionURLHeading.target="_blank";
    // directionsDiv.appendChild(directionURLHeading);

    const directionsDiv = document.getElementById("direction");
    directionsDiv.className("pkdirect");
    const directions = data.directionsInfo;
    const directionHeading = document.createElement("h1");
    directionHeading.className = "pkdirections";

    directionHeading.innerHTML = directions;

    directionsDiv.appendChild(directionHeading);

    const directionURLHeading = document.createElement("a");
    directionURLHeading.className = "pkURL";
    var link = document.createTextNode("Click Here for more direction details");
    directionURLHeading.appendChild(link);

    directionURLHeading.title  = "Click Here for more direction details";

    directionURLHeading.href = data.directionsUrl;
    directionURLHeading.target="_blank";
    directionsDiv.appendChild(directionURLHeading);


}


function itenerarySetup(weatherdata, parkdata){
    const start = localStorage.getItem("startDate");
    localStorage.removeItem("startDate");
    const end = localStorage.getItem("endDate");
    localStorage.removeItem("endDate");

    var startDate = new Date(start.toString());
    var endDate = new Date(end.toString());

    var diff = new Date(endDate - startDate);
    var numOfDays = diff.getDate() + 1;

    var today = new Date();
    var daysInFuture = new Date(startDate - today);
    var FutureInt = daysInFuture.getDate();
    if(FutureInt == 31){
        FutureInt = 0;
    }

    /*
    get weather data
    */
    var weather = [];
    var hightemp = [];
    var lowtemp = [];
    console.log(FutureInt, "   ", numOfDays);
    if(FutureInt <= 7){
        for(var i = 0 ; i <= numOfDays + FutureInt ; i++){
            if(i >= FutureInt && i<=7){
                weather.push(weatherdata.daily[i].weather[0].description);
                hightemp.push(weatherdata.daily[i].temp.max);
                lowtemp.push(weatherdata.daily[i].temp.min);
                console.log(i , "  " , weatherdata.daily[i].dt, "  ", weatherdata.daily[i].temp.max,"  ", weatherdata.daily[i].weather[0].description);
            }

        }
    }

    const tablediv = document.getElementById("itenerary");

    var tbl = document.createElement('table');
    tbl.className = "iteneraryTable";
    tbl.style.width = '100%';

    let tblHead = document.createElement('thead');
    tblHead.className = 'iteneraryTableHead';

    let tblHeaderRow = document.createElement('tr');
    tblHeaderRow.className = 'iteneraryTableHeaderRow';
    let hourheader = document.createElement('th');
    hourheader.innerText = "hour";
    hourheader.contentEditable = "false";
    tblHeaderRow.append(hourheader);


    for(var i = 0 ; i < numOfDays ; i++ ){
        let day = document.createElement('th');
        const dateArray = startDate.toString().split(" ");
        day.innerText = dateArray[0] + " " + dateArray[1] + " " + dateArray[2] + " " + dateArray[3];
        day.contentEditable = "false";
        tblHeaderRow.append(day);
        startDate.setDate(startDate.getDate() + 1);

    }
    tblHead.append(tblHeaderRow);
    tbl.append(tblHead);

    let iteneraryTableBody = document.createElement('tbody');
    iteneraryTableBody.className = "iteneraryTableBody";

    tbl.append(iteneraryTableBody);

    tablediv.append(tbl);

    /*
    add body
    */


        let weatherRow = document.createElement('tr');
        weatherRow.className = "tablebodyrow";
        let blankSquare = document.createElement('td');
        blankSquare.innerText = "";
        weatherRow.append(blankSquare);
        for(var i = 0 ; i < numOfDays ; i ++){
            if(i >= FutureInt-1){
                console.log(i , "  " ,hightemp[i], "   ", weather[i]);
                if(weather[i] != undefined ){
                    let weatherDay = document.createElement('td');
                    weatherDay.innerText = weather[i] + " with a high of " + hightemp[i] + "\u00B0F";
                    weatherRow.append(weatherDay);
                }
            }
            else if(FutureInt+numOfDays > 7){
                console.log(i , "  " ,hightemp[i], "   ", weather[i]);
                if(weather[i] != undefined){
                    let weatherDay = document.createElement('td');
                    weatherDay.innerText = weather[i] + " with a high of " + hightemp[i] + "\u00B0F";
                    weatherRow.append(weatherDay);
                }
            }

            else{
                let weatherDay = document.createElement('td');
                weatherDay.innerText = "";
                weatherRow.append(weatherDay);
            }
        }
        iteneraryTableBody.append(weatherRow);

    for(var i = 0; i < 24 ; i++){
        let tableBodyRow = document.createElement('tr');
        tableBodyRow.className = "tablebodyrow";
        let hour = document.createElement('td');
        hour.innerText = hours[i];
        hour.contentEditable = "false";
        tableBodyRow.append(hour);
        for(var j = 0 ; j < numOfDays ; j++ ){
            let formInput = document.createElement('td');
            if(i == 0){
                formInput.innerText = 'Click Here to Build Itinerary';
            }
            tableBodyRow.append(formInput);
        }
        iteneraryTableBody.append(tableBodyRow);
    }
}

function displayLocalTrails(traildata){
    //check if there are any trails nearby
    if(traildata.length <= 0){
        return;
    }
    var trailList = [];
    var trailDescription = [];
    for(var i = 0 ; i < traildata.length ; i ++){
        if(!traildata[i].name.toString().includes("Park")){
            trailList.push(traildata[i].name);
           // trailDescription.push(traildata[i].description);
        }
    }
    let list = document.getElementById("trail-list");
    let title = document.createElement("h2");
    title.innerText = "Here are some hiking/biking trails at this park:" + '\r\n';
    list.appendChild(title);
    for(var i = 0; i < trailList.length ; i++){
        if(i >= 10){
            //we dont want more than 10 items
            break;
        }
        let dt = document.createElement("dt");
        dt.innerText = trailList[i];
        list.appendChild(dt);
        //let dd = document.createElement("dd");
       // dd.innerText = "Diffuculty:" + trailDescription[i];
        //list.appendChild(dd);
    }

}


/*

//USING FOR DEBUGGING
const request = require('request');

request("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly,current&appid=a6b714ce7c4872dfde0a49406a4c050b&units=imperial", { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }

    console.log(body.daily[7].weather[0]);

});

*/
