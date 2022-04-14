

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
    console.log(data);
    const nameDiv = document.getElementById("parkName");
    const parkName = data.fullName;
    const heading = document.createElement("h1");
    heading.innerHTML = parkName;
    nameDiv.appendChild(heading);

}
