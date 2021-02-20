class box{
    constructor(x,y,width,height){
    var options={
       isStatic:true,
       density:1,
    friction:1
    }
    this.body=Matter.Bodies.rectangle(x, y, width, height, options)
    //this.image=loadImage("dustbingreen.png")
    this.width=width
    this.height=height
    World.add(world,this.body)
    }
    
    display(){
        push ()

    fill ("white")
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    
    
        pop ()
    }
    
    
    
    
    
    
    }