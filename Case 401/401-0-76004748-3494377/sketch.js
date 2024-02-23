/*

Officer: 3494377
CaseNum: 401-0-76004748-3494377

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When Spider_Venom dips below 0.49, decrement charcoal by 0.03
	- When chlorine dips below 0.36, increment charcoal by 0.04
	- When chlorine goes above 0.55, decrement ethanol by 0.02
	- When arsenic dips below 0.35, increase ethanol by 0.04
	- When Spider_Venom dips below 0.63, decrease paracetamol by 0.01
	- If chlorine dips below 0.38, try increasing paracetamol by 0.04


Your conditional statements should:

consider the following poisons:

	- chlorine
	- Spider_Venom
	- arsenic


and modify the following antidotes:

	- charcoal
	- ethanol
	- paracetamol


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var chlorine;
var Spider_Venom;
var arsenic;


//Declare the antidote variables
var charcoal;
var ethanol;
var paracetamol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	chlorine = 0.5;
	Spider_Venom = 0.5;
	arsenic = 0.5;
	charcoal = 0.5;
	ethanol = 0.5;
	paracetamol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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

        if(Spider_Venom<0.49)
            {
                charcoal -= 0.03
            }
    
        if(chlorine<0.36)
            {
                charcoal += 0.04
            }
        if(chlorine>0.55)
            {
                ethanol -= 0.02
            }
        if(arsenic <0.35)
            {
                ethanol += 0.04
            }
        if(Spider_Venom<0.63)
            {
                paracetamol -= 0.01
            }
        if(chlorine<0.38)
            {
                paracetamol += 0.04
            }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	chlorine = nextValue(graphs[0],chlorine);
	Spider_Venom = nextValue(graphs[1],Spider_Venom);
	arsenic = nextValue(graphs[2],arsenic);


	charcoal = constrain(charcoal, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);


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
	text('chlorine: ' + nf(chlorine,1,2), 20,20);
	fill(colors[1]);
	text('Spider_Venom: ' + nf(Spider_Venom,1,2), 20,40);
	fill(colors[2]);
	text('arsenic: ' + nf(arsenic,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(charcoal,50,'charcoal');
	drawBar(ethanol,200,'ethanol');
	drawBar(paracetamol,350,'paracetamol');


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
