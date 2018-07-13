var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h2 = document.querySelector("h2");

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandom(){
	console.log("Start Random");

	var x1 = Math.floor(Math.random()*256);
	var y1 = Math.floor(Math.random()*256);
	var z1 = Math.floor(Math.random()*256);
	var bgColor1 = "rgb(" + x1 + "," + y1 + "," + z1 + ")";

	var x2 = Math.floor(Math.random()*256);
	var y2 = Math.floor(Math.random()*256);
	var z2 = Math.floor(Math.random()*256);
	var bgColor2 = "rgb(" + x2 + "," + y2 + "," + z2 + ")";
 
 	//console.log(bgColor1);
 	//console.log(bgColor2);

 	color1.value = rgbToHex(x1,y1,z1);
 	color2.value = rgbToHex(x2,y2,z2);
 	//console.log(color1.value);

 	body.style.background = 
	"linear-gradient(to right, " 
	+ bgColor1
	+ ", " 
	+ bgColor2 
	+ ")";

	css.textContent = body.style.background + ";";
}

var btn = document.createElement("button");
btn.style.fontWeight = "bold";
btn.style.color = "red";
var txt = document.createTextNode("Random");
btn.appendChild(txt);
h2.appendChild(btn);

btn.addEventListener("click",setRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

