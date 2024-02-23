/*

Officer: 3494377
CaseNum: 401-1-52062463-3494377

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If cyanide goes above 0.45 or alcohol goes above 0.74, reduce calcium_chloride by 0.02
	- If sarin dips below 0.69 or Spider_Venom goes above 0.7, increase calcium_chloride by 0.01
	- When Spider_Venom dips below 0.47 or alcohol goes above 0.56, try decreasing chalk by 0.01
	- If cyanide dips below 0.71 and sarin dips below 0.73, try increasing chalk by 0.04
	- If cyanide goes above 0.26, decrease glucagon by 0.01
	- When Spider_Venom goes above 0.34, raise glucagon by 0.01
	- If cyanide dips below 0.38, try decreasing antivenom by 0.04
	- If alcohol dips below 0.49 and Spider_Venom goes above 0.4, increase antivenom by 0.02


Your conditional statements should:

consider the following poisons:

	- cyanide
	- alcohol
	- Spider_Venom
	- sarin


and modify the following antidotes:

	- calcium_chloride
	- chalk
	- glucagon
	- antivenom


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var cyanide;
var alcohol;
var Spider_Venom;
var sarin;


//Declare the antidote variables
var calcium_chloride;
var chalk;
var glucagon;
var antivenom;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	cyanide = 0.5;
	alcohol = 0.5;
	Spider_Venom = 0.5;
	sarin = 0.5;
	calcium_chloride = 0.5;
	chalk = 0.5;
	glucagon = 0.5;
	antivenom = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
        if(cyanide>0.45 || alcohol>0.74)
           {
            calcium_chloride -= 0.02
           }
        if(sarin<0.69 || Spider_Venom>0.7)
           {
            calcium_chloride += 0.01
           }
        if(Spider_Venom<0.47 || alcohol>0.56)
           {
            chalk -= 0.01
           }
        if(cyanide<0.71 && sarin<0.73)
           {
            chalk += 0.04
           }
        if(cyanide>0.26)
           {
            glucagon -= 0.01
           }
        if(Spider_Venom>0.34)
           {
            glucagon += 0.01
           }
        if(cyanide<0.38)
           {
            antivenom -= 0.04
           }
        if(alcohol<0.49 && Spider_Venom > 0.4)
           {
            antivenom += 0.02
           }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	cyanide = nextValue(graphs[0],cyanide);
	alcohol = nextValue(graphs[1],alcohol);
	Spider_Venom = nextValue(graphs[2],Spider_Venom);
	sarin = nextValue(graphs[3],sarin);


	calcium_chloride = constrain(calcium_chloride, 0, 1);
	chalk = constrain(chalk, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	antivenom = constrain(antivenom, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('cyanide: ' + nf(cyanide,1,2), 20,20);
	fill(colors[1]);
	text('alcohol: ' + nf(alcohol,1,2), 20,40);
	fill(colors[2]);
	text('Spider_Venom: ' + nf(Spider_Venom,1,2), 20,60);
	fill(colors[3]);
	text('sarin: ' + nf(sarin,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(calcium_chloride,50,'calcium_chloride');
	drawBar(chalk,200,'chalk');
	drawBar(glucagon,350,'glucagon');
	drawBar(antivenom,500,'antivenom');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
