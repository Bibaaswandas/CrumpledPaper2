class dustbin{

    constructor(x,y){
        var options ={
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.dustbinwidth = 200;
        this.dustbinheight = 213;
        this.wallthick = 20;
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinwidth, this.wallthick, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinwidth/2, this.y-this.dustbinheight/2, this.wallthick, this.dustbinheight, {isStatic:true})
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinwidth/2, this.y-this.dustbinheight/2, this.wallthick, this.dustbinheight, {isStatic:true})
		
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.bottomBody);
        World.add(world,this.leftWallBody);
        World.add(world,this.rightWallBody);
        
    }
    display(){

        var bottompos = this.bottomBody.position;
        var leftpos = this.leftWallBody.position;
        var rightpos = this.rightWallBody.position;

        push ();
        translate (leftpos.x,leftpos.y);
        rectMode(CENTER);
        angleMode (RADIANS);
        fill ("white");
        rotate (this.angle);
        pop ();


        push ();
        translate (rightpos.x,rightpos.y);
        rectMode(CENTER);
        angleMode (RADIANS);
        fill ("white");
        rotate (-1*this.angle);
        pop ();

        push ();
        translate (bottompos.x,bottompos.y);
        rectMode(CENTER);
        angleMode (RADIANS);
        fill ("white");

        imageMode (CENTER);
        image (this.image,0,-this.dustbinheight/2,this.dustbinwidth,this.dustbinheight);
        rotate (this.angle);
        pop ();
    }
}
