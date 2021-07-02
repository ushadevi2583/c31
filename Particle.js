
class particles{
    constructor(x,y,r){

  var options ={
      restitution:0.4
  }
  this.r=r;

  this.body = Bodies.circle(x,y, this.r,options);
  this.color=color(random(0, 225), random (0,225),random(0, 225));
  World.add(World,this.body);

    }
    display(){

        var pos = this.body.position;
        var angle=this.body.angle;

        Push();
        Translate(pos.x, pos.y);
        Rotate(angle);
        //imageMode(CENTER);
        noStroke();
        Fill(this.color)
        ellipse(0,0,this.r,this.r);
        Pop();
    }
}