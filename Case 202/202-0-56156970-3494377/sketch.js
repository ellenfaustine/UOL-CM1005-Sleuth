/*

Officer: 3494377
CaseNum: 202-0-56156970-3494377

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Goldenrod text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(674,520);
	textFont(letterFont);
	textSize(28);
}

function draw()
{
	background(255);

fill(128,0,0);
//	text("moment", 79,179);
//	text("confession", 178,84);
fill(255,165,0);
//	text("l", 345,179);
fill(250,128,114);
//	text("Ever", 18,268);
fill(127,255,212);
//	text("be", 71,239);
fill(128,0,128);
//	text("You", 162,144);
//	text("the", 115,239);
//	text("quiet", 67,113);
fill(0,100,0);
//	text("May", 15,84);
fill(34,139,34);
//	text("kisse", 125,352);
fill(0,128,0);
//	text("since", 81,268);
fill(255,140,0);
//	text("It", 323,84);
fill(124,252,0);
//	text("from", 578,179);
fill(255,215,0);
//	text("I", 587,208);
//	text("that", 228,208);
//	text("your", 278,113);
fill(64,224,208);
//	text("the", 55,144);
fill(72,209,204);
//	text("true", 477,208);
fill(139,69,19);
//	text("I", 460,84);
//	text("knew", 514,179);
fill(0,191,255);
//	text("that", 162,179);
fill(0,255,127);
//	text("ive", 337,239);
fill(178,34,34);
//	text("is", 364,84);
fill(220,20,60);
//	text("hear", 219,113);
fill(0,128,0);
//	text("am", 494,84);
//	text("eye", 93,296);
fill(255,105,180);
//	text("in", 414,144);
fill(0,206,209);
//	text("my", 257,144);
fill(25,25,112);
//	text("s.", 135,296);
fill(128,128,0);
//	text("that", 134,113);
fill(184,134,11);
//	text("alone", 533,84);
fill(106,90,205);
//	text("one", 429,208);
fill(0,128,128);
//	text("saw", 247,179);
//	text("ely", 367,179);
fill(222,184,135);
//	text("am", 469,239);
fill(147,112,219);
//	text("few", 82,208);
fill(65,105,225);
//	text("and", 76,352);
fill(255,215,0);
//	text("only", 369,268);
fill(255,99,71);
//	text("?", 292,84);
//	text("those", 16,208);
fill(160,82,45);
//	text("From", 504,144);
//	text("when", 395,84);
fill(250,128,114);
//	text("cki", 177,239);
fill(148,0,211);
//	text("al", 323,239);
//	text("ce,", 437,179);
fill(233,150,122);
//	text("Love", 15,352);
//	text("Daisy,", 125,28);
fill(255,0,0);
//	text("green", 18,296);
fill(255,255,0);
//	text("est", 204,239);
//	text("like", 393,113);
fill(210,105,30);
//	text("think", 418,268);
fill(0,139,139);
//	text("Bob", 15,408);
    fill(218,165,32)
	text("make", 103,84);
	text("first", 20,179);
	text("chosen", 559,239);
    text("date", 230,268);
fill(153,50,204);
//	text("sunny", 298,144);
fill(154,205,50);
//	text("your", 517,268);
fill(255,99,71);
//	text("in", 595,84);
fill(138,43,226);
//	text("s,", 176,352);
//	text("ov", 349,179);
//	text("day", 363,144);
fill(160,82,45);
//	text("lovely", 57,28);
//	text("lu", 164,239);
//	text("blessed", 494,113);
    fill(218,165,32)
    text("April", 446,144);
fill(219,112,147);
//	text("of", 480,268);
//	text("love.", 530,208);
//	text("voice", 329,113);
fill(144,238,144);
//	text("you", 279,208);
fill(135,206,235);
//	text("your", 294,179);
//	text("can", 325,268);
fill(165,42,42);
//	text("fa", 413,179);
//	text("seconds", 139,208);
fill(0,0,205);
//	text("darling,", 568,268);
fill(255,99,71);
//	text("Oh", 15,28);
fill(210,105,30);
//	text("were", 323,208);
fill(173,216,230);
//	text("a", 153,84);
//	text("our", 146,268);
fill(32,178,170);
//	text("I", 69,84);
fill(173,216,230);
//	text("the", 445,113);
fill(32,178,170);
//	text("I", 185,113);
fill(135,206,250);
//	text("music", 589,113);
fill(0,0,128);
//	text("x", 69,408);
fill(147,112,219);
//	text("are", 210,144);
//	text("my", 388,208);
fill(25,25,112);
//	text("must", 17,239);
//	text("I", 480,179);
fill(255,0,0);
//	text("I", 435,239);
fill(238,130,238);
//	text("harp.", 104,144);
//	text("your", 508,239);
//	text("that", 384,239);
fill(139,0,0);
//	text("I", 291,268);
fill(0,0,139);
//	text("I", 213,179);
fill(154,205,50);
//	text("person", 250,239);
fill(0,0,128);
//	text("last", 185,268);
fill(147,112,219);
//	text("of", 18,144);
//	text("the", 563,144);
fill(255,0,255);
//	text("the", 18,113);



}
