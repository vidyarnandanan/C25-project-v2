class ball{
    constructor(x,y,radius){
    var options={
       restitution:.5,
       density:1,
    friction:1
    }
    this.body=Matter.Bodies.circle(x, y, radius, options)
    this.image=loadImage("paper.png")
    this.radius=radius
   
    World.add(world,this.body)
    }
    
    display(){
        push ()
    
     imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,60,60)
        
    
    
    
    }
    
    
    
    
    
    
    }