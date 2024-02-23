/*

Officer: 3494377
CaseNum: 401-3-88405419-3494377

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When amanita_mushrooms goes above 0.68, arsenic goes above 0.26, formaldehyde goes above 0.44, and also nerve_gas goes above 0.57, decrease ethanol by 0.03
	- When botulinium goes above 0.66 and novichok goes above 0.59, whilst at the same time, sarin goes above 0.71 or cyanide goes above 0.41, raise ethanol by 0.05
	- If either sarin goes above 0.74, formaldehyde dips below 0.45, or perhaps arsenic goes above 0.49, reduce charcoal by 0.04
	- When novichok dips below 0.49 or amanita_mushrooms dips below 0.48, or on the other hand, nerve_gas dips below 0.37 and botulinium goes above 0.6, try increasing charcoal by 0.01
	- If cyanide goes above 0.6, formaldehyde goes above 0.51, sarin goes above 0.31, and also botulinium dips below 0.7, decrease aspirin by 0.02
	- When arsenic dips below 0.58, amanita_mushrooms goes above 0.59, and also novichok dips below 0.46, increase aspirin by 0.04
	- When amanita_mushrooms dips below 0.38 or arsenic goes above 0.74, whilst at the same time, nerve_gas dips below 0.29 or novichok goes above 0.62, reduce antibodies by 0.04
	- If botulinium goes above 0.59 or sarin dips below 0.72, or on the other hand, cyanide dips below 0.74 and formaldehyde dips below 0.71, try increasing antibodies by 0.01
	- If either formaldehyde dips below 0.59, amanita_mushrooms goes above 0.58, or perhaps arsenic goes above 0.3, decrease chalk by 0.03
	- If cyanide goes above 0.58 or sarin goes above 0.56, or on the other hand, nerve_gas goes above 0.65 and botulinium dips below 0.26, increment chalk by 0.03


Your conditional statements should:

consider the following poisons:

	- cyanide
	- botulinium
	- sarin
	- nerve_gas
	- arsenic
	- formaldehyde
	- novichok
	- amanita_mushrooms


and modify the following antidotes:

	- ethanol
	- charcoal
	- aspirin
	- antibodies
	- chalk


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var cyanide;
var botulinium;
var sarin;
var nerve_gas;
var arsenic;
var formaldehyde;
var novichok;
var amanita_mushrooms;


//Declare the antidote variables
var ethanol;
var charcoal;
var aspirin;
var antibodies;
var chalk;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	cyanide = 0.5;
	botulinium = 0.5;
	sarin = 0.5;
	nerve_gas = 0.5;
	arsenic = 0.5;
	formaldehyde = 0.5;
	novichok = 0.5;
	amanita_mushrooms = 0.5;
	ethanol = 0.5;
	charcoal = 0.5;
	aspirin = 0.5;
	antibodies = 0.5;
	chalk = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
    
//- When amanita_mushrooms goes above 0.68, arsenic goes above 0.26, formaldehyde goes above 0.44, and also nerve_gas goes above 0.57, decrease ethanol by 0.03
//	- When botulinium goes above 0.66 and novichok goes above 0.59, whilst at the same time, sarin goes above 0.71 or cyanide goes above 0.41, raise ethanol by 0.05
//	- If either sarin goes above 0.74, formaldehyde dips below 0.45, or perhaps arsenic goes above 0.49, reduce charcoal by 0.04
//	- When novichok dips below 0.49 or amanita_mushrooms dips below 0.48, or on the other hand, nerve_gas dips below 0.37 and botulinium goes above 0.6, try increasing charcoal by 0.01
//	- If cyanide goes above 0.6, formaldehyde goes above 0.51, sarin goes above 0.31, and also botulinium dips below 0.7, decrease aspirin by 0.02
//	- When arsenic dips below 0.58, amanita_mushrooms goes above 0.59, and also novichok dips below 0.46, increase aspirin by 0.04
//	- When amanita_mushrooms dips below 0.38 or arsenic goes above 0.74, whilst at the same time, nerve_gas dips below 0.29 or novichok goes above 0.62, reduce antibodies by 0.04
    
//	- If botulinium goes above 0.59 or sarin dips below 0.72, or on the other hand, cyanide dips below 0.74 and formaldehyde dips below 0.71, try increasing antibodies by 0.01
    
//	- If either formaldehyde dips below 0.59, amanita_mushrooms goes above 0.58, or perhaps arsenic goes above 0.3, decrease chalk by 0.03
    
//	- If cyanide goes above 0.58 or sarin goes above 0.56, or on the other hand, nerve_gas goes above 0.65 and botulinium dips below 0.26, increment chalk by 0.03
    if(amanita_mushrooms>0.68 && arsenic> 0.26 && formaldehyde>0.44 && nerve_gas>0.57)
       {
        ethanol -= 0.03
       }
    if((botulinium>0.66 && novichok> 0.59 ) && (sarin>0.71 || cyanide>0.41))
       {
        ethanol += 0.05
       }
    if(sarin>0.74 || formaldehyde< 0.45 || arsenic>0.49)
       {
        charcoal -= 0.04
       }
    if((novichok<0.49 || amanita_mushrooms< 0.48 ) || (nerve_gas<0.37 && botulinium>0.6))
       {
        charcoal += 0.01
       }
    if(cyanide>0.6 && formaldehyde> 0.51 && sarin>0.31 && botulinium<0.7)
       {
       aspirin -= 0.02
       }
    if(arsenic<0.58 && amanita_mushrooms> 0.59 && novichok<0.46)
       {
        aspirin += 0.04
       }
    if((amanita_mushrooms<0.38 || arsenic> 0.74) && ( nerve_gas <0.29 || novichok >0.62))
       {
        antibodies -= 0.04
       }
    if((botulinium>0.59 || sarin<0.72) || (cyanide<0.74 && formaldehyde<0.71))
       {
        antibodies += 0.01
       }
    if(formaldehyde<0.59 || amanita_mushrooms> 0.58 || arsenic>0.3)
       {
        chalk -= 0.03
       }
    if((cyanide>0.58 || sarin> 0.56) || (nerve_gas>0.65 && botulinium<0.26))
       {
        chalk += 0.03
       }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	cyanide = nextValue(graphs[0],cyanide);
	botulinium = nextValue(graphs[1],botulinium);
	sarin = nextValue(graphs[2],sarin);
	nerve_gas = nextValue(graphs[3],nerve_gas);
	arsenic = nextValue(graphs[4],arsenic);
	formaldehyde = nextValue(graphs[5],formaldehyde);
	novichok = nextValue(graphs[6],novichok);
	amanita_mushrooms = nextValue(graphs[7],amanita_mushrooms);


	ethanol = constrain(ethanol, 0, 1);
	charcoal = constrain(charcoal, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	chalk = constrain(chalk, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
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
	text('botulinium: ' + nf(botulinium,1,2), 20,40);
	fill(colors[2]);
	text('sarin: ' + nf(sarin,1,2), 20,60);
	fill(colors[3]);
	text('nerve_gas: ' + nf(nerve_gas,1,2), 20,80);
	fill(colors[4]);
	text('arsenic: ' + nf(arsenic,1,2), 20,100);
	fill(colors[5]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,120);
	fill(colors[6]);
	text('novichok: ' + nf(novichok,1,2), 20,140);
	fill(colors[7]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(ethanol,50,'ethanol');
	drawBar(charcoal,200,'charcoal');
	drawBar(aspirin,350,'aspirin');
	drawBar(antibodies,500,'antibodies');
	drawBar(chalk,650,'chalk');


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
