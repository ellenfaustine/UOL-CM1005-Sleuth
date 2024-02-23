/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 3494377
CaseNum: 802-1-88747378-3494377

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

- Write a function called buildShuffleArray.
- Declare an empty array in the function.
- Using a for loop, fill the array with 52 random integers between 7 and 61.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- At the end of the function, return the array 
- Call buildShuffleArray in setup.
- Call Shuffle deck using the return value from buildShuffleArray as the argument.

*/

var playingCards = [ { cardSuit: 'Spades', value: 'A'} , { cardSuit: 'Spades', value: '2'} , { cardSuit: 'Spades', value: '3'} , { cardSuit: 'Spades', value: '4'} , { cardSuit: 'Spades', value: '5'} , { cardSuit: 'Spades', value: '6'} , { cardSuit: 'Spades', value: '7'} , { cardSuit: 'Spades', value: '8'} , { cardSuit: 'Spades', value: '9'} , { cardSuit: 'Spades', value: '10'} , { cardSuit: 'Spades', value: 'J'} , { cardSuit: 'Spades', value: 'Q'} , { cardSuit: 'Spades', value: 'K'} , { cardSuit: 'Clubs', value: 'A'} , { cardSuit: 'Clubs', value: '2'} , { cardSuit: 'Clubs', value: '3'} , { cardSuit: 'Clubs', value: '4'} , { cardSuit: 'Clubs', value: '5'} , { cardSuit: 'Clubs', value: '6'} , { cardSuit: 'Clubs', value: '7'} , { cardSuit: 'Clubs', value: '8'} , { cardSuit: 'Clubs', value: '9'} , { cardSuit: 'Clubs', value: '10'} , { cardSuit: 'Clubs', value: 'J'} , { cardSuit: 'Clubs', value: 'Q'} , { cardSuit: 'Clubs', value: 'K'} , { cardSuit: 'Hearts', value: 'A'} , { cardSuit: 'Hearts', value: '2'} , { cardSuit: 'Hearts', value: '3'} , { cardSuit: 'Hearts', value: '4'} , { cardSuit: 'Hearts', value: '5'} , { cardSuit: 'Hearts', value: '6'} , { cardSuit: 'Hearts', value: '7'} , { cardSuit: 'Hearts', value: '8'} , { cardSuit: 'Hearts', value: '9'} , { cardSuit: 'Hearts', value: '10'} , { cardSuit: 'Hearts', value: 'J'} , { cardSuit: 'Hearts', value: 'Q'} , { cardSuit: 'Hearts', value: 'K'} , { cardSuit: 'Diamonds', value: 'A'} , { cardSuit: 'Diamonds', value: '2'} , { cardSuit: 'Diamonds', value: '3'} , { cardSuit: 'Diamonds', value: '4'} , { cardSuit: 'Diamonds', value: '5'} , { cardSuit: 'Diamonds', value: '6'} , { cardSuit: 'Diamonds', value: '7'} , { cardSuit: 'Diamonds', value: '8'} , { cardSuit: 'Diamonds', value: '9'} , { cardSuit: 'Diamonds', value: '10'} , { cardSuit: 'Diamonds', value: 'J'} , { cardSuit: 'Diamonds', value: 'Q'} , { cardSuit: 'Diamonds', value: 'K'}  ];
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


	//call your buildShuffleArray function here. Followed by a call to shuffleDeck with the return value of buildShuffleArray as an argument.
    buildShuffleArray();
    shuffleDeck(buildShuffleArray);

}

//write your buildShuffleArray function here
function buildShuffleArray(){
    let a = [];
    
    for(var i=0; i<52; i++){
        a.push(round(random(7,61)));
    }
    
    return a;
}


/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
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
		if (playingCards[i].marked)
		{
			drawCard(playingCards[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(playingCards[i], 400 + i * 18, 250);
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
			if (card.value == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
