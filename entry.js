//Shieyn 2018

var screen;


var fieldResetted = false;

//questions
var questionID;
var question = ["How many year 10s are stressed about college", 
		"What causes stress about college for year 10s", 
		"what is stress", "is stress always a bad thing", 
		"is anxiety different to stress", 
		"what is a major cause of anxiety", 
		"when people transition to college it is a good idea to...",
		"Jess P Shatkin states that:", 
		"How many people are stressed in high school", 
		"How many people are stressed in college"];

var answer_1 = [
"all",
"How to make friends",
"constraint or pressure to do something",
"yes",
"no",
"loneliness",
"Do nothing and panic",
"Moving to college is more than moving to another school",
"25%",
"25%",
];			//1
var answer_2 = [
"half",
"other",
"A feeling of sadness",
"no",
"yes",
"Knowing what to do for work",
"Let your parents do everything for you",
"Moving to college is nothing more than just another school",
"50%",
"50%",
];			//2
var answer_3 = [
"none",
"What subjects to choose",
"Constant mindfulness",
"-",
"-",
"unknown",
"Get plans and put useful information into your calendar",
"Moving to college doesn’t exist",
"80%",
"80%",
];		//3

var questionAnswer = [

2,
3,
1,
2,
2,
2,
3,
1,
2,
3,

]; 	//first selection is counted as 1. 

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

