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

var coneBaseRadius = coneBase / 2;
var sqrtMSqPlusHSq = Math.sqrt((Math.pow(coneBaseRadius,2)) + (Math.pow(coneHeight,2)));

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

if (sphereRadius <= (((coneHeight * coneBaseRadius) / sqrtMSqPlusHSq) / (1 + (coneBaseRadius)/(sqrtMSqPlusHSq)))) {
	console.log ("The sphere fits in the cone!");
} else {
	console.log ("The sphere does not fit the cone!");
};

sphere();
cone();
rectangular();
