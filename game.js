//Shieyn 2018

var homePX = 0;
var homePY = 0;

var homeinit = false;

function home_Update ()
{		
    if (!homeinit)
    {
        homePX = 40;
        homePY = 800 - 200;
        homeinit = true;
    }
    
    //movement, input processing
    switch (xDir)
    {
        case -1:
            homePX -= speed;
            break;
        case 1:
            homePX += speed;
            break;
	}
	
    switch (yDir)
    {
        case -1:
            homePY -= speed;
            break;
        case 1:
            homePY += speed;
            break;
	}
}

function home_Draw (ctx)
{
    
    shDrawRect (ctx, 0, 0, 1280, 800, "#d1102d");
    shDrawText (ctx, "170px Tahoma", "Transition Game", 1280 / 2 - 610, 800 / 2, "#000000");
    shDrawText (ctx, "35px Tahoma", " Enter your name and press the button on the right to start =>", 1280 / 2 - 600, 800 / 2 + 50, "#000000");
    
    
    shDrawText (ctx, "30px Arial", "Player name: " + name, 30, 60, "#000000");
    shDrawText (ctx, "30px Arial", "Example cube, control using arrow keys", homePX, homePY - 8, "#ffffff");
    shDrawRect (ctx, homePX, homePY, 80, 80, "#000000");
}











