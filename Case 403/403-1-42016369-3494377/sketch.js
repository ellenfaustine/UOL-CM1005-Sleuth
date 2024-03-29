/*

Officer: 3494377
CaseNum: 403-1-42016369-3494377

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Norbert's Weiner Stand.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 67 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 67 pixels of Norbert's Weiner Stand - draw a Crimson ellipse with a radius of 67 around it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  fill()  - Use r,g,b values between 0 and 255.
  ellipse()
  dist()
  mouseX
  mouseY
  width
  height


*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    if(dist(mouseX, mouseY, 694, 496) < 68)
       {
        fill(220,20,60);
        ellipse(694,496,134);
       }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);

    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}
