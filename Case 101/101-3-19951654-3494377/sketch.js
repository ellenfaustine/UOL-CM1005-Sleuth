/*

Officer: 3494377
CaseNum: 101-3-19951654-3494377

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Blue filled rectangle with a Medium Orchid outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Dark Orange filled
rectangle with a Spring Green outline around him.

Identify the man reading the newspaper by drawing a Orange filled rectangle
with a Light Sea Green outline around him.

Identify the woman with the dog by drawing a Medium Blue filled rectangle with a
Spring Green outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    stroke(186,85,211);
    fill(0,0,255,100);
    rect(1325,63,230,477);
    stroke(0,255,127);
    fill(255,140,0,100);
    rect(42,266,215,295);
    stroke(32,178,170);
    fill(255,165,0,100);
    rect(277,108,245,490);
    stroke(0,255,127);
    fill(0,0,205,100);
    rect(876,30,195,425);


	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
