//Shieyn 2018

function lose_Update()
{
}

function lose_Draw(ctx)
{
	shDrawRect (ctx, 0, 0, 1280, 800, "#000000");
	shDrawText (ctx, "100px Arial", "GAME OVER", 100, 100, "#c60000");
	shDrawText (ctx, "30px Arial", "CTRL to continue", 100, 200, "#c60000");
}