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
}


function displayParkInformation(data){
    //console.log(data);

    /*
    Get park Name
    */
    const nameDiv = document.getElementById("parkName");
    const parkName = data.fullName;
    const heading = document.createElement("h1");
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
}



/*
//USING FOR DEBUGGING
const request = require('request');

request('https://developer.nps.gov/api/v1/parks?q=camping&api_key=clKNqgX4H1lU7WEsGuUOkJxbKEyEFPoL6tXRDBEu&stateCode=TX', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  var act = body.data[3].activities;
  
  activitiesArr = [];
  activitiesArr.push(act[2].name);
 
  for (var i = 0; i < act.length; i++) {
      if(activitesList.includes(act[i].name))
       console.log(act[i]); 
    }
});
*/

