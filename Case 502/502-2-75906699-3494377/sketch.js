/*

Officer: 3494377
CaseNum: 502-2-75906699-3494377

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var RecordA = {
	Token0: [ "stuff", "rejoice", "radiate"], 
	Token1: [ "succeed", "charge", "rejoice"], 
	Token2: [ "fence", "plug", "succeed"], 
	Token3: [ "hurry", "plug", "hurry"], 
	Token4: [ "campaign", "hit", "sneeze"], 
	Token5: [ "a donation", "radiate", "mend"], 
	Token6: [ "bake", "sail", "consider"], 
	Token7: [ "protect", "start", "rejoice"], 
	Token8: [ "rejoice", "plug", "play"], 
	Token9: [ "sail", "rejoice", "sail"]
};

var RecordB = {
	Token0: [ "sail", "succeed", "protect"], 
	Token1: [ "Hopper", "fence", "mend"], 
	Token2: [ "meddle", "stuff", "hurry"], 
	Token3: [ "protect", "sail", "syndicate"], 
	Token4: [ "protect", "bake", "play"], 
	Token5: [ "hurry", "plug", "charge"], 
	Token6: [ "mend", "radiate", "succeed"], 
	Token7: [ "tug", "Edsger", "$200,000"], 
	Token8: [ "protect", "ALGOL", "mend"], 
	Token9: [ "Governor Zuckerberg", "rejoice", "bake"]
};

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

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText = "Dear " + RecordB.Token9[0] + ", I am sure that something could be worked out in terms of " + RecordA.Token5[0] + " for your " + RecordA.Token4[0] + ". How does " + RecordB.Token7[2] + " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + RecordB.Token1[0] + " needs to be out of the picture. She’s caused enough trouble. Get the " + RecordB.Token3[2] + " to organise the " + RecordA.Token4[1] + " but I’d prefer it you don’t mention me or " + RecordB.Token8[1] + ". I owe them enough favours already. Your old friend, " + RecordB.Token7[1] + "";

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
