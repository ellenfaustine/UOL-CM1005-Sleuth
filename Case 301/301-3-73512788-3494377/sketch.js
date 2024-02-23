/*
The case of the Python Syndicate
Stage 4

Officer: 3494377
CaseNum: 301-3-73512788-3494377

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var pawelKarpinskiImg;
var bonesKarpinskiImg;
var countessHamiltonImg;
var adaLovelaceImg;
var annaKarpinskiImg;
var robbieKrayImg;

var bonesKarpinskiObject;


//declare your new objects below





function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	adaLovelaceImg = loadImage("ada.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	robbieKrayImg = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObject = {
		x: 408,
		y: 40,
		image: bonesKarpinskiImg
	};
    pawelKarpinskiObject = {
		x: 115,
		y: 40,
		image: pawelKarpinskiImg
	};
    countessHamiltonObject = {
		x: 701,
		y: 40,
		image: countessHamiltonImg
	};
    adaLovelaceObject = {
		x: 115,
		y: 309,
		image: adaLovelaceImg
	};
    annaKarpinskiObject = {
		x: 408,
		y: 309,
		image: annaKarpinskiImg
	};
     robbieKrayObject = {
		x: 701,
		y: 309,
		image: robbieKrayImg
	};
    


	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawelKarpinskiObject.image, pawelKarpinskiObject.x, pawelKarpinskiObject.y);
	image(bonesKarpinskiObject.image, bonesKarpinskiObject.x, bonesKarpinskiObject.y);
 image(countessHamiltonObject.image,countessHamiltonObject.x,  countessHamiltonObject.y);
	image(adaLovelaceObject.image, adaLovelaceObject.x, adaLovelaceObject.y);
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);
	image(robbieKrayObject.image, robbieKrayObject.x, robbieKrayObject.y);


}