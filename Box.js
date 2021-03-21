class Box{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width
        this.height = height
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight(5)  
        stroke("orange") 
        fill("blue")
        rect(0,0,this.width,this.height);
        pop()  
    }
} 
