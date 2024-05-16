var spaceship;
var asteroids;
var atmosphereLoc;
var atmosphereSize;
var earthLoc;
var earthSize;
var starLocs = [];
//scoew
var score = 0;
var level = 0;


//////////////////////////////////////////////////
function setup() {
  createCanvas(1200,800);
  spaceship = new Spaceship();
  asteroids = new AsteroidSystem();

  //location and size of earth and its atmosphere
  atmosphereLoc = new createVector(width/2, height*2.9);
  atmosphereSize = new createVector(width*3, width*3);
  earthLoc = new createVector(width/2, height*3.1);
  earthSize = new createVector(width*3, width*3);
}

//////////////////////////////////////////////////
function draw() {
  background(0);
  sky();

  spaceship.run();
  asteroids.run();

  drawEarth();

  checkCollisions(spaceship, asteroids); // function that checks collision between various elements
}

//////////////////////////////////////////////////
//draws earth and atmosphere
function drawEarth(){
  noStroke();
  //draw atmosphere
  fill(0,0,255, 50);
  ellipse(atmosphereLoc.x, atmosphereLoc.y, atmosphereSize.x,  atmosphereSize.y);
  //draw earth
  fill(100,255);
  ellipse(earthLoc.x, earthLoc.y, earthSize.x, earthSize.y);
}

//////////////////////////////////////////////////
//checks collisions between all types of bodies
function checkCollisions(spaceship, asteroids){
    
    for(var i=0;i<asteroids.locations.length;i++){
        var locationOfAst =this.asteroids.locations[i];
        var sizeOfAst = this.asteroids.diams[i];
        var locationOfSp = spaceship.location;
        var sizeOfSp = spaceship.size;
        var overlap = isInside(locationOfAst,sizeOfAst,locationOfSp,sizeOfSp);
        if(overlap){
            gameOver();
        }
       
        }
    
     for(var i=0; i<asteroids.locations.length; i++){
    if(isInside(this.asteroids.locations[i],this.asteroids.diams[i],earthLoc,earthSize.y)){
             gameOver();
         }
         
     }
    
    var spshipLoc = spaceship.location;
    var spshipSize = spaceship.size
    if(isInside(spshipLoc,spshipSize,earthLoc,earthSize.y)){
    gameOver();


}
  
    if(isInside(spaceship.location,spaceship.size,atmosphereLoc,atmosphereSize.y)){
        spaceship.setNearEarth();
    }


    //bullet collisions
    //YOUR CODE HERE (3-4 lines approx)
    var bulletsystem = spaceship.bulletSys;
    var bullets = bulletsystem.bullets 
    for(var i=0; i<bullets.length ; i++){
   for(var j=0; j<asteroids.locations.length; j++){
            var astLocation = asteroids.locations[j];
            var asteroidDiam = asteroids.diams[j];
            if(isInside(astLocation,asteroidDiam,bullets[i],bulletsystem.diam))
                asteroids.destroy(j);
       

 
 }

 
  
}


}


  

//////////////////////////////////////////////////
//helper function checking if there's collision between object A and object B
function isInside(locA, sizeA, locB, sizeB){
   var totalDistance= dist(locA.x,locA.y,locB.x,locB.y);
    var totalRad = sizeA/2 + sizeB/2;
    
    if(totalDistance<totalRad){
        return true;
        
    }else{
        return false;
    }
    
}

//////////////////////////////////////////////////
function keyPressed(){
  if (keyIsPressed && keyCode === 32){ // if spacebar is pressed, fire!
    spaceship.fire();
  }
}

//////////////////////////////////////////////////
// function that ends the game by stopping the loops and displaying "Game Over"
function gameOver(){
  fill(255);
  textSize(80);
  textAlign(CENTER);
  text("GAME OVER", width/2, height/2)
  noLoop();
}

//////////////////////////////////////////////////
// function that creates a star lit sky
function sky(){
  push();
  while (starLocs.length<300){
    starLocs.push(new createVector(random(width), random(height)));
  }
  fill(255);
  for (var i=0; i<starLocs.length; i++){
    rect(starLocs[i].x, starLocs[i].y,2,2);
  }

  if (random(1)<0.3) starLocs.splice(int(random(starLocs.length)),1);
  pop();
}



