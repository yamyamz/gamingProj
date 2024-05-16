var stepSize = 20;

function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////

function colorGrid(){
  // your code here
    var blue = color(0,125,200);
    var pink = color(200,0,0); 
    fill(255);
    stroke(0);
    for(var i=0;i< 25;i++){
        for(var j=0;j<25;j++){
    var mX = map(mouseX, 0, width, 0, 80);
    var Xpos =((i*stepSize)+frameCount)/100
    var Ypos = ((j*stepSize)+frameCount)/100
    var nX=noise(Xpos,Ypos ,mX);
            
    var c=lerpColor(pink,blue,nX);
    fill(c);

 rect(i*stepSize,j*stepSize,stepSize,stepSize);
            
        }
    }
}

///////////////////////////////////////////////////////////////////////
function compassGrid(){
  for(var i=0;i<= 25;i++){
        for(var j=0;j<=25;j++){
    
    push();
    translate(i*stepSize-stepSize/2,j*stepSize+stepSize/2);
    var mX = map(mouseX, 0, width, 0, 80);
  
    var Xpos =((i*stepSize)+frameCount/100)*0.003;
     var Ypos = ((j*stepSize+frameCount/100))*0.003;
      var nXc = noise(Xpos,Ypos,mX*0.03);           
      var mapC = map(nXc,0,1,0,720);
        rotate(radians(mapC));
            strokeWeight(3);
        line(0,stepSize/2,0,-stepSize/2);
     
             pop();

}
  }
}
