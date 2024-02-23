/*

Officer: 3494377
CaseNum: 202-3-22524329-3494377

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Khaki filled text with a Forest Green outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(631,467);
	textSize(29);
}

function draw()
{
	background(255);

	fill(139,0,139);
	stroke(218,165,32);
	textFont(Melissa);
	// text("Bob,", 130,29);
	fill(184,134,11);
	stroke(139,0,0);
	textFont(Diggity);
	// text("avoiding", 13,155);
	fill(178,34,34);
	stroke(139,69,19);
	textFont(Melissa);
	// text("The", 137,253);
	fill(152,251,152);
	stroke(210,105,30);
	textFont(Ballpointprint);
	// text("silence.", 319,253);
	fill(72,209,204);
	stroke(0,0,128);
	textFont(Diggity);
	// text("more", 501,220);
	fill(240,230,140);
	stroke(160,82,45);
	textFont(Ballpointprint);
	// text("sec", 177,253);
	fill(238,232,170);
	// text("delays.", 426,87);
	fill(50,205,50);
	stroke(148,0,211);
	textFont(Diggity);
	// text("Perhaps", 162,155);
	push();
	fill(64,224,208);
	stroke(0,255,255);
	// text("guarded", 91,220);
	pop();
	stroke(25,25,112);
	textFont(Ballpointprint);
	// text("rets,", 210,253);
	fill(135,206,250);
	stroke(0,255,0);
	textFont(RonsFont);
	// text("Forever", 16,311);
	fill(173,255,47);
	stroke(184,134,11);
	textFont(Ballpointprint);
	// text("ca", 394,119);
	push();
	fill(255,255,0);
	stroke(0,128,0);
	textFont(Melissa);
	// text("of", 75,119);
	pop();
	stroke(0,255,127);
	textFont(RonsFont);
	// text("?", 525,187);
	fill(139,69,19);
	stroke(34,139,34);
	textFont(Melissa);
	// text("how", 395,220);
	push();
	fill(139,0,0);
	stroke(128,0,0);
	// text("I", 7,87);
	pop();
	fill(240,230,140);
	textFont(RonsFont);
	 text("break", 539,155);
	 text("money", 100,119);
	 text("ignore", 155,87);
	fill(255,69,0);
	stroke(0,100,0);
	textFont(Melissa);
	// text("If", 193,119);
	fill(0,191,255);
	stroke(154,205,50);
	textFont(Ballpointprint);
	// text("go", 374,155);
	push();
	fill(127,255,0);
	textFont(RonsFont);
	// text("continual", 311,87);
	pop();
	stroke(0,100,0);
	textFont(Diggity);
	// text("for", 473,155);
	fill(107,142,35);
	stroke(255,0,0);
	textFont(RonsFont);
	// text("out.", 207,187);
	fill(255,0,0);
	stroke(255,140,0);
	textFont(Diggity);
	// text("short", 13,119);
	fill(238,232,170);
	stroke(0,255,0);
	textFont(RonsFont);
	// text("I", 559,220);
	fill(186,85,211);
	stroke(0,206,209);
	textFont(Melissa);
	// text("longer", 102,87);
	fill(0,255,0);
	stroke(0,0,128);
	// text("so", 65,220);
	push();
	fill(255,127,80);
	stroke(128,0,128);
	textFont(Diggity);
	// text("sort", 70,187);
	pop();
	fill(255,255,0);
	stroke(107,142,35);
	textFont(Diggity);
	// text("so,", 217,119);
	fill(210,105,30);
	stroke(0,206,209);
	textFont(Ballpointprint);
	// text("you", 547,87);
	push();
	fill(124,252,0);
	stroke(0,128,128);
	// text("darl", 48,29);
	pop();
	fill(173,216,230);
	stroke(0,255,255);
	// text("?", 130,155);
	fill(219,112,147);
	stroke(0,139,139);
	// text("I", 251,119);
	fill(123,104,238);
	stroke(127,255,0);
	// text("relationship", 344,187);
	fill(186,85,211);
	stroke(148,0,211);
	// text("Is", 258,187);
	fill(64,224,208);
	stroke(0,0,128);
	// text("no", 67,87);
	fill(199,21,133);
	stroke(0,128,128);
	// text("you", 510,119);
	fill(123,104,238);
	stroke(0,0,139);
	// text("all", 173,187);
	push();
	fill(124,252,0);
	stroke(128,0,128);
	textFont(Diggity);
	// text("take", 59,253);
	pop();
	fill(178,34,34);
	textFont(Diggity);
	// text("x", 73,369);
	fill(0,0,128);
	stroke(255,0,255);
	textFont(RonsFont);
	// text("much", 433,220);
	fill(0,255,255);
	stroke(0,255,255);
	// text("this", 122,187);
	push();
	fill(127,255,0);
	stroke(154,205,50);
	textFont(Ballpointprint);
	// text("our", 302,187);
	pop();
	fill(124,252,0);
	stroke(148,0,211);
	textFont(Ballpointprint);
	// text("ing", 84,29);
	fill(30,144,255);
	stroke(255,0,255);
	textFont(Melissa);
	// text("sometimes.", 178,220);
	fill(165,42,42);
	stroke(148,0,211);
	textFont(Ballpointprint);
	// text("can", 22,87);
	fill(138,43,226);
	stroke(255,69,0);
	textFont(RonsFont);
	// text("and", 12,187);
	fill(173,255,47);
	stroke(255,165,0);
	textFont(Melissa);
	// text("yours,", 113,311);
	fill(184,134,11);
	stroke(255,0,255);
	textFont(Ballpointprint);
	// text("these", 237,87);
	fill(0,0,128);
	stroke(0,255,0);
	textFont(Diggity);
	// text("me", 92,155);
	fill(135,206,250);
	stroke(0,100,0);
	textFont(Ballpointprint);
	// text("the", 269,253);
	fill(128,0,0);
	stroke(255,215,0);
	textFont(Diggity);
	// text("I'm", 275,220);
	fill(176,224,230);
	stroke(255,0,255);
	textFont(Ballpointprint);
	// text("we", 244,155);
	stroke(218,165,32);
	textFont(Diggity);
	// text("a", 516,155);
	fill(100,149,237);
	stroke(25,25,112);
	textFont(Ballpointprint);
	// text("not", 312,220);
	fill(0,0,139);
	stroke(50,205,50);
	// text("You", 545,187);
	push();
	fill(220,20,60);
	stroke(124,252,0);
	textFont(Diggity);
	// text("can", 286,119);
	pop();
	stroke(46,139,87);
	textFont(Melissa);
	// text("My", 16,29);
	fill(0,255,255);
	stroke(0,0,128);
	// text("?", 177,119);
	push();
	fill(184,134,11);
	stroke(0,0,255);
	textFont(Diggity);
	// text("can", 17,253);
	pop();
	fill(0,0,255);
	textFont(RonsFont);
	// text("should", 288,155);
	fill(238,130,238);
	stroke(0,255,127);
	// text("Daisy", 7,369);
	fill(255,127,80);
	stroke(0,100,0);
	textFont(Ballpointprint);
	// text("Are", 455,119);
	fill(240,230,140);
	stroke(34,139,34);
	textFont(RonsFont);
	 text("safe", 467,187);
	fill(34,139,34);
	stroke(0,191,255);
	textFont(Melissa);
	// text("Are", 511,87);
	fill(255,69,0);
	stroke(218,165,32);
	textFont(Diggity);
	// text("?", 115,253);
	fill(178,34,34);
	stroke(255,0,255);
	textFont(RonsFont);
	// text("are", 13,220);
	fill(127,255,0);
	stroke(128,0,128);
	textFont(Ballpointprint);
	// text("sh.", 413,119);
	fill(139,0,0);
	stroke(50,205,50);
	textFont(Melissa);
	// text("sure", 354,220);
	push();
	fill(0,139,139);
	stroke(199,21,133);
	textFont(Ballpointprint);
	// text("away", 412,155);
	pop();
	fill(0,139,139);
	stroke(148,0,211);
	textFont(RonsFont);
	// text("send", 328,119);



}
