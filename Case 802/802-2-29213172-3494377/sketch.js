/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 3494377
CaseNum: 802-2-29213172-3494377

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in winningHand from the deck and store it in the hand array.

- Write a function called winning_hand_set and call it from setup.
- The function should take each card in winningHand and seacrh for a match in card_deck.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function. 
- This needs to return an array of 52 random integers between 2 and 99.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var card_deck = [ { cardSuit: 'Spades', number: 'A'} , { cardSuit: 'Spades', number: '2'} , { cardSuit: 'Spades', number: '3'} , { cardSuit: 'Spades', number: '4'} , { cardSuit: 'Spades', number: '5'} , { cardSuit: 'Spades', number: '6'} , { cardSuit: 'Spades', number: '7'} , { cardSuit: 'Spades', number: '8'} , { cardSuit: 'Spades', number: '9'} , { cardSuit: 'Spades', number: '10'} , { cardSuit: 'Spades', number: 'J'} , { cardSuit: 'Spades', number: 'Q'} , { cardSuit: 'Spades', number: 'K'} , { cardSuit: 'Clubs', number: 'A'} , { cardSuit: 'Clubs', number: '2'} , { cardSuit: 'Clubs', number: '3'} , { cardSuit: 'Clubs', number: '4'} , { cardSuit: 'Clubs', number: '5'} , { cardSuit: 'Clubs', number: '6'} , { cardSuit: 'Clubs', number: '7'} , { cardSuit: 'Clubs', number: '8'} , { cardSuit: 'Clubs', number: '9'} , { cardSuit: 'Clubs', number: '10'} , { cardSuit: 'Clubs', number: 'J'} , { cardSuit: 'Clubs', number: 'Q'} , { cardSuit: 'Clubs', number: 'K'} , { cardSuit: 'Hearts', number: 'A'} , { cardSuit: 'Hearts', number: '2'} , { cardSuit: 'Hearts', number: '3'} , { cardSuit: 'Hearts', number: '4'} , { cardSuit: 'Hearts', number: '5'} , { cardSuit: 'Hearts', number: '6'} , { cardSuit: 'Hearts', number: '7'} , { cardSuit: 'Hearts', number: '8'} , { cardSuit: 'Hearts', number: '9'} , { cardSuit: 'Hearts', number: '10'} , { cardSuit: 'Hearts', number: 'J'} , { cardSuit: 'Hearts', number: 'Q'} , { cardSuit: 'Hearts', number: 'K'} , { cardSuit: 'Diamonds', number: 'A'} , { cardSuit: 'Diamonds', number: '2'} , { cardSuit: 'Diamonds', number: '3'} , { cardSuit: 'Diamonds', number: '4'} , { cardSuit: 'Diamonds', number: '5'} , { cardSuit: 'Diamonds', number: '6'} , { cardSuit: 'Diamonds', number: '7'} , { cardSuit: 'Diamonds', number: '8'} , { cardSuit: 'Diamonds', number: '9'} , { cardSuit: 'Diamonds', number: '10'} , { cardSuit: 'Diamonds', number: 'J'} , { cardSuit: 'Diamonds', number: 'Q'} , { cardSuit: 'Diamonds', number: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var winningHand = [ { cardSuit: 'Clubs', value: '10'} , { cardSuit: 'Spades', value: '10'} , { cardSuit: 'Clubs', value: 'J'} , { cardSuit: 'Spades', value: 'Q'} , { cardSuit: 'Spades', value: 'J'}  ];
var hand =[];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
    shuffleSeed();
    shuffleDeck(shuffleSeed);
	//call your winning_hand_set function here
    winning_hand_set();
}

//write your winning_hand_set function here
function winning_hand_set(){
    for(var i=0; i<card_deck.length; i++){
        for(var j=0; j<winningHand.length; j++){
            if((winningHand[j].cardSuit == card_deck[i].cardSuit) && (winningHand[j].value == card_deck[i].number)){
                hand.push(card_deck[i]);
                console.log(hand);
                break;
            }
        }
    }
}
//write your shuffleSeed() function here.
function shuffleSeed(){
    let b = [];
    
    for(var i=0; i<52; i++){
        b.push(round(random(2,99)));
    }
    
    return b;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < card_deck.length; j++)
	   {
		  var tempCard = card_deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          card_deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
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
			if (card.number == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
