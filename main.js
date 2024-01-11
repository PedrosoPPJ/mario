canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

marioWidth = 80;
marioHeight = 150;

backgroundImage = "mario2.jpg";

marioImage = "mario.png";

marioX = 10;
marioY = 10;

function add() {
    backgroundImgTag = new Image ();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    marioImgTag = new Image ();
    marioImgTag.onload = uploadmario; 
    marioImgTag.src = marioImage;
} 

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadmario() {
    ctx.drawImage(marioImgTag, marioX, marioY, marioWidth, marioHeight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }

        
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }

} 

function up()
{
    if(marioY>=0)
    {
        marioY = marioY - 10;
        console.log("quando a seta para cima ser precionada, x = " + marioX + " | y = " +marioY);
        uploadBackground();
         uploadmario();
    }
}
function down()
{
    if(marioY<=500)
    {
        marioY = marioY + 10;
        console.log("quando a seta para cima ser precionada, x = " + marioX + " | y = " +marioY);
        uploadBackground();
         uploadmario();
    }
}
function left()
{
    if(marioX>=0)
    {
        marioX = marioX - 10;
        console.log("quando a seta para cima ser precionada, x = " + marioX + " | y = " +marioY);
        uploadBackground();
         uploadmario();
    }
}
function right()
{
    if(marioX<=700)
    {
        marioX = marioX + 10;
        console.log("quando a seta para cima ser precionada, x = " + marioX + " | y = " +marioY);
        uploadBackground();
         uploadmario();
    }
}
