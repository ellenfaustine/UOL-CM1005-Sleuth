/*

Officer: 3494377
CaseNum: 702-0-33028314-3494377

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of chase_car to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar()
{
    chase_car.miles_driven += chase_car.accel_amount;
    chase_car.engineVibrate_value += random(-0.02,0.02);
    chase_car.engineVibrate_value = constrain(chase_car.engineVibrate_value, 0.01, 0.86);
    turnoverMotor(chase_car);
	/*
	This function should do the following: 
	 - increment chase_car's miles_driven property by its accel_amount property 
	 - add a random amount between -0.02 and 0.02 to chase_car's engineVibrate_value property
	 - use the constrain function to constrain chase_car's engineVibrate_value property to values between 0.01 and 0.86
	 - call the turnoverMotor function passing chase_car as an argument
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var chase_car;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	chase_car = 
	{
		x_pos: roadLeftEdge + roadWidth/4,
		y_pos: 300,
		miles_driven: 0,
		accel_amount: 3,
		engineVibrate_value: 0,
		car_model: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	moveCar();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (chase_car.miles_driven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (chase_car.miles_driven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(chase_car);
	image
	(
		carImages["detective"],
		chase_car.x_pos - carImages["detective"].width/2 + random(-chase_car.engineVibrate_value, chase_car.engineVibrate_value),
		chase_car.y_pos + random(-chase_car.engineVibrate_value, chase_car.engineVibrate_value)
	);

}

function turnoverMotor(car)
{

	car.exhaust.push({size: 2, x: car.x_pos, y: car.y_pos + carImages[car.car_model].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accel_amount/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
