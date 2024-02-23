/*

Officer: 3494377
CaseNum: 502-1-89683930-3494377

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var AEvidence = [
	{fragment0: "Edsger", fragment1: "radiate", fragment2: "syndicate"}, 
	{fragment0: "a donation", fragment1: "smile", fragment2: "mend"}, 
	{fragment0: "sail", fragment1: "mend", fragment2: "start"}, 
	{fragment0: "fence", fragment1: "start", fragment2: "hurry"}, 
	{fragment0: "stuff", fragment1: "COBOL", fragment2: "capital"}, 
	{fragment0: "play", fragment1: "meddle", fragment2: "radiate"}, 
	{fragment0: "consider", fragment1: "bake", fragment2: "clip"}, 
	{fragment0: "charge", fragment1: "fence", fragment2: "hurry"}, 
	{fragment0: "start", fragment1: "sneeze", fragment2: "sail"}, 
	{fragment0: "charge", fragment1: "bake", fragment2: "Governor Zuckerberg"}
];

var BEvidence = [
	{fragment0: "consider", fragment1: "plug", fragment2: "stuff"}, 
	{fragment0: "clip", fragment1: "start", fragment2: "play"}, 
	{fragment0: "stuff", fragment1: "Hopper’s", fragment2: "plug"}, 
	{fragment0: "bake", fragment1: "consider", fragment2: "she has"}, 
	{fragment0: "mend", fragment1: "charge", fragment2: "plug"}, 
	{fragment0: "hurry", fragment1: "protect", fragment2: "consider"}, 
	{fragment0: "bake", fragment1: "romantic", fragment2: "delicate"}, 
	{fragment0: "meddle", fragment1: "charge", fragment2: "mend"}, 
	{fragment0: "rejoice", fragment1: "succeed", fragment2: "sneeze"}, 
	{fragment0: "play", fragment1: "succeed", fragment2: "sail"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  redactedText = "My dearest " + AEvidence[0].fragment0 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + BEvidence[2].fragment1 + " intervention. I suspect that " + BEvidence[3].fragment2 + " a " + BEvidence[6].fragment1 + " interest at the " + AEvidence[4].fragment1 + ". I and the " + AEvidence[0].fragment2 + " appreciate your many contributions over the years. However, this is a most " + BEvidence[6].fragment2 + " matter which would require significant " + AEvidence[4].fragment2 + " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + AEvidence[1].fragment0 + " to my forthcoming campaign would help. Yours sincerely, " + AEvidence[9].fragment2 + "";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
