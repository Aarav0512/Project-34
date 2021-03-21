class Monster{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.image = loadImage("Monster-01.png")
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
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        //rect(0,0,this.width,this.height);
        pop()  
    }
} 