/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
	{
	quote: 'Some are born great, some achieve greatness, and some have greatness thrust upon \'em',
	source: 'William Shakespeare',
	citation: 'Twelfth Night',
	year: 1601,
	hasCitation: true,
	hasYear: true
	},
	{
	quote: 'When you find your path, you must not be afraid. You need to have sufficient courage to make mistakes.',
	source: 'Paulo Coelho',
	citation: 'Brida',
	year: 1990,
	hasCitation: true,
	hasYear: true
	},
	{
	quote: 'Even if smog were a risk to human life, we must remember that life in nature, without technology, is wholesale death.',
	source: 'Ayn Rand',
	hasCitation: false,
	hasYear: false
	},	
	{
	quote: 'Great wealth can only be obtained through deception and corruption.',
	source: 'His Holiness, Tenzin Gyatso, the 14th Dalai Lama',
	year: 1974,
	hasCitation: false,
	hasYear: true
	},
	{
	quote: 'In politics, if you want anything said, ask a man; if you want anything done, ask a woman.',
	source: 'Margaret Thatcher',
	citation: 'Speech to members of the National Union of Townswomen\'s Guilds',
	hasCitation: true,
	hasYear: false
	},

];

console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote()
{
	// generates random number between 0 and quotes.length - 1
	var randomNumber = Math.floor(Math.random() * quotes.length); 
	// return the object in quotes at position randomNumber
	return quotes[randomNumber];
}

console.log(getRandomQuote());

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote()
{
	var objQuote = getRandomQuote();
	var htmlQuote = '';
	//concatenate html tags with object properties
	htmlQuote = htmlQuote + '<p class="quote">' + objQuote.quote + '</p>';
	htmlQuote = htmlQuote + '<p class="source">' + objQuote.source;
	//if statement - check for existence of citation
	if (objQuote.hasCitation)
	{
	htmlQuote = htmlQuote + '<span class="citation">' + objQuote.citation + '</span>';
	}
	//if statement - check for existence of year
	if (objQuote.hasYear)
	{
	htmlQuote = htmlQuote + '<span class="year">' + objQuote.year + '</span>';
	}
	//close source p tag
	htmlQuote = htmlQuote + '</p>';

document.getElementById("quote-box").innerHTML = htmlQuote;
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.