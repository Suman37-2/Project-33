class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
      
        this.body = Bodies.circle(x, y,r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.r=r;
        World.add(world, this.body);

    }
   forScore(){
       if(this.body!==null){
      if(this.body.position.y>470){
       if(this.body.position.x>0 && this.body.position.x<81){
           score=score+500;
           this.body=null;
       }
    }
    }
    if(this.body!==null){
        if(this.body.position.y>470){
       if(this.body.position.x>80 && this.body.position.x<161){
           score=score+500;
           this.body=null;
       }
    }}
    if(this.body!==null){
        if(this.body.position.y>470){
         if(this.body.position.x>160 && this.body.position.x<241){
             score=score+500;
             this.body=null;
         }
      }
      }
      if(this.body!==null){
        if(this.body.position.y>470){
         if(this.body.position.x>240 && this.body.position.x<321){
             score=score+500;
             this.body=null;
         }
      }
      }
      if(this.body!==null){
        if(this.body.position.y>470){
         if(this.body.position.x>320 && this.body.position.x<401){
             score=score+100;
             this.body=null;
         }
      }
      }
      if(this.body!==null){
        if(this.body.position.y>470){
         if(this.body.position.x>400 && this.body.position.x<481){
             score=score+100;
             this.body=null;
         }
      }
      }
      if(this.body!==null){
        if(this.body.position.y>470){
         if(this.body.position.x>480 && this.body.position.x<561){
             score=score+100;
             this.body=null;
         }
      }
      }
      if(this.body!==null){
        if(this.body.position.y>470){
         if(this.body.position.x>560 && this.body.position.x<641){
             score=score+200;
             this.body=null;
         }
      }
      }
      if(this.body!==null){
        if(this.body.position.y>470){
         if(this.body.position.x>640 && this.body.position.x<721){
             score=score+200;
             this.body=null;
         }
      }
      }
      if(this.body!==null){
        if(this.body.position.y>470){
         if(this.body.position.x>720 && this.body.position.x<801){
             score=score+200;
             this.body=null;
         }
      }
      }
    
   }



    display() {
       if(this.body!==null){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

}}