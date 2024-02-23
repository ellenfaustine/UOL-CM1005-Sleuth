/*
Officer: 3494377
CaseNum: 601-2-98032292-3494377

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing Orchid stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DarkViolet stroke triangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 66 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- beginShape(), endShape(), vertex()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Casey_Logbook_Coord_X = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var Casey_Logbook_Coord_Y = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var Crime_Recorded_location_x = [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456];
var Crime_Recorded_location_y = [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770];
var Crime_Recorded_fatality_details = ['JESSIA PORTOS', 'JESUS FORSLIN', 'LOUISE ZETLAND', 'LIANNE COURTWOOD', 'JULIANA ADVERSANE', 'SUMMER CASIMERE', 'LAVERNE JACQUELIN', 'NICOLE ASHELY', 'BRIDGET BROADVIEW', 'JACQUELINE DURANTS', 'TU DAVISWOOD', 'LAKESHA SYMMES', 'JAUNITA JOYER', 'DRUSILLA WARMAN'];


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
    stroke(218,112,214);
    noFill();
    beginShape();
    for(var i=0; i<21; i++){
        vertex(Casey_Logbook_Coord_X[i],Casey_Logbook_Coord_Y[i]);
    }
    endShape();
    
    stroke(148,0,211);
    noFill();
    for(var j=0; j<14; j++){
        triangle(Crime_Recorded_location_x[j]-5,Crime_Recorded_location_y[j]+5,Crime_Recorded_location_x[j],Crime_Recorded_location_y[j]-5,Crime_Recorded_location_x[j]+5, Crime_Recorded_location_y[j]+5);
    }
    
    for(var i=0; i<21; i++){
        for(var j=0; j<14; j++){
            if(dist(Casey_Logbook_Coord_X[i],Casey_Logbook_Coord_Y[i],Crime_Recorded_location_x[j],Crime_Recorded_location_y[j])<66){
                    possibleMatches.push({ suspect_x: Casey_Logbook_Coord_X[i], suspect_y: Casey_Logbook_Coord_Y[i] ,crime_x: Crime_Recorded_location_x[j], crime_y: Crime_Recorded_location_y[j], victimName: Crime_Recorded_fatality_details[j]})
            }
        }
    }
    console.log(possibleMatches);
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
