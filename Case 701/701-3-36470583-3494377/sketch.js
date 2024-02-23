/*

Officer: 3494377
CaseNum: 701-3-36470583-3494377

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from tamica jeni.
All they need is for you to do the detective work.

This time you must implement two functions:

- A testProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A locateGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - function locateGuilty(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They had thick black hair. They seemed to be between the age of 34 and 42 years old. They were fairly tall, I think between a height of 155 and 180 cm. They were carrying a plastic box. I'm not quite sure. They were wearing a green jacket. It's so hard to remember right now. They brobably weigh between 58 and 74 kg. Their expression seemed nerveous. It's so hard to remember right now. I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. They wore black glasses. That's all I know officer. 

*/

var usualSuspects = [
	{ 
		"name": "KITTY PHINNEY",
		"hair": "dark brown",
		"accessory": "orange plastic bag",
		"coat": "black hoodie",
		"glasses": "very thick",
		"height": 177,
		"weight": 74,
		"age": 62
	},
	{ 
		"name": "ERMELINDA BROADVIEW",
		"hair": "thin blond",
		"accessory": "red backpack",
		"coat": "yellow poncho",
		"glasses": "blue",
		"height": 162,
		"weight": 78,
		"age": 35
	},
	{ 
		"name": "DEEDEE MAUBERT",
		"hair": "short black",
		"accessory": "black duffle bag",
		"coat": "red parka",
		"glasses": "light tan",
		"height": 189,
		"weight": 71,
		"age": 31
	},
	{ 
		"name": "MALINDA CASIMERE",
		"hair": "thick black",
		"accessory": "plastic box",
		"coat": "green jacket",
		"glasses": "black",
		"height": 160,
		"weight": 67,
		"age": 38
	},
	{ 
		"name": "RANDEE PORTOS",
		"hair": "white",
		"accessory": "glass bottle",
		"coat": "black overcoat",
		"glasses": "thin metallic",
		"height": 183,
		"weight": 80,
		"age": 41
	},
	{ 
		"name": "JENIFFER JENI",
		"hair": "shaved",
		"accessory": "orange tote bag",
		"coat": "green army coat",
		"glasses": "cheap plastic",
		"height": 173,
		"weight": 74,
		"age": 32
	},
	{ 
		"name": "JACQUELINE JOYER",
		"hair": "no",
		"accessory": "brown paper bag",
		"coat": "white fur coat",
		"glasses": "white",
		"height": 183,
		"weight": 76,
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

// Declare both your functions here
function testProperties(usualSuspects){
    let count = 0;
    
    if(usualSuspects.hair == "thick black"){
       count++;
    }
    if(usualSuspects.age > 34 && usualSuspects.age < 42){
        count++;
    }
    if(usualSuspects.height > 155 && usualSuspects.height < 180){
        count++;
    }
    if(usualSuspects.accessory == "plastic box"){
        count++;
    }
    if(usualSuspects.coat == "green jacket"){
        count++;
    }
    if(usualSuspects.weight > 58 && usualSuspects.weight < 74){
        count++;
    }
    if(usualSuspects.glasses == "black"){
        count++
    }
    return count;
}


function locateGuilty(){
    
//    let tempmaxcount = 0;
//    let tempcounti = 0;
    
    for(var i=0; i < usualSuspects.length; i++){
        let a = testProperties(usualSuspects[i]);
//        let b = usualSuspects[i];
        let c = {};
        
        if(a == 7) {
        return usualSuspects[i];
    }
        
//        if(tempcount == 7){
//            tempmaxcount = tempcount;
//            tempcounti = i;
//        }

    }
    }
    
//    if(tempcount == 7) {
//        return usualSuspects[tempcounti];
//    }else{
//    let tempObject = {};
//    return tempObject;
//    }

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(locateGuilty().name + " is guilty!", 60, 80);
}
