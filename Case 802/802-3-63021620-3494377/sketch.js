/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 3494377
CaseNum: 802-3-63021620-3494377

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.

- First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 0 and 96.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

Now, the card you are looking for is stored in the cut_here object. You need to cut the deck at this exact location and the card sharks will be forced to give up their secrets.

- Write a function called deck_cut and call it from setup.
- This should search for card matching cut_here inside cards.
- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the cards array in the deck_upto_cut array. 
- You'll need to break the loop once you've done as you don't want to keep searching.
- Finally reverse the elements in deck_upto_cut so that the card we cut the deck at is the last element and not the first. 
	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 


*/

var cards = [ { cardSuit: 'Spades', v: 'A'} , { cardSuit: 'Spades', v: '2'} , { cardSuit: 'Spades', v: '3'} , { cardSuit: 'Spades', v: '4'} , { cardSuit: 'Spades', v: '5'} , { cardSuit: 'Spades', v: '6'} , { cardSuit: 'Spades', v: '7'} , { cardSuit: 'Spades', v: '8'} , { cardSuit: 'Spades', v: '9'} , { cardSuit: 'Spades', v: '10'} , { cardSuit: 'Spades', v: 'J'} , { cardSuit: 'Spades', v: 'Q'} , { cardSuit: 'Spades', v: 'K'} , { cardSuit: 'Clubs', v: 'A'} , { cardSuit: 'Clubs', v: '2'} , { cardSuit: 'Clubs', v: '3'} , { cardSuit: 'Clubs', v: '4'} , { cardSuit: 'Clubs', v: '5'} , { cardSuit: 'Clubs', v: '6'} , { cardSuit: 'Clubs', v: '7'} , { cardSuit: 'Clubs', v: '8'} , { cardSuit: 'Clubs', v: '9'} , { cardSuit: 'Clubs', v: '10'} , { cardSuit: 'Clubs', v: 'J'} , { cardSuit: 'Clubs', v: 'Q'} , { cardSuit: 'Clubs', v: 'K'} , { cardSuit: 'Hearts', v: 'A'} , { cardSuit: 'Hearts', v: '2'} , { cardSuit: 'Hearts', v: '3'} , { cardSuit: 'Hearts', v: '4'} , { cardSuit: 'Hearts', v: '5'} , { cardSuit: 'Hearts', v: '6'} , { cardSuit: 'Hearts', v: '7'} , { cardSuit: 'Hearts', v: '8'} , { cardSuit: 'Hearts', v: '9'} , { cardSuit: 'Hearts', v: '10'} , { cardSuit: 'Hearts', v: 'J'} , { cardSuit: 'Hearts', v: 'Q'} , { cardSuit: 'Hearts', v: 'K'} , { cardSuit: 'Diamonds', v: 'A'} , { cardSuit: 'Diamonds', v: '2'} , { cardSuit: 'Diamonds', v: '3'} , { cardSuit: 'Diamonds', v: '4'} , { cardSuit: 'Diamonds', v: '5'} , { cardSuit: 'Diamonds', v: '6'} , { cardSuit: 'Diamonds', v: '7'} , { cardSuit: 'Diamonds', v: '8'} , { cardSuit: 'Diamonds', v: '9'} , { cardSuit: 'Diamonds', v: '10'} , { cardSuit: 'Diamonds', v: 'J'} , { cardSuit: 'Diamonds', v: 'Q'} , { cardSuit: 'Diamonds', v: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var cut_here = { type: 'Hearts', number: '3'} ;
var deck_upto_cut = [];

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
	//call your deck_cut function here
    deck_cut(); 
    console.log(cards.length)
}

//write your deck_cut function here
function deck_cut(){
    var a =[];
    for(var i=0; i<cards.length;i++){
        if((cut_here.type == cards[i].cardSuit) && (cut_here.number == cards[i].v)){
           a = (cards.splice(i, (cards.length - i)));
            break;
        }
    }
    for(var k=a.length; k>0; k--){
        deck_upto_cut.push(a[k-1]);
        console.log(deck_upto_cut);
    }
}
//write your shuffleSeed() function here.
function shuffleSeed(){
    let b = [];
    
    for(var i=0; i<52; i++){
        b.push(round(random(0,96)));
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
	   for (var j = 0; j < cards.length; j++)
	   {
		  var tempCard = cards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          cards.splice(newLoc, 0, tempCard[0]);
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
		if(i < deck_upto_cut.length)
		{
			drawCard(deck_upto_cut[i], 880 + i * 18, 750);
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
