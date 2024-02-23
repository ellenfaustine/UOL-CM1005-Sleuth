/*

Officer: 3494377
CaseNum: 701-2-41200173-3494377

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from darby daviswood. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. It was so scary! The person I saw was male. They seemed to be between the age of 38 and 72 years old. It was very dark and I could barely see, They brobably weigh between 78 and 77 kg. Their expression seemed menacing. I remember they had a anchor tattoo. They were wearing a red parka. They were carrying a red backpack. They were fairly tall, I think between a height of 176 and 210 cm. Can I go home now Sir? 

*/

var allSuspects = [
    { 
        "name": "LARRAINE CROME",
        "coat": "red parka",
        "expression": "menacing",
        "accessory": "red backpack",
        "gender": "male",
        "age": 40,
        "weight": 77,
        "height": 192
    },
    { 
        "name": "DARBY SYMMES",
        "coat": "green jacket",
        "expression": "confused",
        "accessory": "laptop bag",
        "gender": "male",
        "age": 36,
        "weight": 71,
        "height": 173
    },
    { 
        "name": "JESUS GOODBURY",
        "coat": "blue overcoat",
        "expression": "blank",
        "accessory": "black duffle bag",
        "gender": "male",
        "age": 44,
        "weight": 56,
        "height": 159
    },
    { 
        "name": "JESSIA DAVISWOOD",
        "coat": "yellow poncho",
        "expression": "empty",
        "accessory": "brown paper bag",
        "gender": "male",
        "age": 37,
        "weight": 66,
        "height": 166
    },
    { 
        "name": "LIANNE DORCEY",
        "coat": "black overcoat",
        "expression": "angry",
        "accessory": "metal briefcase",
        "gender": "female",
        "age": 49,
        "weight": 73,
        "height": 179
    },
    { 
        "name": "RANDEE MAUBERT",
        "coat": "black hoodie",
        "expression": "depressed",
        "accessory": "orange plastic bag",
        "gender": "female",
        "age": 21,
        "weight": 80,
        "height": 183
    },
    { 
        "name": "LESLEY NIEMELA",
        "coat": "white fur coat",
        "expression": "menacing",
        "accessory": "plastic box",
        "gender": "female",
        "age": 42,
        "weight": 67,
        "height": 173
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
function matchProperties(allSuspects){

    var count = 0;
    if(allSuspects.gender == "male"){ 
        count++;
    }
    if((allSuspects.age > 38 && allSuspects.age < 72)){ 
        count++;
    }
    if((allSuspects.weight >= 77 && allSuspects.weight <= 78)){ 
        count++;
    }
    if(allSuspects.expression == "menacing"){ 
        count++;
    }
    if(allSuspects.coat == "red parka"){ 
        count++;
    }
    if(allSuspects.accessory == "red backpack"){
        count++;
    }
    if((allSuspects.height >176 && allSuspects.height <210)){
        count++;
    }


    return count
}

function draw()
{
    //You don't need to alter this code
    image(backgroundImg, 0, 0);

    for(let i = 0 ; i < allSuspects.length; i++){
        let matchingProperties = matchProperties(allSuspects[i]);
        fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
        text("found " + matchingProperties + " matching properties for " + allSuspects[i].name, 60, 60 + i * 20);
    }
}
