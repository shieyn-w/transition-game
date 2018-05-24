//Shieyn 2018

var scores = new Array();
var players = new Array()

var submitted = false;

function b_Update()
{
    if (!submitted)
    {
        SubmitScores();
        submitted = true;
    }
}

function SubmitScores ()
{
    console.log ("submitting scores...");
    scores.unshift (score);
    players.unshift (name);
}

function b_Draw (ctx)
{
    shDrawRect (ctx, 0, 0, 1280, 800, "#565656");
    shDrawText (ctx, "40px Arial", "Latest scores", 40, 40, "#ffffff");
    
    for (i = 0; i < scores.length; i++)
    {
        y = 100 + i * 80;
        shDrawRect (ctx, 0, y, 1280, 60, "#ffffff");
        shDrawText (ctx, "30px Arial", scores[i] + " - " + players [i], 30, y + 40, "#000000");
    }

    shDrawText (ctx, "40px Arial", "X to continue", 40, 700, "#ffffff");
}