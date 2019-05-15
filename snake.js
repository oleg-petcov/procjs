
let snakeParts = [];
let partSize = 20;
let boxSize = 20;

function setup() {
   frameRate(10);                                        
   createCanvas(300, 200);                                   //noStroke();

   drawGrid();


   snakeParts.push([40,40]);
}

function drawGrid(){
  
   for(x = 0; x < width; x+=20){
       line(x, 0, x, height);
   }
   for(y = 0; y < height; y+=20){
       line(0, y, width, y);
   }

   line(0,1,width,1);
   line(0,height-1,width,height-1);
   line(1,0,1,height-1);
   line(width-1,0,width-1,height-1);
}

function drawSnakeParts(){

   for(i = 0; i < snakeParts.length; i++){
       rect(snakeParts[i][0],snakeParts[i][1],partSize,partSize);
   }

}
                 
function draw() {
   background(255);

   stroke(0);
   drawGrid();

   drawSnakeParts();



}






