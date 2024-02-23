/*
The case of the Python Syndicate
Stage 2


Officer: 3494377
CaseNum: 301-1-31021713-3494377

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Pawel Karpinski

- The variables for Pawel Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Pawel Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Pawel Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Pawel Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var countess_hamilton_img;
var bones_karpinski_img;
var anna_karpinski_img;
var pawel_karpinski_img;
var rocky_kray_img;
var cecil_karpinski_img;


var pawel_karpinski_x_location = 115;
var pawel_karpinski_y_location = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_img = loadImage("countessHamilton.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_img, pawel_karpinski_x_location, pawel_karpinski_y_location);

	image(countess_hamilton_img, pawel_karpinski_x_location, pawel_karpinski_y_location-269);
	image(bones_karpinski_img, pawel_karpinski_x_location+293, pawel_karpinski_y_location-269);
	image(anna_karpinski_img, pawel_karpinski_x_location+586, pawel_karpinski_y_location-269);
	image(rocky_kray_img, pawel_karpinski_x_location+293, pawel_karpinski_y_location);
	image(cecil_karpinski_img, pawel_karpinski_x_location+586, pawel_karpinski_y_location);

}