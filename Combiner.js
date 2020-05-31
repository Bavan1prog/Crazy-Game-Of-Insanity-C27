class Combiner{
constructor(bodyA,bodyB){
    var options = {
     bodyA:bodyA ,
     bodyB:bodyB,
     stiffness : 0.05,
     length : 10.5 
    }
    this.combiner = Constraint.create(options);
    }
    display(){
    var PointA = this.combiner.bodyA.position ;
    var PointB = this.combiner.bodyB.position;
    strokeWeight(6);
    stroke(255,140,0);
    line(PointA.x,PointA.y,PointB.x,PointB.y); 
    }
}