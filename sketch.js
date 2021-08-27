// variable declaration
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

//To load animation and images
function preload() {

    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")

}
function setup() {
// To create a canvas
    createCanvas(600, 200);

    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    // create an invisible ground sprite
    invisibleGround = createSprite(200,190,400,20);
    invisibleGround.visible = false;
    console.log(trex.y);
}

function draw() {

   // adding background colour
    background("yellow");

    

    //jump when the space button is pressed
    if (keyDown("space") && trex.y >= 156) {
    trex.velocityY = -10;

    }

    // adding gravity
    trex.velocityY = trex.velocityY + 0.8

    // making ground endless
    if (ground.x < 0) {
    ground.x = ground.width / 2;

    }
    // stabling trex on our invisible ground 
    trex.collide(invisibleGround);

    // To draw all the sprites
    drawSprites();

}
