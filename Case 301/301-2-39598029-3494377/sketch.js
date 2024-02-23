/*
The case of the Python Syndicate
Stage 3


Officer: 3494377
CaseNum: 301-2-39598029-3494377

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Bones Karpinski has been declared and initialised
- Position each mugshot relative to Bones Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Bones Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Bones Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var robbieKrayImage;
var adaLovelaceImage;
var cecilKarpinskiImage;
var countessHamiltonImage;
var bonesKarpinskiImage;
var annaKarpinskiImage;

var bonesKarpinskiObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImage = loadImage("krayBrothers2.png");
	adaLovelaceImage = loadImage("ada.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObj = {
		x: 408,
		y: 309,
		image: bonesKarpinskiImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);

	image(robbieKrayImage, bonesKarpinskiObj.x-293, bonesKarpinskiObj.y-269);
	image(adaLovelaceImage, bonesKarpinskiObj.x, bonesKarpinskiObj.y-269);
	image(cecilKarpinskiImage, bonesKarpinskiObj.x+293, bonesKarpinskiObj.y-269);
	image(countessHamiltonImage, bonesKarpinskiObj.x-293, bonesKarpinskiObj.y);
	image(annaKarpinskiImage, bonesKarpinskiObj.x+293, bonesKarpinskiObj.y);

}