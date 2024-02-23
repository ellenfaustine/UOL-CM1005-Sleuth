/*

Officer: 3494377
CaseNum: 202-1-20600030-3494377

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Medium Purple filled text with a Gold outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(596,481);
	textFont(letterFont);
	textSize(30);
}

function draw()
{
	background(255);

fill(0,0,205);
stroke(153,50,204);
//	text("the", 11,159);
fill(64,224,208);
stroke(0,255,127);
//	text("since", 11,126);
fill(178,34,34);
stroke(32,178,170);
//	text("fe", 8,227);
fill(0,0,255);
stroke(124,252,0);
//	text("the", 140,195);
fill(178,34,34);
stroke(184,134,11);
//	text("have", 319,227);
fill(139,0,0);
stroke(220,20,60);
//	text("miss", 64,90);
fill(176,224,230);
stroke(0,250,154);
//	text("and", 135,159);
fill(184,134,11);
stroke(153,50,204);
//	text("I", 170,159);
fill(30,144,255);
stroke(255,165,0);
//	text("swi", 180,263);
fill(123,104,238);
stroke(255,255,0);
//	text("be", 488,159);
fill(186,85,211);
//	text("hold", 286,126);
fill(153,50,204);
//	text("only", 269,159);
fill(255,0,0);
stroke(139,0,0);
//	text("many", 384,90);
fill(124,252,0);
stroke(0,0,255);
//	text("you", 324,126);
fill(219,112,147);
stroke(0,255,255);
//	text("sky,", 93,159);
fill(75,0,130);
stroke(0,255,0);
//	text("spring,", 174,195);
fill(30,144,255);
stroke(0,0,128);
//	text("longing", 481,227);
fill(222,184,135);
stroke(0,191,255);
//	text("again", 9,195);
fill(0,0,139);
stroke(255,0,255);
//	text("we", 59,126);
fill(153,50,204);
stroke(255,165,0);
//	text("night", 45,159);
fill(0,255,127);
stroke(127,255,0);
//	text("you", 167,90);
fill(255,69,0);
stroke(160,82,45);
//	text("banking", 44,263);
fill(250,128,114);
stroke(0,255,127);
//	text("longer", 221,227);
fill(220,20,60);
stroke(184,134,11);
//	text("do", 277,227);
fill(238,232,170);
stroke(0,128,128);
//	text("on", 112,263);
fill(0,139,139);
stroke(0,255,0);
//	text("my", 368,195);
fill(255,255,0);
stroke(210,105,30);
//	text("to", 260,126);
fill(173,216,230);
stroke(32,178,170);
//	text("?", 59,195);
fill(255,0,255);
stroke(0,255,255);
//	text("I", 303,227);
fill(100,149,237);
stroke(255,0,255);
//	text("small", 482,195);
fill(0,128,0);
stroke(0,139,139);
//	text("return.", 235,263);
fill(100,149,237);
stroke(210,105,30);
//	text("When", 371,159);
fill(147,112,219);
	stroke(255,215,0);
	text("the", 261,90);
	text("place", 295,90);
    text("united", 513,159);
    text("is", 502,90);
fill(107,142,35);
stroke(255,140,0);
//	text("sy", 33,383);
fill(144,238,144);
stroke(32,178,170);
//	text("darl", 40,30);
fill(205,133,63);
stroke(0,191,255);
//	text("we", 456,159);
fill(50,205,50);
stroke(255,140,0);
//	text("yours,", 76,323);
fill(255,140,0);
stroke(255,165,0);
//	text("How", 134,227);
fill(255,0,0);
stroke(128,0,0);
//	text("it", 523,90);
fill(127,255,212);
stroke(0,255,255);
//	text("your", 138,263);
fill(0,100,0);
stroke(0,0,205);
//	text("x", 60,383);
fill(147,112,219);
    stroke(255,215,0);
	text("store", 389,227);
fill(128,0,0);
stroke(0,0,139);
//	text("side,", 399,195);
fill(255,165,0);
stroke(0,255,127);
//	text("at", 554,126);
fill(100,149,237);
stroke(128,0,0);
//	text("Bob,", 100,30);
fill(64,224,208);
stroke(255,165,0);
//	text("can", 186,159);
fill(144,238,144);
stroke(107,142,35);
//	text("around", 201,90);
fill(160,82,45);
stroke(0,0,255);
//	text("this", 442,227);
fill(153,50,204);
stroke(128,128,0);
//	text("up", 530,126);
fill(0,0,139);
stroke(153,50,204);
//	text("els", 26,227);
fill(238,232,170);
stroke(255,0,255);
//	text("long", 221,126);
fill(240,230,140);
stroke(255,69,0);
//	text("will", 423,159);
fill(139,0,0);
stroke(0,100,0);
//	text("think", 221,159);
fill(222,184,135);
stroke(255,215,0);
//	text("to", 363,227);
fill(238,130,238);
stroke(255,0,255);
//	text("you", 308,195);
fill(127,255,0);
stroke(165,42,42);
//	text("much", 175,227);
fill(65,105,225);
stroke(178,34,34);
//	text("ing", 70,30);
fill(255,215,0);
stroke(50,205,50);
//	text("ft", 210,263);
fill(0,0,128);
stroke(32,178,170);
//	text("kissed", 130,126);
//	text("I", 48,90);
fill(210,105,30);
//	text("at", 342,195);
fill(255,0,0);
stroke(107,142,35);
//	text("arms.", 409,126);
fill(255,140,0);
stroke(124,252,0);
//	text("town", 529,195);
fill(0,0,128);
stroke(46,139,87);
//	text("desolate.", 55,227);
fill(107,142,35);
stroke(25,25,112);
//	text("months", 434,90);
fill(0,0,205);
stroke(0,255,255);
//	text("?", 189,126);
fill(0,191,255);
stroke(75,0,130);
//	text("having", 109,90);
fill(0,0,205);
stroke(0,206,209);
//	text("Forever", 7,323);
fill(240,128,128);
stroke(0,255,255);
//	text("I", 461,126);
fill(128,0,128);
stroke(0,0,205);
//	text("you.", 334,159);
fill(218,112,214);
stroke(0,0,255);
//	text("in", 358,126);
fill(144,238,144);
stroke(0,206,209);
//	text("Dai", 7,383);
fill(219,112,147);
stroke(139,0,139);
//	text("How", 343,90);
fill(50,205,50);
stroke(0,255,255);
//	text("How", 7,90);
fill(255,69,0);
stroke(255,165,0);
//	text("I'm", 10,263);
fill(255,165,0);
stroke(165,42,42);
//	text("I", 205,126);
fill(0,255,255);
stroke(25,25,112);
//	text("this", 443,195);
fill(30,144,255);
stroke(46,139,87);
//	text("without", 237,195);
fill(173,216,230);
stroke(148,0,211);
//	text("stare", 477,126);
fill(30,144,255);
stroke(25,25,112);
//	text("in", 120,195);
fill(238,232,170);
stroke(255,0,0);
//	text("?", 543,227);
fill(219,112,147);
//	text("of", 308,159);
//	text("my", 378,126);
fill(34,139,34);
stroke(0,0,139);
//	text("Even", 75,195);
fill(205,133,63);
stroke(0,128,0);
//	text("last", 91,126);
fill(50,205,50);
stroke(127,255,0);
//	text("My", 7,30);



}
