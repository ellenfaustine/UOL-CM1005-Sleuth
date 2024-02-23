/*

Officer: 3494377
CaseNum: 701-1-36035998-3494377

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. It's so hard to remember right now. They were wearing a red parka. By the look of them they were younger than 46. It was so scary! I'll never forget their black eyes. They were carrying a metal briefcase. They had white hair. They were quite big, they probably weigh more than 65 Kg. Can I go home now Sir? 

*/

var usualSuspects = [
	{ 
		"name": "LINETTE PEGORD",
		"accessory": "metal briefcase",
		"hair": "white",
		"coat": "red parka",
		"weight": 71,
		"age": 43
	},
	{ 
		"name": "JAUNITA ZETLAND",
		"accessory": "laptop bag",
		"hair": "thick black",
		"coat": "green jacket",
		"weight": 70,
		"age": 58
	},
	{ 
		"name": "DRUSILLA GOODBURY",
		"accessory": "orange tote bag",
		"hair": "long white",
		"coat": "black overcoat",
		"weight": 64,
		"age": 45
	},
	{ 
		"name": "PIERRE PHINNEY",
		"accessory": "red backpack",
		"hair": "short black",
		"coat": "blue overcoat",
		"weight": 100,
		"age": 47
	},
	{ 
		"name": "HANG COURTWOOD",
		"accessory": "black duffle bag",
		"hair": "shaved",
		"coat": "black hoodie",
		"weight": 62,
		"age": 34
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
function checkSuspectTraits(usualSuspects){
    if(usualSuspects.coat == "red parka" && 
       usualSuspects.age < 46 && 
       usualSuspects.accessory == "metal briefcase" && 
       usualSuspects.hair == "white" && 
       usualSuspects.weight > 65){
        return true
    }
    return false
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    if(checkSuspectTraits(usualSuspects[i]) == true){
      fill(255,0,0);
      text(usualSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(usualSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
