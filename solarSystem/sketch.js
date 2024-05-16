var speed;
var angle1=0.0;
function setup() {
    createCanvas(900, 700);
}

function draw() {
    background(0);
    speed = frameCount;

    push();
    
    // SUN
    translate(width/2, height/2);
    rotate(radians(speed/3));
    celestialObj(color(255,150,0), 200); 
    
    pop();
     
   
    //Translating the earth from sun
    push()
    //sun
    translate(width/2,height/2);
    rotate(radians(speed/3));
    //Earth 
    translate(250,50);
    rotate(radians(speed));
    celestialObj(color(0,0,255), 80);
    pop();
    
 
    
    push();
    //Making the moon follow the sun
    translate(width/2,height/2);
    rotate(radians(speed/3));
    
    //translating earth from the sun and rotating the earth
   translate(250,50);
    rotate(radians(speed));

    //translate the moon from earth and rotate
    translate(80,20);
     rotate(radians(-speed*2));
    
   
    
    celestialObj(color(255), 30);
    pop();
    

//second moon object
    push();
    //follow the sun to the center
    translate(width/2,height/2);
    rotate(radians(speed/3));
    //translate the earth from the sun and rotate
   translate(250,50);
    rotate(radians(speed));
    
    //translate the second moon from the earth and rotate
    
     
    translate(60,80);
     rotate(radians(-speed/4));
    
   
    
   celestialObj(color(255,0,0), 20);
    pop();

    
    
}

function celestialObj(c, size){
    
    push();
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
    pop();
    
   
   
}


