class Superhero{
    constructor(x,y){
        this.body = Bodies.circle(x,y,50); 
        this.radius = 50;
        World.add(world,this.body);
        this.image = loadImage("Superhero-01.png")
    } 
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(5);
        stroke("blue");
        fill("red");
        ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER)
        image(this.image,0,0,this.radius*5,this.radius*5)
        pop() 
    }  
} 