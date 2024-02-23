/*

Officer: 3494377
CaseNum: 702-2-28130773-3494377

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a white car with a number_plate of 6KGBWC. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of chase_vehicle and the cars in
vehicleObjectsArray to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveVehicle()
{
	/*
	This function should do the following: 
	 - increment chase_vehicle's miles_amnt property by its speed_value property 
	 - add a random amount between -0.1 and 0.1 to chase_vehicle's engineShudder_val property
	 - use the constrain function to constrain chase_vehicle's engineShudder_val property to values between 0.1 and 1.25
	 - call the DriveCarMotor function passing chase_vehicle as an argument
	*/
    chase_vehicle.miles_amnt += chase_vehicle.speed_value;
    chase_vehicle.engineShudder_val += random(-0.1,0.1)
    chase_vehicle.engineShudder_val = constrain(chase_vehicle.engineShudder_val,0.1,1.25);
    DriveCarMotor(chase_vehicle);
}


function ChangeLanes(car_obj)
{
	/*
	This function should do the following: 
	 - move car_obj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePosA and LanePosB to effect the change.
	 - finally you should return car_obj at the end of the function.
	 hint: You will need to modify the pos_x property of car_obj.
	*/
    if(car_obj.pos_x == LanePosA){
        car_obj.pos_x = LanePosB
    }else if(car_obj.pos_x == LanePosB){
        car_obj.pos_x = LanePosA
    }
    return car_obj;
}


function CheckVehicleInfront( targetVehicle )
{
	/*
	This function should do the following: 
	 - determine if targetVehicle is in the same lane and less than 200px behind any of the cars in vehicleObjectsArray.
	 - do this by traversing vehicleObjectsArray and comparing each car's miles_amnt property to that of targetVehicle.
	 - use the number_plate property of each car to ignore cars that match targetVehicle.
	 - if you find a car that matches these requirements then return the number_plate property for the car. Otherwise return false.
	*/
    for(let i=0; i <vehicleObjectsArray.length; i++){
        if(vehicleObjectsArray[i].pos_x == targetVehicle.pos_x){
            var d= vehicleObjectsArray[i].miles_amnt - targetVehicle.miles_amnt
            if(d >= 0 && d < 200){
                if(vehicleObjectsArray[i].number_plate != targetVehicle.number_plate){
                    return vehicleObjectsArray[i].number_plate
                }
            }
        }
    }
    return false
    
}


function CheckCarIsParallel( carA, carB )
{
	/*
	This function should do the following: 
	 - determine if carA is parallel with carB.
	 - if carA is found to be parallel to carB then return the number_plate property of carB.
	 - cars are considered parallel if the absolute difference between their miles_amnt properties is less than 25 px and they have non-matching pos_x properties	*/
    if(abs(carA.miles_amnt - carB.miles_amnt)<25 && (carA.pos_x != carB.pos_x)){
        return carB.number_plate
    }
}


function LocateSuspect()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to chase_vehicle to see if they match the number_plate property in the suspect description.
	 - it does this by traversing vehicleObjectsArray and calling CheckCarIsParallel for each car
.	 - if a positive result is returned then the number_plate property of the found car is then checked against the suspect description.
	 - if a match is found then the car in question is assigned to the global variable suspect.
	*/
    
    for(var i=0; i < vehicleObjectsArray.length; i++){
        if(CheckCarIsParallel(chase_vehicle,vehicleObjectsArray[i])){
            if(vehicleObjectsArray[i].number_plate == "6KGBWC"){
                suspect = vehicleObjectsArray[i]
            }
        }
    }
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var chase_vehicle;

var roadWidth;
var roadLeftEdge;
var LanePosA;
var LanePosB;
var carImages = {};
var suspect;

var vehicleObjectsArray = [
{ pos_x: 300, pos_y: 0, miles_amnt: -200, car_category: 'greenCar', number_plate: 'PQ7TOX', speed_value: 2, exhaust: [  ]} , { pos_x: 300, pos_y: 0, miles_amnt: 200, car_category: 'blueCar', number_plate: 'PT5R83', speed_value: 2, exhaust: [  ]} , { pos_x: 500, pos_y: 0, miles_amnt: 600, car_category: 'blueCar', number_plate: 'KN4KI0', speed_value: 2, exhaust: [  ]} , { pos_x: 500, pos_y: 0, miles_amnt: 1000, car_category: 'blueCar', number_plate: 'W99HPB', speed_value: 2, exhaust: [  ]} , { pos_x: 500, pos_y: 0, miles_amnt: 1400, car_category: 'whiteCar', number_plate: 'J5E07X', speed_value: 2, exhaust: [  ]} , { pos_x: 500, pos_y: 0, miles_amnt: 1800, car_category: 'redCar', number_plate: 'BUSKH4', speed_value: 2, exhaust: [  ]} , { pos_x: 300, pos_y: 0, miles_amnt: 2200, car_category: 'whiteCar', number_plate: 'Z3RRQJ', speed_value: 2, exhaust: [  ]} , { pos_x: 300, pos_y: 0, miles_amnt: 2600, car_category: 'redCar', number_plate: '9JMG0V', speed_value: 2, exhaust: [  ]} , { pos_x: 300, pos_y: 0, miles_amnt: 3000, car_category: 'whiteCar', number_plate: '6KGBWC', speed_value: 2, exhaust: [  ]} , { pos_x: 300, pos_y: 0, miles_amnt: 3400, car_category: 'blueCar', number_plate: 'APFPHK', speed_value: 2, exhaust: [  ]} , { pos_x: 500, pos_y: 0, miles_amnt: 3800, car_category: 'redCar', number_plate: 'J2ZFH0', speed_value: 2, exhaust: [  ]} , { pos_x: 500, pos_y: 0, miles_amnt: 4200, car_category: 'blueCar', number_plate: 'UED75J', speed_value: 2, exhaust: [  ]} , { pos_x: 300, pos_y: 0, miles_amnt: 4600, car_category: 'greenCar', number_plate: '3MFD77', speed_value: 2, exhaust: [  ]} , { pos_x: 500, pos_y: 0, miles_amnt: 5000, car_category: 'blueCar', number_plate: '4X63BO', speed_value: 2, exhaust: [  ]} , { pos_x: 300, pos_y: 0, miles_amnt: 5400, car_category: 'redCar', number_plate: 'QG4OPZ', speed_value: 2, exhaust: [  ]} , { pos_x: 500, pos_y: 0, miles_amnt: 5800, car_category: 'redCar', number_plate: 'LCQFHB', speed_value: 2, exhaust: [  ]} , { pos_x: 500, pos_y: 0, miles_amnt: 6200, car_category: 'whiteCar', number_plate: 'ZSLO95', speed_value: 2, exhaust: [  ]} , { pos_x: 300, pos_y: 0, miles_amnt: 6600, car_category: 'whiteCar', number_plate: 'OVNOYW', speed_value: 2, exhaust: [  ]} , { pos_x: 500, pos_y: 0, miles_amnt: 7000, car_category: 'redCar', number_plate: 'Q0BJBL', speed_value: 2, exhaust: [  ]} , { pos_x: 300, pos_y: 0, miles_amnt: 7400, car_category: 'greenCar', number_plate: 'NXH5X2', speed_value: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];


	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	LanePosA = 300;
	LanePosB = 500;

	chase_vehicle = 
	{
		pos_x: roadLeftEdge + roadWidth/4,
		pos_y: 550,
		miles_amnt: 0,
		speed_value: 3,
		engineShudder_val: 0,
		car_category: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(suspect)
	{
		fill(255);

		text("suspect found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	DriveVehicle();
	var b2b = CheckVehicleInfront( chase_vehicle );
	if(b2b)ChangeLanes(chase_vehicle);
	LocateSuspect();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehicleObjectsArray.length; i++)
	{
		vehicleObjectsArray[i].miles_amnt += vehicleObjectsArray[i].speed_value;
		vehicleObjectsArray[i].pos_y = chase_vehicle.pos_y - vehicleObjectsArray[i].miles_amnt + chase_vehicle.miles_amnt;
	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (chase_vehicle.miles_amnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (chase_vehicle.miles_amnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(chase_vehicle);
	image
	(
		carImages["detective"],
		chase_vehicle.pos_x - carImages["detective"].width/2 + random(-chase_vehicle.engineShudder_val, chase_vehicle.engineShudder_val),
		chase_vehicle.pos_y + random(-chase_vehicle.engineShudder_val, chase_vehicle.engineShudder_val)
	);

	//draw all other cars

	for(var i = 0; i < vehicleObjectsArray.length; i ++)
	{
		if(vehicleObjectsArray[i].pos_y < height && vehicleObjectsArray[i].pos_y > -height/2)
		{
			image(
			carImages[vehicleObjectsArray[i].car_category],
			vehicleObjectsArray[i].pos_x - carImages[vehicleObjectsArray[i].car_category].width/2,
			vehicleObjectsArray[i].pos_y
			);
			DriveCarMotor(vehicleObjectsArray[i]);

			drawExhaust(vehicleObjectsArray[i]);
		}
	}

}

function DriveCarMotor(car)
{

	car.exhaust.push({size: 2, x: car.pos_x, y: car.pos_y + carImages[car.car_category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speed_value/3);
		if(car.car_category != "detective")car.exhaust[i].y += (chase_vehicle.speed_value - car.speed_value);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
