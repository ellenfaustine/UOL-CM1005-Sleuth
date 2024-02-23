/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 3494377
CaseNum: 802-0-46894632-3494377

Don your best threads we're off to the Monte Carlo Casino ! We're tailing a gang of high rolling statisticians who run Rossling Polling, a company used by the shady politicians of Console City to make them seem more popular than they really are.

They’re prepared to give up the dirt on their techniques if we can beat them in a game of 5 card stud poker. We can’t go in and gamble away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence room to compete with these card sharks. Let’s stack the odds in our favour. First let’s learn how to mark cards.

- Write a function called  pickCards.
- Inside the function, use a for loop to set the marked property of the deck array elements to true when the suit is Diamonds or the value is A
- Call the function from within setup

*/

var deck = [ { marked: false, cardSuit: 'Spades', v: 'A'} , { marked: false, cardSuit: 'Spades', v: '2'} , { marked: false, cardSuit: 'Spades', v: '3'} , { marked: false, cardSuit: 'Spades', v: '4'} , { marked: false, cardSuit: 'Spades', v: '5'} , { marked: false, cardSuit: 'Spades', v: '6'} , { marked: false, cardSuit: 'Spades', v: '7'} , { marked: false, cardSuit: 'Spades', v: '8'} , { marked: false, cardSuit: 'Spades', v: '9'} , { marked: false, cardSuit: 'Spades', v: '10'} , { marked: false, cardSuit: 'Spades', v: 'J'} , { marked: false, cardSuit: 'Spades', v: 'Q'} , { marked: false, cardSuit: 'Spades', v: 'K'} , { marked: false, cardSuit: 'Clubs', v: 'A'} , { marked: false, cardSuit: 'Clubs', v: '2'} , { marked: false, cardSuit: 'Clubs', v: '3'} , { marked: false, cardSuit: 'Clubs', v: '4'} , { marked: false, cardSuit: 'Clubs', v: '5'} , { marked: false, cardSuit: 'Clubs', v: '6'} , { marked: false, cardSuit: 'Clubs', v: '7'} , { marked: false, cardSuit: 'Clubs', v: '8'} , { marked: false, cardSuit: 'Clubs', v: '9'} , { marked: false, cardSuit: 'Clubs', v: '10'} , { marked: false, cardSuit: 'Clubs', v: 'J'} , { marked: false, cardSuit: 'Clubs', v: 'Q'} , { marked: false, cardSuit: 'Clubs', v: 'K'} , { marked: false, cardSuit: 'Hearts', v: 'A'} , { marked: false, cardSuit: 'Hearts', v: '2'} , { marked: false, cardSuit: 'Hearts', v: '3'} , { marked: false, cardSuit: 'Hearts', v: '4'} , { marked: false, cardSuit: 'Hearts', v: '5'} , { marked: false, cardSuit: 'Hearts', v: '6'} , { marked: false, cardSuit: 'Hearts', v: '7'} , { marked: false, cardSuit: 'Hearts', v: '8'} , { marked: false, cardSuit: 'Hearts', v: '9'} , { marked: false, cardSuit: 'Hearts', v: '10'} , { marked: false, cardSuit: 'Hearts', v: 'J'} , { marked: false, cardSuit: 'Hearts', v: 'Q'} , { marked: false, cardSuit: 'Hearts', v: 'K'} , { marked: false, cardSuit: 'Diamonds', v: 'A'} , { marked: false, cardSuit: 'Diamonds', v: '2'} , { marked: false, cardSuit: 'Diamonds', v: '3'} , { marked: false, cardSuit: 'Diamonds', v: '4'} , { marked: false, cardSuit: 'Diamonds', v: '5'} , { marked: false, cardSuit: 'Diamonds', v: '6'} , { marked: false, cardSuit: 'Diamonds', v: '7'} , { marked: false, cardSuit: 'Diamonds', v: '8'} , { marked: false, cardSuit: 'Diamonds', v: '9'} , { marked: false, cardSuit: 'Diamonds', v: '10'} , { marked: false, cardSuit: 'Diamonds', v: 'J'} , { marked: false, cardSuit: 'Diamonds', v: 'Q'} , { marked: false, cardSuit: 'Diamonds', v: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your pickCards function here
    pickCards()
}

//write your pickCards function here
function pickCards(){
    for(var i=0; i<deck.length; i++){
        if(deck[i].cardSuit == 'Diamonds' || deck[i].v == 'A'){
            deck[i].marked = true;
        }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (deck[i].marked)
		{
			drawCard(deck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(deck[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.v == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
