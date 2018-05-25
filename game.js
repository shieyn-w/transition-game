//Shieyn 2018

//Player coords
var pX = 50;
var pY = 50;
var speed = 1.5;

//   0     = no movement
//  -1     = up or left
//   1     = down or right
var xDir = 0;
var yDir = 0;

//stats
var lives = 3;
var dif = 1;
var score = 0;

//enemies
var Enemies = [];

function game_Init()
{
    console.log ("init");
    dif = 1;
	timerID = setInterval (startTimer, 1000);
    newEnemies();
}

function newEnemies ()
{
    Enemies = [];

    //enemy instantiation
    for (i = 0; i < dif + 2; i++)
    {
        var tY = 200 + getRandomInt (300);
        var sp = 1 + getRandomInt (dif / 2);
        var Dir = 1;
        pushNewEnemy (tY, sp, Dir);
        
        console.log ("enemy " + i + " spawned at y: " + tY + " with " + sp + " speed moving in direction " + Dir);
    }

    //enemy dispersion
	for (i = 0; i < Enemies.length; i++)
	{
		if (Enemies[i].dir == -1)
		{
			Enemies[i].x = 1280;	
		}
	}
}

function game_Update ()
{		
    dif = score;

	for (i = 0; i < Enemies.length; i++)
	{
        //moving
		Enemies[i].x += Enemies[i].speed * Enemies[i].dir;

		if (Enemies[i].dir == -1)
		{
			if (Enemies[i].x < 0)
			{
				Enemies[i].x = 1280;
			}
		}
		else
		{
			if (Enemies[i].x > 1280)
			{
				Enemies[i].x = 0;
			}
        }
        
        //collision
        if (Enemies[i].x > pX && Enemies[i].x + 30 < pX + 80)       //x collision
        {
            if (Enemies[i].y > pY && Enemies[i].y + 30 < pY + 80)      //y collision
            {
                DeductLife();
                ResetPos();
            }
        }
	}

	if (time >= end)
	{
		game_suspend(false);
	}

	//Collision detection
	HandlePlayerCollisions();

	//movement, input processing
    switch (xDir)
    {
        case -1:
            pX -= speed;
            break;
        case 1:
            pX += speed;
            break;
	}
	
    switch (yDir)
    {
        case -1:
            pY -= speed;
            break;
        case 1:
            pY += speed;
            break;
	}
	
	//losing
	if (lives < 0)
	{
		game_suspend(true);
	}
}

function game_Draw (ctx)
{
	//Background
	shDrawRect (ctx, 0, 0, 1280, 130, "#7c7c7c");		//Wall
	shDrawRect (ctx, 0, 130, 1280, 800, "#ba7e35");		//Floor
	
	//Doors
	for (i = 0; i < 3; i++)
	{
		var questionStr;
		
		shDrawRect (ctx, 100 + 1280 / 3 * i, 0, 100, 130, "#a39068");
        ctx.strokeRect(100 + 1280 / 3 * i, 0, 100, 130);
        ctx.beginPath();
        ctx.arc(100 + 1280 / 3 * i + 15, 60,10,0,2*Math.PI);
        ctx.stroke();
		switch (i)
		{
			case 0: 
				questionStr = answer_1 [questionID];
				break;
			case 1:
				questionStr = answer_2 [questionID];
				break;
			case 2:
				questionStr = answer_3 [questionID];
				break;
		}
		
		shDrawText (ctx, "20px Arial", questionStr, 1280 / 3 * i, 150 + 20 * i, "#000000");
	}
	
	//enemies 
	for (i = 0; i < Enemies.length; i++)
	{
		shDrawRect (ctx, Enemies[i].x, Enemies[i].y, 30, 30, "#4286f4");
	}

	//Question
    shDrawText (ctx, "30px Arial", question [questionID] + "?", 0, 700, "#000000");
    
	//Question
	shDrawText (ctx, "30px Arial", "SCORE: " + score, 0, 670, "#000000");

    var k = end - time;
    
	//timer
	shDrawText (ctx, "30px Arial", "time: " + k, 1280 - 130, 700);

	//lives
	//TODO replace with circles later
	shDrawText (ctx, "30px Arial", "Lives: " + lives, 0, 30, "#FFFFFF");
	for (b = 0; b < lives; b++)
	{
		shDrawRect (ctx, b * 50, 40, 40, 40, "#c60000");
	}
	
	//player
	shDrawRect (ctx, pX, pY, 80, 80, "#ffffff");
	
}

function pushNewEnemy (y, speed, dir)
{	
	var e = Object.create (Enemy);
	e.Make (y,speed, dir);
	Enemies.push (e);
}
//deducts life
function DeductLife ()
{
	lives --;
}

function HandlePlayerCollisions()
{
	//doors
	if (pY < 130)
	{
		for (a = 0; a < 3; a++)
		{
			doorPos = 100 + 1280 / 3 * a;
            //if (pX > doorPos && pX + 80 < doorPos + 100)
            {
				if (questionAnswer[questionID] == a + 1)
				{
                    score++;
                    newEnemies();
                    NewQuestion();
                    ResetPos();
                    console.log ("corec");
				}
				else
				{
                    DeductLife();
                    ResetPos();
                    console.log ("incorec");
				}
			}
		}
    }	
}

//resets game
function ResetField()
{
	ResetPos();
	lives = 3;
	time = 0;
    dif = 0;
    score = 0;

	fieldResetted = true;
}

function ResetPos ()
{
	pX = 1280 / 2;
	pY = 600;
}

//brings new question
function NewQuestion ()
{
	questionID = getRandomInt (question.length);
}

//game timers
var time = 0;
var end = 30;
var timerID = null;

function startTimer ()
{
	time++;
}

//suspends game
function game_suspend (lost)
{
	fieldResetted = false;
    console.log ("suspending game...")
    
	if (lost)
	{
		PushScreen ("lose");
	}
	else
	{
		PushScreen ("leaderboards")
	}
}
