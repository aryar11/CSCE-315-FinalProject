/* This function looks at the "theme" of the link to the stylesheet and changes it to the opposite style. 
It also stores the Name of the style into local storage so it can be read later to keep the change persistant through the website*/
function switchStyles(){
    var theme = document.getElementById("theme");
    if(theme.getAttribute('href') == 'Style1.css'){
        theme.setAttribute('href', 'Style2.css');
        localStorage.setItem("St","TAMU");
    } 
    else{
        theme.setAttribute('href', 'Style1.css');
        localStorage.setItem("St", "Default");
    }
}
/* This function will set the default style of the website so that the style will stay the same as one clicks on multiple sections*/
function setStyle(){
    var style = localStorage.getItem("St");
    if (style == "TAMU")
        theme.setAttribute('href', 'Style2.css');
    else
        theme.setAttribute('href', 'Style1.css');
}
/* This function calls the setStyle function everytime a webpage loads. I did it as a separate section so that in the future I can add more functions to this
when I need to. For example, I might add moving text that I want to have appear every time the page loads*/
window.onload = function(){
    setStyle();
}