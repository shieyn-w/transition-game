//Shieyn 2018

function shDrawRect (ctx, x, y, width, height, colour)
{
	ctx.fillStyle = colour;
	ctx.fillRect(x, y, width, height);
}

function shDrawText (ctx, font, text, x, y, colour)
{	
	ctx.fillStyle = colour;
	ctx.font = font;
	ctx.fillText(text, x, y);
}

var Enemy =
{
	x: 0,
	y: 0,
	speed: 10,
	dir: 1,
	Make : function (y, speed, dir)
	{
		this.y = y;
		this.speed = speed;
		this.dir = dir;
	}
}

//use this function to change screens
function PushScreen (scr)
{
	if (scr == "game")
	{
		game_Init();
	}

	screen = scr;
	console.log ("Started screen " + scr);
}

function getRandomInt(max) 
{
	return Math.floor(Math.random() * Math.floor(max));
}
