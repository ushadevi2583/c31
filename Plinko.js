
class plinkos{
constructor(x,y){
var options ={
      restitution:1,
      friction:0,
      isStatic:true
  }
  this.r=10;
  this.body = Bodies.circle(x,y, this.r,options);
  World.add(World,this.body);
  
    }
    display(){

        var pos = this.body.position;
        var angle=this.body.angle;

        Push();
        Translate(pos.x, pos.y);
        Rotate(angle);
        imageMode(CENTER);
        noStroke();
        Fill("white")
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        Pop();
    }
}