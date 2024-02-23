/*

Officer: 3494377
CaseNum: 303-2-23826675-3494377

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Make Classified_Locker_Value_a equal to the value of mouseY
	- Use the 'max' function to prevent Classified_Locker_Value_a from falling below 4

	When any key is pressed:
	- Increment Classified_Locker_Value_b by 2
	- Use the 'min' function to prevent Classified_Locker_Value_b from going above 16

	Whilst the mouse is being dragged:
	- Make Classified_Locker_Value_c equal to the value of mouseY
	- Use the 'max' function to prevent Classified_Locker_Value_c from falling below 5

	When the mouse button is pressed:
	- Increment Classified_Locker_Value_d by 2
	- Use the 'min' function to prevent Classified_Locker_Value_d from going above 18

	Whilst the mouse is being dragged:
	- Make Classified_Locker_Value_e equal to the value of mouseY
	- Use the 'min' function to prevent Classified_Locker_Value_e from going above 77



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Classified_Locker_Value_a;
var Classified_Locker_Value_b;
var Classified_Locker_Value_c;
var Classified_Locker_Value_d;
var Classified_Locker_Value_e;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Classified_Locker_Value_a = 0;
	Classified_Locker_Value_b = 0;
	Classified_Locker_Value_c = 0;
	Classified_Locker_Value_d = 0;
	Classified_Locker_Value_e = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mousePressed()
{
//     Make Classified_Locker_Value_a equal to the value of mouseY
//	- Use the 'max' function to prevent Classified_Locker_Value_a from falling below 4
//    Increment Classified_Locker_Value_d by 2
//	- Use the 'min' function to prevent Classified_Locker_Value_d from going above 18
    Classified_Locker_Value_a = mouseY
    Classified_Locker_Value_a = max(Classified_Locker_Value_a, 4)
     Classified_Locker_Value_d += 2
   Classified_Locker_Value_d = min(Classified_Locker_Value_d, 18)
}

function keyPressed()
{
//    Increment Classified_Locker_Value_b by 2
//	- Use the 'min' function to prevent Classified_Locker_Value_b from going above 16
    Classified_Locker_Value_b += 2
    Classified_Locker_Value_b = min(Classified_Locker_Value_b, 16)
}

function mouseDragged()
{
//     Make Classified_Locker_Value_c equal to the value of mouseY
//	- Use the 'max' function to prevent Classified_Locker_Value_c from falling below 5
//     Make Classified_Locker_Value_e equal to the value of mouseY
//	- Use the 'min' function to prevent Classified_Locker_Value_e from going above 77
    Classified_Locker_Value_c = mouseY
   Classified_Locker_Value_c = max(Classified_Locker_Value_c, 5)
    Classified_Locker_Value_e = mouseY
    Classified_Locker_Value_e = min(Classified_Locker_Value_e, 77)
}
///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Classified_Locker_Value_a, 19);
	pop();

	push();
	translate(120,380);
	drawDial(140,Classified_Locker_Value_b, 20);
	pop();

	push();
	translate(280,170);
	drawDial(140,Classified_Locker_Value_c, 25);
	pop();

	push();
	translate(280,380);
	drawDial(140,Classified_Locker_Value_d, 23);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Classified_Locker_Value_e);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
