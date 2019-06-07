/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//hasCitation hasYear hasTags are booleans to check to determine if the object has citation year or tags respectively
let quotes = [
	{
	quote: 'Some are born great, some achieve greatness, and some have greatness thrust upon \'em',
	source: 'William Shakespeare',
	citation: 'Twelfth Night',
	year: 1601,
	medium: 'Play',
	hasCitation: true,
	hasYear: true,
	hasTags: true,
	tags: 'Literature, English'
	},
	{
	quote: 'When you find your path, you must not be afraid. You need to have sufficient courage to make mistakes.',
	source: 'Paulo Coelho',
	citation: 'Brida',
	year: 1990,
	medium: 'Novel',
	hasCitation: true,
	hasYear: true,
	hasTags: true,
	tags: 'Poetry, Inspirational'
	},
	{
	quote: 'Even if smog were a risk to human life, we must remember that life in nature, without technology, is wholesale death.',
	source: 'Ayn Rand',
	medium: 'Speech',
	hasCitation: false,
	hasYear: false,
	hasTags: false
	},	
	{
	quote: 'Great wealth can only be obtained through deception and corruption.',
	source: 'His Holiness, Tenzin Gyatso, the 14th Dalai Lama',
	year: 1974,
	medium: 'Speech',
	hasCitation: false,
	hasYear: true,
	hasTags: false
	},
	{
	quote: 'In politics, if you want anything said, ask a man; if you want anything done, ask a woman.',
	source: 'Margaret Thatcher',
	citation: 'Speech to members of the National Union of Townswomen\'s Guilds',
	medium: 'Speech',
	hasCitation: true,
	hasYear: false,
	hasTags: true,
	tags: 'Politics, English'
	},

];

console.log(quotes);

function getRandomQuote()
{
	// generates random number between 0 and quotes.length - 1
	let randomNumber = Math.floor(Math.random() * quotes.length);
	// return the object in quotes at position randomNumber
	return quotes[randomNumber];
}

console.log(getRandomQuote());

function printQuote()
{
	let objQuote = getRandomQuote();
	let htmlQuote = '';
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

	//if statement - check for existence of tags
	if (objQuote.hasTags)
	{
	htmlQuote = htmlQuote + '<p class="tags">Tags: ' + objQuote.tags + '</p>';
	}
	
	htmlQuote = htmlQuote + '<p class="medium">From a ' + objQuote.medium + '</p>';

	document.getElementById("quote-box").innerHTML = htmlQuote;
	
	//color is represented as 6 digit hex, 000000 through ffffff
	//generate six random numbers between 0 and 16 and assign that color
	let colorCode = '#';
	
	let randomNumber = Math.floor(Math.random() * 16);
	colorCode = colorCode + randomNumber.toString(16);
	
	randomNumber = Math.floor(Math.random() * 16);
	colorCode = colorCode + randomNumber.toString(16);
	
	randomNumber = Math.floor(Math.random() * 16);
	colorCode = colorCode + randomNumber.toString(16);
	
	randomNumber = Math.floor(Math.random() * 16);
	colorCode = colorCode + randomNumber.toString(16);
	
	randomNumber = Math.floor(Math.random() * 16);
	colorCode = colorCode + randomNumber.toString(16);
	
	randomNumber = Math.floor(Math.random() * 16);
	colorCode = colorCode + randomNumber.toString(16);
	
	console.log(colorCode);
	
	//assign random color code to page's backgroundColor property
	document.body.style.backgroundColor = colorCode;
	
}

//randomize quote constantly every 20 seconds = 20000 milliseconds
setInterval( "printQuote()", 20000 );

//attach onclick listener to loadQuote element
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
