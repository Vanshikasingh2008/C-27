class Rubberband{
    constructor(body1,body2){
     var op = {
         bodyA: body1,
         bodyB: body2,
         length: 20,
         stiffness: 0.04
     }

     this.band = Matter.Constraint.create(op);
     World.add(world,this.band);
    }
    display(){
        var point1 = this.band.bodyA.position;
        var point2 = this.band.bodyB.position;
        push();
        strokeWeight(4);
        line(point1.x,point1.y,point2.x,point2.y);
        pop();
    }

}