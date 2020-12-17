class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:1
        }

        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body= Bodies.circle(this.x,this.y,this.radius,options);
        this.radius=radius;                                                              
     World.add(myworld,this.body);
   }

   display(){
    var pos=this.body.position;

       push()
       fill("yellow");
       stroke("purple");
       strokeWeight(3);
       translate(pos.x,pos.y)
       ellipseMode(RADIUS);
       ellipse(0,0,this.radius,this.radius);
       pop()
   }
}
    
