/*

Officer: 3494377
CaseNum: 501-1-56212810-3494377

Case 501 - Max Von Neuman - stage 2

Madame McCarthy says that to summon Max Von Neuman a different approach is needed.
Follow her advice below.

How young Max loved to march with his toy soldiers.
To speak to Max beyond the grave you must place a toy soldier in each of the dashed circles.
Use the image() and the soldier variable command to place each soldier in its position.
You will need to use a separate for loop for each of the diagonal lines.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, soldier;

function preload() {
    backgroundImg = loadImage("background.jpg");
    soldier = loadImage("Soldier.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    for(var i=0; i < 8; i++){
        image(soldier, 657 + i * 42 , 387 + i * 12);
    }

    for(var i=0; i < 5; i++){
        image(soldier, 706 + i * 45 , 476 + i * -46);
    }
}
