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
    "Waterfalls",
]

function getRandomInt(max) {
    return Math.floor(Math.random() *( max ));
}

function saveParkinfo(){
    var varState = document.getElementById("inputState1").value;
    const state = new String(varState);
    console.log(state);
    localStorage.setItem("state", state);

    var varBudget = document.getElementById("enterbudget").value;
    const budget = new String(varBudget);
    localStorage.setItem("budget", budget);

}


function displayParkInformation(data){
    //console.log(data);

    /*
    Get park Name
    */
    const nameDiv = document.getElementById("parkName");
    const parkName = data.fullName;
    const heading = document.createElement("div.pkname");
    heading.innerHTML = parkName;
    nameDiv.appendChild(heading);

    /*
    Get Overview of Park
    */
    const overviewDiv = document.getElementById("parkOverview");
    // overviewDiv.classList.add('pkname');
    const overview = data.description;
    const heading2 = document.createElement("div.pkdes");
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

    const fee = "$" + data.entranceFees[data.entranceFees.length-1].cost + " for " + data.entranceFees[data.entranceFees.length-1].description;
    const newheading = document.createElement("h2");
    newheading.innerHTML = fee;
    entranceDiv.appendChild(newheading);
    budget1 = data.entranceFees[0].cost;
    console.log(data.entranceFees);
    if(data.entranceFees.length > 1){
        console.log("test");
        const entranceDiv1 = document.getElementById("admissionFee");
        var last1 =  data.entranceFees[0];
        budget2 = last1.cost;
        const fee1 = "$" + last1.cost + " for " + last1.description;
        console.log(fee1);
        const newheading1 = document.createElement("h2");
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
    const directionsDiv = document.getElementById("direction");
    const directions = data.directionsInfo;
    const directionHeading = document.createElement("h1");
    directionHeading.innerHTML = directions;

    directionsDiv.appendChild(directionHeading);

    const directionURLHeading = document.createElement("a");
    var link = document.createTextNode("Click Here for more direction details");
    directionURLHeading.appendChild(link);

    directionURLHeading.title  = "Click Here for more direction details";

    directionURLHeading.href = data.directionsUrl;
    directionURLHeading.target="_blank";
    directionsDiv.appendChild(directionURLHeading);

}




/*

//USING FOR DEBUGGING
const request = require('request');

request('https://developer.nps.gov/api/v1/parks?q=camping&api_key=clKNqgX4H1lU7WEsGuUOkJxbKEyEFPoL6tXRDBEu&stateCode=WY', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  var act = body.data[3].activities;
    console.log(body.data[2]);

});

*/
