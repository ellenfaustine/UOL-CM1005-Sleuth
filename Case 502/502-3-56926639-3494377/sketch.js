/*

Officer: 3494377
CaseNum: 502-3-56926639-3494377

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var ACensored = [
{
	detail0: ["you", "play", "radiate", "clip"], 
	detail1: ["stuff", "plug", "play", "sneeze"], 
	detail2: ["rejoice", "consider", "charge", "mend"]
},
{
	detail0: ["meddle", "sneeze", "sneeze", "stuff"], 
	detail1: ["radiate", "bake", "stuff", "rejoice"], 
	detail2: ["clip", "fence", "smile", "meddle"]
},
{
	detail0: ["tug", "charge", "plug", "hurry"], 
	detail1: ["donation", "radiate", "protect", "charge"], 
	detail2: ["meddle", "rejoice", "sail", "smile"]
},
{
	detail0: ["mend", "rejoice", "sail", "play"], 
	detail1: ["meddle", "start", "rejoice", "development"], 
	detail2: ["syndicate", "fence", "sneeze", "Edsger"]
},
{
	detail0: ["consider", "hurry", "radiate", "rejoice"], 
	detail1: ["mend", "fence", "hurry", "play"], 
	detail2: ["protect", "rejoice", "meddle", "start"]
}];

var BCensored = [
{
	detail0: ["clip", "succeed", "plug", "sail"], 
	detail1: ["hurry", "play", "hurry", "hurry"], 
	detail2: ["COBOL", "rejoice", "clip", "Governor Zuckerberg"]
},
{
	detail0: ["radiate", "tug", "sneeze", "rejoice"], 
	detail1: ["consider", "hurry", "succeed", "rejoice"], 
	detail2: ["mend", "fence", "ALGOL", "sail"]
},
{
	detail0: ["meddle", "protect", "hurry", "clip"], 
	detail1: ["play", "consider", "tug", "play"], 
	detail2: ["mend", "mend", "mend", "stuff"]
},
{
	detail0: ["play", "smile", "rejoice", "stuff"], 
	detail1: ["consider", "$200,000", "plug", "clip"], 
	detail2: ["tug", "bake", "charge", "charge"]
},
{
	detail0: ["play", "fence", "bake", "consider"], 
	detail1: ["sneeze", "mend", "succeed", "ALGOL fish wholesalers"], 
	detail2: ["protect", "clip", "mend", "mend"]
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText = "My dearest " + ACensored[3].detail2[3] + ", I have just received your very generous " + ACensored[2].detail1[0] + " of " + BCensored[3].detail1[1] + ". Thank you. This will be invaluable to our campaign. " + BCensored[1].detail2[2] + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + ACensored[0].detail0[0] + " or " + BCensored[4].detail1[3] + " to the " + ACensored[3].detail2[0] + ". Your new " + ACensored[3].detail1[3] + " at the " + BCensored[0].detail2[0] + " can now proceed without impediment. Yours sincerely, " + BCensored[0].detail2[3] + "";

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
