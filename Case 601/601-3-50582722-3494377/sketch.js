/*
Officer: 3494377
CaseNum: 601-3-50582722-3494377

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing GreenYellow stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Brown fill ellipses at each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 86 pixels of any of the crimes within no more than 1 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- beginShape(), endShape(), vertex()

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var killer_log = {
	coordX: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	coordY: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	recordDate: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var attack_log = [ 
  { PositionX : 438, PositionY : 420, recordedDay : 11, VictimDetails : 'NELSON TINTLE'},
  { PositionX : 408, PositionY : 451, recordedDay : 11, VictimDetails : 'LIANNE COURTWOOD'},
  { PositionX : 408, PositionY : 377, recordedDay : 13, VictimDetails : 'BRAD SILVEIRA'},
  { PositionX : 642, PositionY : 289, recordedDay : 16, VictimDetails : 'JESSIA PORTOS'},
  { PositionX : 623, PositionY : 279, recordedDay : 16, VictimDetails : 'PIERRE DORCEY'},
  { PositionX : 95, PositionY : 488, recordedDay : 17, VictimDetails : 'DEEDEE PHINNEY'},
  { PositionX : 75, PositionY : 522, recordedDay : 18, VictimDetails : 'JULIANA ADVERSANE'},
  { PositionX : 269, PositionY : 597, recordedDay : 26, VictimDetails : 'MAJORIE JENI'},
  { PositionX : 389, PositionY : 554, recordedDay : 28, VictimDetails : 'RANDEE CROME'},
  { PositionX : 484, PositionY : 549, recordedDay : 2, VictimDetails : 'MALINDA GOODBURY'},
  { PositionX : 496, PositionY : 484, recordedDay : 9, VictimDetails : 'TAMICA MAUBERT'},
  { PositionX : 546, PositionY : 463, recordedDay : 14, VictimDetails : 'LESLEY MONKSFORD'},
  { PositionX : 538, PositionY : 359, recordedDay : 12, VictimDetails : 'LAKESHA SYMMES'},
  { PositionX : 702, PositionY : 412, recordedDay : 17, VictimDetails : 'BRIDGET BROADVIEW'},
  { PositionX : 817, PositionY : 474, recordedDay : 18, VictimDetails : 'DARBY MYRLE'} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();
	image(countyMap, 0,0);

	//add your code below here

    stroke(173,255,47)
    noFill()
    beginShape()
    for(var i=0; i<16; i++){
    vertex(killer_log.coordX[i],killer_log.coordY[i])
    }
    endShape()

    noStroke()
    fill(165,42,42)
    for(var j=0; j<15; j++){
        ellipse(attack_log[j].PositionX, attack_log[j].PositionY,5)
    }
        
        for(var i=0; i<16; i++){
            for(var j=0; j<15; j++){
                if((dist(killer_log.coordX[i],killer_log.coordY[i],attack_log[j].PositionX, attack_log[j].PositionY) < 86)  &&  (abs(killer_log.recordDate[i]-attack_log[j].recordedDay) < 2) ){
                    possibleMatches.push({ suspect_x: killer_log.coordX[i], suspect_y: killer_log.coordY[i] ,crime_x: attack_log[j].PositionX, crime_y: attack_log[j].PositionY, victimName: attack_log[j].VictimDetails })
                }    
            }
        }
    console.log(possibleMatches)
        

	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
