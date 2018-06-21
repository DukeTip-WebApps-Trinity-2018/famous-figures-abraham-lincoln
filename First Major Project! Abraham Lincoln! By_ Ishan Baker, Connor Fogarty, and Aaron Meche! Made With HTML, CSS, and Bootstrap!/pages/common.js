window.onload = function () {
    document.querySelector('.navbar-brand img').onmouseover = navBrandMouseHover;
    console.log(document.querySelector('.navbar-brand img'));
    document.querySelector('h2').onmouseover = abrahamLincolnPara;
    document.querySelector('.navbar-brand img').onmouseout = navBrandHoverOut;
    document.querySelector('h2').onmouseout = abrahamLincolnParaOut;
    document.querySelector('.p2').onmouseover = p2_OnMouse;
    document.querySelector('.p3').onmouseover = p3_OnMouse;
    document.querySelector('.p4').onmouseover = p4_OnMouse;
    document.querySelector('.p4').onmouseout = p4_OnMouseOut;
    document.querySelector('.p3').onmouseout = p3_OnMouseOut;
    document.querySelector('.p2').onmouseout = p2_OnMouseOut;
    document.querySelector('.body1').onmouseout = body1_OnMouseOut;
    document.querySelector('.body2').onmouseout = body2_OnMouseOut;
    document.querySelector('.body3').onmouseout = body3_OnMouseOut;
    document.querySelector('.body4').onmouseout = body4_OnMouseOut;
    document.querySelector('.body1').onmouseover = body1_OnMouseHover;
    document.querySelector('.body2').onmouseover = body2_OnMouseHover;
    document.querySelector('.body3').onmouseover = body3_OnMouseHover;
    document.querySelector('.body4').onmouseover = body4_OnMouseHover;
    document.querySelector('.bio').onmouseover = bio_OnMouseHover;
    document.querySelector('.giantsbook').onmouseover = giants_OnMouseHover;
    document.querySelector('.johnwilkes').onmouseover = john_OnMouseHover;
    document.querySelector('#home-nav').onmouseover = home_OnMouseHover;
    document.querySelector('#sources-nav').onmouseover = sources_OnMouseHover;
    document.querySelector('#off-web-nav').onmouseover = offweb_OnMouseHover;
}
function navBrandMouseHover(){
    this.style.color = "black";
    this.style.backgroundcolor = "black";
}
function navBrandHoverOut(){
    this.style.color = "white";
    this.style.backgroundcolor = "white";
}
function abrahamLincolnPara(){
        this.style.color = "blue";
}
function abrahamLincolnParaOut(){
    this.style.color = "black";
}
function p2_OnMouse(){
    this.style.color = "blue";
}
function p3_OnMouse(){
    this.style.color = "blue";
}
function p4_OnMouse(){
    this.style.color = "blue";
}
function p2_OnMouseOut(){
    this.style.color = "black";
}
function p3_OnMouseOut(){
    this.style.color = "black";
}
function p4_OnMouseOut(){
    this.style.color = "black";
}
function body1_OnMouseOut(){
    this.style.color = "black";
}
function body2_OnMouseOut(){
    this.style.color = "black";
}
function body3_OnMouseOut(){
    this.style.color = "black";
}
function body4_OnMouseOut(){
    this.style.color = "black";
}
function body1_OnMouseHover(){
    this.style.color = "red"
}
function body2_OnMouseHover(){
    this.style.color = "red"
}
function body3_OnMouseHover(){
    this.style.color = "red"
}
function body4_OnMouseHover(){
    this.style.color = "red"
}
function sources_OnMouseHover(){
    this.innerHTML = "Sources Page";
}
function home_OnMouseHover(){
    this.innerHTML = "Home Page";
}
function offweb_OnMouseHover(){
    this.innerHTML = "Government Website About to Abraham";
}
function giants_OnMouseHover(){
    this.innerHTML = "On the rise of two main leaders during the Civil War time period";
}
function john_OnMouseHover(){
    this.innerHTML = "On the assasinator of Abraham Lincoln";
}
function bio_OnMouseHover(){
    this.innerHTML = "Biography on Abraham Lincoln";
}  