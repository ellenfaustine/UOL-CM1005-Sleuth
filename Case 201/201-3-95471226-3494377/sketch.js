/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 3494377
CaseNum: 201-3-95471226-3494377

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(445,376);
    vertex(644,242);
    vertex(556,130);
    vertex(567,94);
    vertex(588,97);
    vertex(592,136);
    vertex(650,187);
    vertex(714,187);
    vertex(723,208);
    vertex(741,212);
    vertex(764,246);
    vertex(756,272);
    vertex(755,302);
    vertex(741,316);
    vertex(739,363);
    vertex(786,345);
    vertex(801,354);
    vertex(797,374);
    vertex(715,391);
    vertex(691,351);
    vertex(550,470);
    vertex(485,490);
    vertex(448,480);
    vertex(403,424);
    vertex(445,376);
    
    endShape();
}
