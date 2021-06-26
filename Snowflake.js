class Snowflake {
    constructor(x,y,r){
        var options = {
         // restitution: 1,
            friction: 0.1,
            // density: 1
        }
        
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        
        
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.r*2, this.r*2);       
               
        // fill("green");
        pop();

    }
}