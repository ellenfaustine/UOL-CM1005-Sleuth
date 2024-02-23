/*

Officer: 3494377
CaseNum: 401-2-35926291-3494377

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If hemlock goes above 0.73 and insecticide goes above 0.35, try decreasing ethanol by 0.01
	- When formaldehyde goes above 0.67 and arsenic goes above 0.41, increase ethanol by 0.01
	- When chlorine dips below 0.47 or insecticide goes above 0.5, decrease chalk by 0.02
	- When formaldehyde goes above 0.26, hemlock goes above 0.32, and also warfarin goes above 0.29, increment chalk by 0.03
	- When formaldehyde dips below 0.39 or hemlock goes above 0.58, decrease protamine by 0.04
	- When either insecticide goes above 0.73, chlorine dips below 0.38, or perhaps warfarin goes above 0.58, increment protamine by 0.04
	- When insecticide goes above 0.34 and warfarin goes above 0.67, reduce betaBlocker by 0.03
	- If chlorine goes above 0.27 or formaldehyde dips below 0.37, try increasing betaBlocker by 0.04


Your conditional statements should:

consider the following poisons:

	- warfarin
	- arsenic
	- insecticide
	- hemlock
	- formaldehyde
	- chlorine


and modify the following antidotes:

	- ethanol
	- chalk
	- protamine
	- betaBlocker


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var warfarin;
var arsenic;
var insecticide;
var hemlock;
var formaldehyde;
var chlorine;


//Declare the antidote variables
var ethanol;
var chalk;
var protamine;
var betaBlocker;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	warfarin = 0.5;
	arsenic = 0.5;
	insecticide = 0.5;
	hemlock = 0.5;
	formaldehyde = 0.5;
	chlorine = 0.5;
	ethanol = 0.5;
	chalk = 0.5;
	protamine = 0.5;
	betaBlocker = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

    if(hemlock>0.73 && insecticide>0.35)
    {
       ethanol -= 0.01
       }
    if(formaldehyde>0.67 && arsenic>0.41)
    {
       ethanol += 0.01
       }
     if(chlorine<0.47 || insecticide>0.5)
    {
       chalk -= 0.02
       }
     if(formaldehyde>0.26 && hemlock>0.32 && warfarin>0.29)
    {
        chalk += 0.03
       }
     if(formaldehyde<0.39 || hemlock>0.58)
    {
       protamine -= 0.04
       }
     if(insecticide>0.73 || chlorine<0.38 || warfarin>0.58)
    {
       protamine += 0.04
       }
     if(insecticide>0.34 && warfarin>0.67)
    {
        betaBlocker-= 0.03
       }
    if(chlorine>0.27 || formaldehyde<0.37)
    {
        betaBlocker+= 0.04
       }
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	warfarin = nextValue(graphs[0],warfarin);
	arsenic = nextValue(graphs[1],arsenic);
	insecticide = nextValue(graphs[2],insecticide);
	hemlock = nextValue(graphs[3],hemlock);
	formaldehyde = nextValue(graphs[4],formaldehyde);
	chlorine = nextValue(graphs[5],chlorine);


	ethanol = constrain(ethanol, 0, 1);
	chalk = constrain(chalk, 0, 1);
	protamine = constrain(protamine, 0, 1);
	betaBlocker = constrain(betaBlocker, 0, 1);


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
	text('warfarin: ' + nf(warfarin,1,2), 20,20);
	fill(colors[1]);
	text('arsenic: ' + nf(arsenic,1,2), 20,40);
	fill(colors[2]);
	text('insecticide: ' + nf(insecticide,1,2), 20,60);
	fill(colors[3]);
	text('hemlock: ' + nf(hemlock,1,2), 20,80);
	fill(colors[4]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,100);
	fill(colors[5]);
	text('chlorine: ' + nf(chlorine,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(ethanol,50,'ethanol');
	drawBar(chalk,200,'chalk');
	drawBar(protamine,350,'protamine');
	drawBar(betaBlocker,500,'betaBlocker');


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
