/*

Officer: 3494377
CaseNum: 403-3-44366287-3494377

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Gosling Road.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 64 meters from Jerry's Wine Bar then alert local police by drawing a CornflowerBlue circle around it with a radius of 64 pixels.
- if Shiffman is in Gates Department Store then the neighbourhood watch must be notified by drawing a PaleVioletRed rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a Orchid rectangle covering the area between Reynolds Street, Berners-Lee Street, Gosling Road and Huffman Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

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
    if(dist(mouseX, mouseY,1808, 682) < 65)
    {
       fill(100,149,237);
        ellipse(1808,682,128);
    }
    else if((mouseX > 1620 && mouseX < 1739) && (mouseY > 296 && mouseY < 354))
    {
        fill(219,112,147);
        rect(1620,296,119,60);
    }
    else{
        fill(218,112,214);
        rect(1040,121,138,323);
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
