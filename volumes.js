var pi = Math.PI;

var sphereRadius = 15;

var coneBase = 11;
var coneHeight = 22;

var rectLength = 5;
var rectHeight = 11;
var rectWidth = 467;

var	volumeSphere = "";
var volumeCone = "";
var volumeRectangular = "";

function sphere () {
	volumeSphere = ( 4 / 3 ) * pi * Math.pow(sphereRadius,3); 
	return volumeSphere;
}; 

function cone () {
	volumeCone = pi * (Math.pow((coneBase / 2),2)) * (coneHeight / 3);
	return volumeCone;
};

function rectangular () {
	volumeRectangular = rectWidth * rectHeight * rectLength;
	return volumeRectangular;
};

if (coneHeight <= rectLength && coneHeight <= rectHeight && coneBase <= rectWidth) {
	console.log ("The cone fits in the rectangle!");
} else if (coneHeight <= rectLength && coneHeight <= rectWidth && coneBase <= rectHeight){
	console.log ("The cone fits in the rectangle!");
} else	{
	console.log ("The cone doesn't fit in the rectangle!");
};

sphere();
cone();
rectangular();

console.log (volumeSphere);
console.log	(volumeCone);
console.log	(volumeRectangular);