class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 50, options);
       
        this.radius = 50;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        //pos.x=mouseX;
        //pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(3);
        stroke("green");
        fill("red");
       ellipse(0, 0, this.radius, this.radius);
        pop();
      }
    }