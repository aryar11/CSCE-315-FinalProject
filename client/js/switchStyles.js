/* This function looks at the "theme" of the link to the stylesheet and changes it to the opposite style.
It also stores the Name of the style into local storage so it can be read later to keep the change persistant through the website*/
function switchStyles(){
    var style = document.getElementById("theme");
    var png = document.getElementById("logo");
    if(style.getAttribute('href') == 'Style1.css'){
        style.setAttribute('href', 'darkmode.css');
        localStorage.setItem("styleType", "darkmode.css");
        png.setAttribute('src', 'img/happycamper_dark.png');
        localStorage.setItem('logoType', 'img/happycamper_dark.png');
    }
    else{
        style.setAttribute('href', 'Style1.css');
        localStorage.setItem("styleType", "Style1.css");
        png.setAttribute('src', 'img/happycamper.png');
        localStorage.setItem('logoType', 'img/happycamper.png');
    }
}
/* This function will set the default style of the website so that the style will stay the same as one clicks on multiple sections*/
function setStyle(){
    var style = localStorage.getItem("styleType");
    var ele = document.getElementById("theme");
    var png = document.getElementById("logo");
    if (style == "darkmode.css"){
      ele.setAttribute('href', 'darkmode.css');
      png.setAttribute('src', 'img/happycamper_dark.png');
    }
    else{
      ele.setAttribute('href', 'Style1.css');
      png.setAttribute('src', 'img/happycamper.png');
    }
}
/* This function calls the setStyle function everytime a webpage loads. I did it as a separate section so that in the future I can add more functions to this
when I need to. For example, I might add moving text that I want to have appear every time the page loads*/
window.onload = function(){
    setStyle();
}
