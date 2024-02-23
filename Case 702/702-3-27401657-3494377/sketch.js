/*

Officer: 3494377
CaseNum: 702-3-27401657-3494377

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a blue car with a numberPlate of DI73ZI.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthVehicleObject and the cars in
CarList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_vehicle()
{
	/*
	This function should do the following: 
	 - increment sleuthVehicleObject's milesDriven property by its accelAmt property 
	 - add a random amount between -0.03 and 0.03 to sleuthVehicleObject's shudderVal property
	 - use the constrain function to constrain sleuthVehicleObject's shudderVal property to values between 0.02 and 0.9
	 - call the drive_carEngine function passing sleuthVehicleObject as an argument
	*/
    sleuthVehicleObject.milesDriven += sleuthVehicleObject.accelAmt
    sleuthVehicleObject.shudderVal += random(-0.03,0.03)
    sleuthVehicleObject.shudderVal = constrain(sleuthVehicleObject.shudderVal,0.02, 0.9)
    drive_carEngine(sleuthVehicleObject);
}


function cross_lanes(vehicle)
{
	/*
	This function should do the following: 
	 - move vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_positionA and Lane_positionB to effect the change.
	 hint: You will need to modify the xCoordinate property of vehicle.
	*/
    if(vehicle.xCoordinate == Lane_positionA){
        vehicle.xCoordinate = Lane_positionB
    }else if(vehicle.xCoordinate == Lane_positionB){
        vehicle.xCoordinate = Lane_positionA
    }
}


function check_ahead( Car_objA, Car_objB )
{
	/*
	This function should do the following: 
	 - determine if Car_objA is in the same lane and less than 200px behind Car_objB.
	 - do this by comparing the two cars' milesDriven properties
	 - if these requirements are met then return Car_objB. Otherwise return false.
	*/
    if(Car_objA.xCoordinate == Car_objB.xCoordinate){
        var d= Car_objB.milesDriven - Car_objA.milesDriven
        if(d>=0 && d<200){
            return Car_objB
        }
    }
    return false
}


function checkVehicle_parallel( carObj )
{
	/*
	This function should do the following: 
	 - determine if carObj is parallel with sleuthVehicleObject.
	 - if carObj is found to be parallel to sleuthVehicleObject then return the numberPlate property of carObj.
	 - cars are considered parallel if the absolute difference between their milesDriven properties is less than 25 px and they have non-matching xCoordinate properties	*/
    if((abs(sleuthVehicleObject.milesDriven - carObj.milesDriven)<25) && sleuthVehicleObject.xCoordinate != carObj.xCoordinate){
        return carObj.numberPlate
    }
}


function check_criminal()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to sleuthVehicleObject to see if they match the numberPlate property in the criminal description.
	 - it does this by traversing CarList and calling checkVehicle_parallel for each car
.	 - if a positive result is returned then the numberPlate property of the found car is then checked against the criminal description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
    for(var i=0; i<CarList.length; i++){
        if(checkVehicle_parallel(CarList[i])){
            if(CarList[i].numberPlate == "DI73ZI"){
                return CarList[i]
            }
        }
    }
    return false

}


function chasing_criminal()
{
	/*
	This function should do the following: 
	 - only operate if the followingCriminal property of sleuthVehicleObject is true and the global variable criminal is assigned to an object.
	 - scale the accelAmt property of sleuthVehicleObject by a factor of 1.001.
	 - use the min function to make sure that sleuthVehicleObject's accelAmt property does not exceed 6.
	 - it should traverse CarList calling check_ahead for each car to detect any cars in front of sleuthVehicleObject.
	 - if a positive result is returned it should check to see if the numberPlate property of that car matches that of criminal.
	 - for a match, arrest_criminal should be called, otherwise call cross_lanes.
	*/
    if((sleuthVehicleObject.followingCriminal == true) && (criminal != null)){
        sleuthVehicleObject.accelAmt *= 1.001
        sleuthVehicleObject.accelAmt = min(sleuthVehicleObject.accelAmt, 6)
        for(var i=0; i<CarList.length; i++){
            var b = check_ahead(sleuthVehicleObject,CarList[i])
            if(b){
                if(b.numberPlate = "DI73ZI"){
                    arrest_criminal();
                }
            }
                cross_lanes();
        }

    }
}


function arrest_criminal()
{
	/*
	This function should do the following: 
	 - set the apprehended property of criminal to true.
	 - set the isArrestingCriminal property of sleuthVehicleObject to true.
	 - set the accelAmt properties of both vehicles to zero.
	*/
    criminal.apprehended = true;
    sleuthVehicleObject.isArrestingCriminal = true;
    sleuthVehicleObject.accelAmt = 0;
    criminal.accelAmt = 0;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthVehicleObject;

var roadWidth;
var roadLeftEdge;
var Lane_positionA;
var Lane_positionB;
var carImages = {};
var criminal;

var CarList = [
{ xCoordinate: 300, yCoordinate: 0, milesDriven: -200, vehicleModel: 'greenCar', numberPlate: 'MPOSWK', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, milesDriven: 200, vehicleModel: 'greenCar', numberPlate: 'ZRVYR7', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, milesDriven: 600, vehicleModel: 'redCar', numberPlate: 'UPR9ZI', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, milesDriven: 1000, vehicleModel: 'redCar', numberPlate: 'INVQ6U', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, milesDriven: 1400, vehicleModel: 'greenCar', numberPlate: 'P04DSW', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, milesDriven: 1800, vehicleModel: 'blueCar', numberPlate: 'DI73ZI', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, milesDriven: 2200, vehicleModel: 'blueCar', numberPlate: '6QOFFW', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, milesDriven: 2600, vehicleModel: 'greenCar', numberPlate: 'W6BDGG', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, milesDriven: 3000, vehicleModel: 'blueCar', numberPlate: 'QUTZ5R', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, milesDriven: 3400, vehicleModel: 'blueCar', numberPlate: 'M4UTMZ', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, milesDriven: 3800, vehicleModel: 'greenCar', numberPlate: 'U8Q9ZV', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, milesDriven: 4200, vehicleModel: 'blueCar', numberPlate: '84W42T', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, milesDriven: 4600, vehicleModel: 'redCar', numberPlate: 'BYPVBB', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, milesDriven: 5000, vehicleModel: 'whiteCar', numberPlate: 'BYWJ1Y', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, milesDriven: 5400, vehicleModel: 'greenCar', numberPlate: 'DL1QD7', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, milesDriven: 5800, vehicleModel: 'whiteCar', numberPlate: 'Y3QCFW', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, milesDriven: 6200, vehicleModel: 'whiteCar', numberPlate: 'WIBVJN', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, milesDriven: 6600, vehicleModel: 'whiteCar', numberPlate: 'G5CWZH', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 300, yCoordinate: 0, milesDriven: 7000, vehicleModel: 'redCar', numberPlate: 'HYYKYB', accelAmt: 2, exhaust: [  ]} , { xCoordinate: 500, yCoordinate: 0, milesDriven: 7400, vehicleModel: 'greenCar', numberPlate: 'YMI84C', accelAmt: 2, exhaust: [  ]} 
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
	Lane_positionA = 300;
	Lane_positionB = 500;

	sleuthVehicleObject = 
	{
		xCoordinate: roadLeftEdge + roadWidth/4,
		yCoordinate: 550,
		milesDriven: 0,
		accelAmt: 3,
		shudderVal: 0,
		vehicleModel: 'detective',
		numberPlate: '5L3UTH',
		isArrestingCriminal: false,
		followingCriminal: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(criminal)
	{
		if(criminal.apprehended)
		{
			fill(255);

			text("criminal apprehended!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!sleuthVehicleObject.followingCriminal&& !sleuthVehicleObject.isArrestingCriminal)
	{
		move_vehicle();
		for(var i = 0; i < CarList.length; i++)
		{
var b2b = check_ahead(sleuthVehicleObject, CarList[i]);
			if(b2b)cross_lanes(sleuthVehicleObject);
		}
		var a = check_criminal();
		if(a != false)criminal = a;
		if(criminal)sleuthVehicleObject.followingCriminal = true;
	}
	else if(!sleuthVehicleObject.isArrestingCriminal)
	{
		chasing_criminal();
		move_vehicle();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(criminal)
	{
		if(!criminal.apprehended)
		{
			criminal.accelAmt = 5;
			for(var i = 0; i < CarList.length; i++)
			{
				var b2b = check_ahead(criminal, CarList[i]);
				if(b2b)
				{
					if(b2b.numberPlate != criminal.numberPlate)
					{
						cross_lanes(criminal);
					}
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < CarList.length; i++)
	{
		CarList[i].milesDriven += CarList[i].accelAmt;
		CarList[i].yCoordinate = sleuthVehicleObject.yCoordinate - CarList[i].milesDriven + sleuthVehicleObject.milesDriven;

		if(criminal)
		{
			if(criminal.apprehended)
			{
				if(CarList[i].xCoordinate==sleuthVehicleObject.xCoordinate)
				{
					if(CarList[i].milesDriven<sleuthVehicleObject.milesDriven)
					{
						if(CarList[i].milesDriven-sleuthVehicleObject.milesDriven < 200)
						{
							cross_lanes(CarList[i]);
						}
					}
				}
			}
		}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthVehicleObject.milesDriven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthVehicleObject.milesDriven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(sleuthVehicleObject);
	image
	(
		carImages["detective"],
		sleuthVehicleObject.xCoordinate - carImages["detective"].width/2 + random(-sleuthVehicleObject.shudderVal, sleuthVehicleObject.shudderVal),
		sleuthVehicleObject.yCoordinate + random(-sleuthVehicleObject.shudderVal, sleuthVehicleObject.shudderVal)
	);

	//draw all other cars

	for(var i = 0; i < CarList.length; i ++)
	{
		if(CarList[i].yCoordinate < height && CarList[i].yCoordinate > -height/2)
		{
			image(
			carImages[CarList[i].vehicleModel],
			CarList[i].xCoordinate - carImages[CarList[i].vehicleModel].width/2,
			CarList[i].yCoordinate
			);
			drive_carEngine(CarList[i]);

			drawExhaust(CarList[i]);
		}
	}

}

function drive_carEngine(car)
{

	car.exhaust.push({size: 2, x: car.xCoordinate, y: car.yCoordinate + carImages[car.vehicleModel].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accelAmt/3);
		if(car.vehicleModel != "detective")car.exhaust[i].y += (sleuthVehicleObject.accelAmt - car.accelAmt);
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
