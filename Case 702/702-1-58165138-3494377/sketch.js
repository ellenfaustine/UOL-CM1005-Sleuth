/*

Officer: 3494377
CaseNum: 702-1-58165138-3494377

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detective_car and the cars in
trafficObjectsArray to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveVehicle()
{
	/*
	This function should do the following: 
	 - increment detective_car's kms_driven property by its speed_amt property 
	 - add a random amount between -0.09 and 0.09 to detective_car's vibrate_val property
	 - use the constrain function to constrain detective_car's vibrate_val property to values between 0.01 and 0.76
	 - call the DriveEngine function passing detective_car as an argument
	*/
    detective_car.kms_driven += detective_car.speed_amt;
    detective_car.vibrate_val += random(-0.09,0.09);
    detective_car.vibrate_val = constrain(detective_car.vibrate_val, 0.01, 0.76);
    DriveEngine(detective_car);
}


function MoveLanes(vehicle)
{
	/*
	This function should do the following: 
	 - move vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lanePositionA and lanePositionB to effect the change.
	 - finally you should return vehicle at the end of the function.
	 hint: You will need to modify the x_position property of vehicle.
	*/
    if(vehicle.x_position == lanePositionA){
        vehicle.x_position = lanePositionB
    }else if(vehicle.x_position == lanePositionB){
        vehicle.x_position = lanePositionA
    }
    return vehicle
}


function SearchCarAhead( targetCarA, targetCarB )
{
	/*
	This function should do the following: 
	 - determine if targetCarA is in the same lane and less than 200px behind targetCarB.
	 - do this by comparing the two cars' kms_driven properties
	 - if these requirements are met then return targetCarB. Otherwise return false.
	*/
    if((targetCarA.x_position == targetCarB.x_position) && (targetCarB.kms_driven > targetCarA.kms_driven) && (abs(targetCarB.kms_driven - targetCarA.kms_driven)) < 200){
        return targetCarB;
    }else{
        return false;
    }
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detective_car;

var roadWidth;
var roadLeftEdge;
var lanePositionA;
var lanePositionB;
var carImages = {};

var trafficObjectsArray = [
{ x_position: 300, y_position: 0, kms_driven: -200, vehicle_model: 'blueCar', licence_plate: 'RLWGLD', speed_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_driven: 200, vehicle_model: 'whiteCar', licence_plate: 'JOS3XG', speed_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_driven: 600, vehicle_model: 'greenCar', licence_plate: 'YVCBZ2', speed_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_driven: 1000, vehicle_model: 'redCar', licence_plate: 'PZ6GB1', speed_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_driven: 1400, vehicle_model: 'blueCar', licence_plate: 'AIM5J7', speed_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_driven: 1800, vehicle_model: 'blueCar', licence_plate: 'LOXH1H', speed_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_driven: 2200, vehicle_model: 'redCar', licence_plate: 'KMIB3L', speed_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_driven: 2600, vehicle_model: 'blueCar', licence_plate: '4DEEBB', speed_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_driven: 3000, vehicle_model: 'greenCar', licence_plate: '8KWV7F', speed_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_driven: 3400, vehicle_model: 'greenCar', licence_plate: '2ZGICQ', speed_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_driven: 3800, vehicle_model: 'redCar', licence_plate: '0JS6L4', speed_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_driven: 4200, vehicle_model: 'blueCar', licence_plate: '0NJMEW', speed_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_driven: 4600, vehicle_model: 'blueCar', licence_plate: 'MK8KZX', speed_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_driven: 5000, vehicle_model: 'redCar', licence_plate: 'C9U6KA', speed_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_driven: 5400, vehicle_model: 'whiteCar', licence_plate: 'ES58G3', speed_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_driven: 5800, vehicle_model: 'whiteCar', licence_plate: 'UMOVJ0', speed_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_driven: 6200, vehicle_model: 'greenCar', licence_plate: 'JZTR20', speed_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_driven: 6600, vehicle_model: 'greenCar', licence_plate: '20RZ09', speed_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_driven: 7000, vehicle_model: 'blueCar', licence_plate: '59G7JM', speed_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_driven: 7400, vehicle_model: 'greenCar', licence_plate: 'TFT89Q', speed_amt: 2, exhaust: [  ]} 
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

	roadWidth = 400;
	roadLeftEdge = 200;
	lanePositionA = 300;
	lanePositionB = 500;

	detective_car = 
	{
		x_position: roadLeftEdge + roadWidth/4,
		y_position: 550,
		kms_driven: 0,
		speed_amt: 3,
		vibrate_val: 0,
		vehicle_model: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	DriveVehicle();
	for(var i = 0; i < trafficObjectsArray.length; i++)
	{
var b2b = SearchCarAhead(detective_car, trafficObjectsArray[i]);
		if(b2b)MoveLanes(detective_car);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < trafficObjectsArray.length; i++)
	{
		trafficObjectsArray[i].kms_driven += trafficObjectsArray[i].speed_amt;
		trafficObjectsArray[i].y_position = detective_car.y_position - trafficObjectsArray[i].kms_driven + detective_car.kms_driven;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (detective_car.kms_driven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (detective_car.kms_driven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(detective_car);
	image
	(
		carImages["detective"],
		detective_car.x_position - carImages["detective"].width/2 + random(-detective_car.vibrate_val, detective_car.vibrate_val),
		detective_car.y_position + random(-detective_car.vibrate_val, detective_car.vibrate_val)
	);

	//draw all other cars

	for(var i = 0; i < trafficObjectsArray.length; i ++)
	{
		if(trafficObjectsArray[i].y_position < height && trafficObjectsArray[i].y_position > -height/2)
		{
			image(
			carImages[trafficObjectsArray[i].vehicle_model],
			trafficObjectsArray[i].x_position - carImages[trafficObjectsArray[i].vehicle_model].width/2,
			trafficObjectsArray[i].y_position
			);
			DriveEngine(trafficObjectsArray[i]);

			drawExhaust(trafficObjectsArray[i]);
		}
	}

}

function DriveEngine(car)
{

	car.exhaust.push({size: 2, x: car.x_position, y: car.y_position + carImages[car.vehicle_model].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speed_amt/3);
		if(car.vehicle_model != "detective")car.exhaust[i].y += (detective_car.speed_amt - car.speed_amt);
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
