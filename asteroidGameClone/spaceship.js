class Spaceship {

  constructor(){
    this.velocity = new createVector(0, 0);
    this.location = new createVector(width/2, height/2);
    this.acceleration = new createVector(0, 0);
    this.maxVelocity = 5;
    this.bulletSys = new BulletSystem();
    this.size = 50;
  }

  run(){
    this.bulletSys.run();
    this.draw();
    this.move();
    this.edges();
    this.interaction();
  }

  draw(){
    fill(160,100,160);
    triangle(this.location.x - this.size/2, this.location.y + this.size/2,
        this.location.x + this.size/2, this.location.y + this.size/2,
        this.location.x, this.location.y - this.size/2);
  }

  move(){
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxVelocity);
      this.location.add(this.velocity);
      this.acceleration.mult(0);
    
  }

  applyForce(f){
    this.acceleration.add(f);
  }

  interaction(){
      if (keyIsDown(LEFT_ARROW)){
        this.applyForce(createVector(-0.1, 0));
      }
      if (keyIsDown(RIGHT_ARROW)){
      this.applyForce(createVector(0.1, 0));
      }
      if (keyIsDown(UP_ARROW)){
      this.applyForce(createVector(0,-0.1));
      }
      if (keyIsDown(DOWN_ARROW)){
      this.applyForce(createVector(0, 0.1));
      }
  }

  fire(){
    this.bulletSys.fire(this.location.x, this.location.y);
  }

  edges(){
    if (this.location.x<0) this.location.x=width;
    else if (this.location.x>width) this.location.x = 0;
    else if (this.location.y<0) this.location.y = height;
    else if (this.location.y>height) this.location.y = 0;
  }

  setNearEarth(){
   this.applyForce(createVector(0,0.05));
      var frictionOfShip = this.velocity.copy();
      frictionOfShip.mult(1/30);
      this.applyForce(frictionOfShip);
  }
}
