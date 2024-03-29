let nameOfPark = localStorage.getItem('parkNameVal');
let start = localStorage.getItem('startVal');
console.log(start);
let callStr = 'https://developer.nps.gov/api/v1/parks?q=camping&limit=1&api_key=clKNqgX4H1lU7WEsGuUOkJxbKEyEFPoL6tXRDBEu&start=' + start;
console.log(callStr)
fetch(callStr)
      .then(response => response.json())
      .then(parks => showParkInfo(parks.data))

showParkInfo = parks => {
  parks.forEach(park => {
    // general div
    const parkDiv = document.querySelector('#clickResult');
    const infoDiv = document.createElement('div');
    infoDiv.className = "content";
    infoDiv.setAttribute("id", "result"); //ID for styling

    //content div
    const contentdiv = document.createElement('div');
    contentdiv.classNamme = "content";
    contentdiv.setAttribute("id", "content");

    //park name
    const parkNamePage = document.createElement('h1');
    parkNamePage.className = "pkname";
    parkNamePage.setAttribute("id", "Park Name");
    parkNamePage.innerText = `${park.fullName}`;
    infoDiv.append(parkNamePage);

    // description
    const descsection = document.createElement('section');
    descsection.setAttribute('href', "#ParkDescriptionTitle");
    const descCaption = document.createElement('h2');
    descCaption.className = "pkHelp";
    descCaption.setAttribute("id", "ParkDescriptionTitle");
    descCaption.innerText = "Description:";
    infoDiv.append(descCaption);
    const parkDesc = document.createElement('p');
    parkDesc.className = "pkHelper";
    parkDesc.setAttribute("id", "Park Description");
    parkDesc.innerText = `${park.description}`;
    infoDiv.append(parkDesc);

    //activities
    const activitiesCaption = document.createElement('h2');
    activitiesCaption.className = "pkHelp";
    activitiesCaption.setAttribute("id", "ParkActivitiesTitle");
    activitiesCaption.innerText = "Activities:";
    infoDiv.append(activitiesCaption);
    const unList = document.createElement('ul');
    unList.className = "pkHelper";
    unList.setAttribute("id", "Park Activities List");
    for(let i = 0; i < park.activities.length; i++){
      let parkActivity = document.createElement('li');
      parkActivity.setAttribute("id", "Park Activity");
      parkActivity.innerText = `${park.activities[i].name}`;
      unList.append(parkActivity);
    }
    infoDiv.append(unList);

    //hours
    const hoursCaption = document.createElement('h2');
    hoursCaption.className = "pkHelp";
    hoursCaption.setAttribute("id", "HoursCaption");
    hoursCaption.innerText = "Regular Hours:";
    infoDiv.append(hoursCaption);
    const unListHours = document.createElement('ul');
    unListHours.className = "pkHelper";
    unListHours.setAttribute("id", "Hours");
    console.log(`${park.operatingHours[park.operatingHours.length-1].standardHours.monday}`);
    let monday = document.createElement('li');
    monday.innerText = `Monday: ${park.operatingHours[park.operatingHours.length-1].standardHours.monday}`
    unListHours.append(monday);
    let tuesday = document.createElement('li');
    tuesday.innerText = `Tuesday: ${park.operatingHours[park.operatingHours.length-1].standardHours.tuesday}`
    unListHours.append(tuesday);
    let wednesday = document.createElement('li');
    wednesday.innerText = `Wednesday: ${park.operatingHours[park.operatingHours.length-1].standardHours.wednesday}`
    unListHours.append(wednesday);
    let thursday = document.createElement('li');
    thursday.innerText = `Thursday: ${park.operatingHours[park.operatingHours.length-1].standardHours.thursday}`
    unListHours.append(thursday);
    let friday = document.createElement('li');
    friday.innerText = `Friday: ${park.operatingHours[park.operatingHours.length-1].standardHours.friday}`
    unListHours.append(friday);
    let saturday = document.createElement('li');
    saturday.innerText = `Saturday: ${park.operatingHours[park.operatingHours.length-1].standardHours.saturday}`
    unListHours.append(saturday);
    let sunday = document.createElement('li');
    sunday.innerText = `Sunday: ${park.operatingHours[park.operatingHours.length-1].standardHours.sunday}`
    unListHours.append(sunday);
    infoDiv.append(unListHours);

    //address
    const parkAddrTitle = document.createElement('h2');
    parkAddrTitle.className = "pkHelp";
    parkAddrTitle.setAttribute("id", "ParkAddressCaption");
    parkAddrTitle.innerText = "Park Address: ";
    infoDiv.append(parkAddrTitle);
    const addrStr = document.createElement('p');
    addrStr.className = "pkHelper";
    addrStr.innerText = `${park.addresses[0].line1} ${park.addresses[0].city}, ${park.addresses[0].stateCode} ${park.addresses[0].postalCode}`;
    addrStr.setAttribute("id", "Park Address");
    infoDiv.append(addrStr);

    //passes
    const passTitle = document.createElement('h2');
    passTitle.className = "pkHelp";
    passTitle.setAttribute("id", "PassesCaption");
    passTitle.innerText = "Passes: ";
    infoDiv.append(passTitle);
    const unListPasses = document.createElement('ul');
    unListPasses.className = "pkHelper";
    unListPasses.setAttribute("id", "Passes List");
    for(let i = 0; i < park.entrancePasses.length; i++){
      let parkPass = document.createElement('li');
      parkPass.innerText = `${park.entrancePasses[i].title}: $${park.entrancePasses[i].cost}`;
      unListPasses.append(parkPass);
    }
    infoDiv.append(unListPasses);

    //fees
    const feeTitle = document.createElement('h2');
    feeTitle.className = "pkHelp";
    feeTitle.setAttribute("id", "FeesCaption");
    feeTitle.innerText = "Fees: ";
    infoDiv.append(feeTitle);
    const unListFees = document.createElement('ul');
    unListFees.className = "pkHelper";
    unListFees.setAttribute("id", "Fees List");
    for(let i = 0; i < park.entranceFees.length; i++){
      let parkFees = document.createElement('li');
      parkFees.innerText = `${park.entranceFees[i].title}: $${park.entranceFees[i].cost}`;
      unListFees.append(parkFees);
    }
    infoDiv.append(unListFees);

    //NPS URL
    const linkTitle = document.createElement('h2');
    linkTitle.className = "pkHelp";
    linkTitle.setAttribute("id", "ParkLink");
    linkTitle.innerText = "Reference: ";
    infoDiv.append(linkTitle);
    const link = document.createElement('a');
    link.className = "pkURL";
    link.setAttribute('href', `${park.url}`);
    // link.setAttribute('id', 'ParkLink');
    link.setAttribute('target', "_blank");
    link.innerText = "      National Parks Page";
    infoDiv.append(link);

    //photos
    const imgTitle = document.createElement('h2');
    imgTitle.className = "pkHelp";
    imgTitle.setAttribute("id", "ImgCaption");
    imgTitle.innerText = "Gallery: ";
    infoDiv.append(imgTitle);
    for(let i = 0; i < park.images.length; i++){
      let parkImg = document.createElement('img');
      parkImg.className = "pkresimg";
      parkImg.setAttribute("id", "Park Image");
      parkImg.setAttribute("src", `${park.images[i].url}`);
      parkImg.setAttribute("title", `${park.images[i].title}`);
      parkImg.setAttribute("width", "400px");
      parkImg.setAttribute("height", "auto");
      infoDiv.append(parkImg);
    }


    parkDiv.append(infoDiv);
  });
}
