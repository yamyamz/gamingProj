////////////////////////////////////////////////////////////////
function setupGround(){
  ground = Bodies.rectangle(500, 600, 1000, 40, {
    isStatic: true, angle: 0
  });
  World.add(engine.world, [ground]);
}

////////////////////////////////////////////////////////////////
function drawGround(){
  push();
  fill(128);
  drawVertices(ground.vertices);
  pop();
}
////////////////////////////////////////////////////////////////

function setupPropeller(){
    propeller =Bodies.rectangle(150,480,200,15,{isStatic:true,angle:0});
    
    World.add(engine.world,[propeller]);
  // your code here
}
////////////////////////////////////////////////////////////////
//updates and draws the propeller
function drawPropeller(){
  push();
    drawVertices(propeller.vertices); 
  Body.setAngle(propeller,angle);
Body.setAngularVelocity(propeller,angleSpeed);
   angle= angle + angleSpeed;
  pop();
}
////////////////////////////////////////////////////////////////
function setupBird(){
  var bird = Bodies.circle(mouseX, mouseY, 20, {friction: 0,
      restitution: 0.95 });
  Matter.Body.setMass(bird, bird.mass*10);
  World.add(engine.world, [bird]);
  birds.push(bird);
}
////////////////////////////////////////////////////////////////
function drawBirds(){
  push();
    fill(125,122,200);
for(var i=0;i<birds.length;i++){
    drawVertices(birds[i].vertices);
    if(isOffScreen(birds[i])){
        removeFromWorld(birds[i]);
        birds.splice(i,1);
        i--;
    }
}
   
  pop();
}

////////////////////////////////////////////////////////////////
//creates a tower of boxes
function setupTower(){
    var column =3;
    var row = 6;
   
     for(var i=0; i<= 5;i++){
        for(var j=0; j< 3;j++){
        
     var stack = Bodies.rectangle(650-j*75,540-i*75,80,80);
     var g = random(100,255);   
    colors.push(g);
     World.add(engine.world,[stack,colors]);
     
     boxes.push(stack);
        
        
        }
            
        
        }

 }
    
////////////////////////////////////////////////////////////////
//draws tower of boxes
function drawTower(){
 
     
    push();
   
     
    for(var i=0;i<boxes.length;i++){
    fill(0,colors[i],0);
    drawVertices(boxes[i].vertices);
    }
  
    pop();
}
////////////////////////////////////////////////////////////////
function setupSlingshot(){
    slingshotBird= Bodies.circle(100,100,20,{restitution: 0.95, friction:0});
     Matter.Body.setMass(slingshotBird, slingshotBird.mass*10);
    
    slingshotConstraint = Constraint.create ({
        pointA:{x: 200, y: 200},
        bodyB: slingshotBird,
        pointB: {x:0,y:0},
        length : 20,
        stiffness: 0.01,
        damping: 0.0001
        
    });
    World.add(engine.world,[slingshotBird,slingshotConstraint]);
}
////////////////////////////////////////////////////////////////
//draws slingshot bird and its constraint
function drawSlingshot(){
  push();
    fill(255,0,0)
 drawVertices(slingshotBird.vertices);
   stroke(128);
    strokeWeight(2); drawConstraint(slingshotConstraint);
  pop();
}
/////////////////////////////////////////////////////////////////
function setupMouseInteraction(){
  var mouse = Mouse.create(canvas.elt);
  var mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);
}
