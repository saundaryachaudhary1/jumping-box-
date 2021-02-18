var canvas;
var music;
var plate1, plate2, plate3, plate4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    ball = createSprite(400,520,30,30);
    ball.velocityX = 1;
    

    plate1 = createSprite(100,550,160,30);
    plate1.shapeColor = "blue";
    plate2 = createSprite(300,550,160,30);
    plate2.shapeColor = "yellow";
    plate3 = createSprite(500,550,160,30);
    plate3.shapeColor = "red";
    plate4 = createSprite(700,550,160,30);
    plate4.shapeColor = "green";
    



    //create box sprite and give velocity

}

function draw() {
    background(18);
    //create edgeSprite


     drawSprites();
    //add condition to check if box touching surface and make it box
}
