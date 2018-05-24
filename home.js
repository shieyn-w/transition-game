//Shieyn 2018

var homePX = 700;
var homePY = 400;

var homeinit = false;

function home_Update ()
{		
    if (!homeinit)
    {
        homePX = 700;
        homePY = 400;
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
    shDrawRect (ctx, 0, 0, 1280, 100, "#4286f4");
	shDrawText (ctx, "30px Arial", "Transition Game", 50, 60, "#000000");
	shDrawText (ctx, "20px Arial", "Written by Justin Tieu for Year 10 health expo", 50, 80, "#000000");
    
    shDrawRect (ctx, 0, 100, 1280, 700, "#5d5f60");
    shDrawText (ctx, "30px Arial", "Player name: " + name, 600, 60, "#000000");
    shDrawText (ctx, "30px Arial", "Fill in your name using the textbox on the right. Use the button on the right to start the game.", 0, 700, "#000000");
    
    shDrawText (ctx, "30px Arial", "Read the instructions on the piece of paper for the general set of rules", 30, 270, "#000000");
    shDrawText (ctx, "30px Arial", "Make sure you understand the information provided at the stall before you start", 30, 300, "#000000");
    shDrawText (ctx, "40px Arial", "Controls", 30, 380, "#000000");
    shDrawText (ctx, "30px Arial", "Arrow keys to move", 30, 420, "#000000");
    shDrawText (ctx, "30px Arial", "Z to go faster", 30, 450, "#000000");
    shDrawText (ctx, "30px Arial", "Remember, you only have 30 seconds!", 30, 480, "#ffffff");
    
    shDrawText (ctx, "30px Arial", "Example cube, control using arrow keys", homePX, homePY - 8, "#ffffff");
    shDrawRect (ctx, homePX, homePY, 80, 80, "#ffffff");
}