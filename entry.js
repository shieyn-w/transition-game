//Shieyn 2018

var screen;


var fieldResetted = false;

//questions
var questionID;
var question = ["yes", "nan"];

var answer_1 = ["yes", "yr"];			//1
var answer_2 = ["no", "nan"];			//2
var answer_3 = ["maybe", "dddd"];		//3

var questionAnswer = [1, 2]; 	//first selection is counted as 1. 

var name;

//Called from index.html
function Run ()
{	
	NewQuestion();
	ResetField();
	PushScreen ("home");
	setInterval (RenderFrame, 1);	
}

//Input
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("keydown", KeyDown, false);
document.addEventListener("keyup", KeyUp, false);

function mouseMoveHandler (e)
{	
}

function KeyDown (e)
{	
	//bad coding practices await

	//z
	if (e.keyCode == 90)
	{
		if (screen == "lose")
		{
			PushScreen ("leaderboards");
		}
		if (screen == "game" || screen == "home")
		{
			speed = 4;
		}
	}

	//x
	if (e.keyCode == 88)
	{
		if (screen = "leaderboards")
		{
			PushScreen ("home");
		}
	}

	switch (e.keyCode)
	{
		//left
		case 37:
            xDir = -1;
			break;
			
		//up
		case 38:
			yDir = -1;
			break;
			
		//right
		case 39:
			xDir = 1;
			break;
			
        //down
		case 40:
			yDir = 1;
			break;
	}
}

function KeyUp (e)
{	
	if (e.keyCode == 90)
	{
		if (screen == "game" || screen == "home")
		{
			speed = 1.5;
		}
	}
	switch (e.keyCode)
	{
		//left
		case 37:
            xDir = 0;
			break;
			
		//up
		case 38:
			yDir = 0;
			break;
			
		//right
		case 39:
			xDir =0;
			break;
			
        //down
		case 40:
			yDir =0;
			break;
	}
}

//Called from Run()
function RenderFrame ()
{	
	name = document.getElementById("namebox").value;

	//initialise and assign canvas
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	//Screen handling
	if (screen == "home")
	{
		home_Update();
		home_Draw (ctx);
	}
	else if (screen == "game")
	{
		if (!fieldResetted)
		{
			ResetField();
		}
		game_Update();
		game_Draw (ctx);		
	}
	else if (screen == "lose")
	{
		lose_Update();
		lose_Draw (ctx);		
	}
	else if (screen == "leaderboards")
	{
		b_Update();
		b_Draw(ctx);
	}

	if (screen != "game")
	{
		time = 0;
		clearInterval (timerID);
	}

	if (screen != "leaderboards")
	{
		submitted = false;
	}
    
    if (screen != "home")
    {
        homeinit = false;
    }
}

