/*

Officer: 3494377
CaseNum: 701-0-37016045-3494377

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist nelson oorin and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They had dark brown hair. The person I saw was female. Their expression seemed empty. It's so hard to remember right now. It was so scary! I'm sorry, that's all I can recall right now

*/

var usualSuspects = [
	{ 
		"name": "NELSON BROADVIEW",
		"gender": "female",
		"expression": "empty",
		"hair": "dark brown"
	},
	{ 
		"name": "LAVERNE TINTLE",
		"gender": "female",
		"expression": "nerveous",
		"hair": "no"
	},
	{ 
		"name": "DARBY ASHELY",
		"gender": "male",
		"expression": "sad",
		"hair": "thin blond"
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function testProperties(usualSuspects){
    if (usualSuspects.hair == "dark brown" && usualSuspects.gender == "female" && usualSuspects.expression == "empty"){
        return true;
    }
    return false;
        
    
}



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    if(testProperties(usualSuspects[i]) == true){
      fill(255,0,0);
      text(usualSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(usualSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
