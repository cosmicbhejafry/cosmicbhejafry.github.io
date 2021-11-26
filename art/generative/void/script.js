let mic;
var tmp;

function setup() {
  createCanvas(600, 400);
  background(0);
  noFill();
  mic = new p5.AudioIn();
  mic.start();

  var step = 20;
  frameRate(5);
  // circle(0,0,100);
  // for(var i = 0; i<=width;i+=step){
  //   bezier(i,height,i,0,i,0,i,0);
  // }
  // for(i = 0; i<=height;i+=step){
  //       bezier(0,i,width,i,0,i,width,i);
//   // }
//   translate(0,height);
//   scale(1,-1,1);  

  tmp = new Alphabets("VOID",50,150);
  // tmp.draw_char("f",width/2,height/2);
  // tmp.dist=20;
  // tmp.draw_str();
  // for(var i = 65; i<=90;i++){
  //   if(i<78){
  //     tmp.draw_char(char(i),(i-65)*60+25,height/2+25);
  //   } 
  //   else{
  //     tmp.draw_char(char(i),(i-78)*60+25,25);
  //   }
  // }

}

function draw() {
  if(frameCount%random(5)==0){background(0);}
// //   tmp.w=200;tmp.h=350;
// //   if(frameCount%30==0){
// //   tmp.draw_char("a",0,0);}
//     // circle(0,0,frameCount%100);
//   // background(220);
// if(frameCount%6==0){
  translate(0,height);
  scale(1,-1,1);  
  let vol = mic.getLevel();
  tmp.dist = 200*vol+0;
  tmp.draw_str();
//       // tmp.draw_char(char(65),(65-65)*50+25,height/2+25);
//   for(var i = 65; i<=90;i++){
//     if(i<78){
//       tmp.draw_char(char(i),(i-65)*50+25,height/2+25);
//     } 
//     else{
//       tmp.draw_char(char(i),(i-78)*50+25,25);
//     }
//   }
// }
  
}

class Alphabets{
  constructor(str,w,h){
    this.string = str;
    // this.x = beginX; 
    // this.y = beginY;
    this.w = w;
    this.h = h;
    this.w2 = w/2;
    this.h2 = h/2;
    this.w4 = w/4;
    this.h4 = h/4;
    this.prop = 0.5;
    this.dist = 50;
  }
  
  get_rand(){
    // if(this.rn){
      // stroke(0,0,random(200));
    //   strokeWeight(1+random(5));      
    // }
    // var x_r =0; var y_r=0;
  let arr = [0,0];
   if(this.prop>0){
      strokeWeight(0+random(3));
      arr[0] = this.prop*(random(this.w)-this.w2);
      arr[1] = this.prop*(random(this.h)-this.h2);
    }
    
    stroke(150+random(100));
    return arr;
  }
  
  draw_a(sx,sy){
    push();
    translate(sx,sy);
   
    stroke(0,0,random(200));
    var x_r, y_r;    
    var arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    
    bezier(0,0,0+x_r,0+y_r,0,0,this.w2,this.h);
    x_r = arr[0]; y_r = arr[1]; 
 bezier(this.w,0,this.w+x_r,0+y_r,this.w,0,this.w2,this.h);
    x_r = arr[0]; y_r = arr[1];  bezier(this.w4,this.h2,this.w4+x_r,this.h2+y_r,this.w4+x_r,this.h2-y_r,3*this.w4,this.h2);
    pop();
  }

  draw_b(sx,sy){
    push();
    translate(sx,sy);
    stroke(100,100,random(200));
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,0,0+x_r,0+y_r,0,0+y_r,0,this.h);   
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,0,0+x_r,0,0,0,this.w,this.h4);
arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
bezier(0,this.h2,0+x_r,this.h2+y_r,0,this.h2,this.w,this.h4);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
bezier(0,this.h2,0+x_r,this.h2+y_r,0,this.h2,this.w,3*this.h4);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,this.h,0+x_r,this.h+y_r,0,this.h,this.w,3*this.h/4);
    pop();
  }  

  draw_c(sx,sy){
    push();
    translate(sx,sy);   
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
   bezier(this.w2,this.h,this.w2+x_r,this.h+y_r,this.w2,this.h,this.w,this.h);   

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
   bezier(this.w2,this.h,this.w2+x_r,this.h+y_r,this.w2,this.h,0,this.h2);     

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,0,this.h2); 

     arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
  bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,this.w,0); 
    pop();
  }
  
  draw_d(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,0,0+x_r*2,0+y_r*2,0,0,0,this.h); 
     
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,0,0+x_r*2,0+y_r*2,0,0,this.w,this.h2); 

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
 bezier(0,this.h,0+x_r*2,this.h+y_r*2,0,this.h,this.w,this.h2);
    pop();    
  }

  draw_e(sx,sy){
    push();
    translate(sx,sy);                           
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h2,0+x_r,this.h2+y_r,0,this.h2,this.w,this.h);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h2,0+x_r,this.h2+y_r,0,this.h2,this.w,this.h2);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h2,0+x_r,this.h2+y_r,0,this.h2,this.w,0);
    pop();    
    this.prop=0.5;
  }

  draw_f(sx,sy){
// make straighter?
    push();
    translate(sx,sy);                           
    let cons = 3;
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,cons*this.h4,0+x_r,cons*this.h4+y_r,0,cons*this.h4,0,0); 
   
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
bezier(0,cons*this.h4,0+x_r,cons*this.h4+y_r,0,cons*this.h4,this.w,cons*this.h4);

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
 bezier(0,cons*this.h4,0+x_r,cons*this.h4+y_r,0,cons*this.h4,this.w,this.h);

    pop();    
  }

  draw_g(sx,sy){
    push();
    translate(sx,sy);                           
    let cons = 2;
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,cons*this.h4,0+x_r,cons*this.h4+y_r,0,cons*this.h4,this.w2,0);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
bezier(0,cons*this.h4,0+x_r,cons*this.h4+y_r,0,cons*this.h4,this.w2,this.h);

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
 bezier(this.w,this.h2,this.w+x_r,this.h2+y_r,this.w,this.h2,this.w2,0);

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
bezier(this.w,this.h2,this.w+x_r,this.h2+y_r,this.w,this.h2,this.w2,this.h2);
    pop();    
  }
  
  draw_h(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,0,0+x_r,0+y_r,0,0,0,this.h);

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(this.w,0,this.w+x_r,0+y_r,this.w,0,this.w,this.h);

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
bezier(0,this.h2,0+x_r,this.h2+y_r,0,this.h2,this.w,this.h2);
    pop();
  }

  draw_i(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,0,0+x_r,0+y_r,0,0,this.w,0);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,this.h,0+x_r,this.h+y_r,0,this.h,this.w,this.h);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,this.w2,this.h);
    pop();
  }

  draw_j(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h,0+x_r,this.h+y_r,0,this.h,this.w,this.h);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
  bezier(this.w2,this.h,this.w2+x_r,this.h+y_r,this.w2,this.h,this.w,this.h);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(this.w2,this.h,this.w2+x_r,this.h+y_r,this.w2,this.h,this.w2,this.h2);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(this.w4,0,this.w4+x_r,0+y_r,this.w4,0,this.w2,this.h2);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(this.w4,0,this.w4+x_r,0+y_r,this.w4,0,0,this.h2);
    pop();
  }

  draw_k(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,0,0+x_r,0+y_r,0,0,0,this.h);

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,this.h2,0+x_r,this.h2+y_r,0,this.h2,this.w,0);
    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,this.h2,this.w+x_r,this.h+y_r,0,this.h2,this.w,this.h);
    pop();
  }

  draw_l(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    this.prop=1.0;
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,0,0+x_r,0+y_r,0,0,0,this.h);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,0,0+x_r,0-y_r,0-x_r,0+y_r,this.w,0);
    pop();
    this.prop=0.5;

  }

  draw_m(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    this.prop = 1.0;
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    
    bezier(0,0,0+x_r,0+y_r,0,0,0,this.h);

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(this.w2,this.h2,this.w2+x_r,this.h2+y_r,this.w2,this.h2,0,this.h);
    
     arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
bezier(this.w2,this.h2,this.w2+x_r,this.h2+y_r,this.w2,this.h2,this.w,this.h);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(this.w,0,this.w+x_r,0+y_r,this.w,0,this.w,this.h);
    pop();
    
    this.prop = 0.5;
  }

  draw_n(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    this.prop = 1.0;
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,0,0+x_r,0+y_r,0-x_r,0-y_r,0,this.h);

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,this.h,0+x_r,this.h-y_r,0,this.h,this.w,0);

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(this.w,0,this.w+x_r,0+y_r,this.w,0,this.w,this.h);
    pop();
  }

  draw_o(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    strokeWeight(1+random(5));
    this.prop = 1.0;

    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 


    bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,0,this.h2);

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,this.w,this.h2); 
 
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1];    bezier(this.w2,this.h,this.w2+x_r,this.h+y_r,this.w2,this.h,0,this.h2);

     arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1];      bezier(this.w2,this.h,this.w2+x_r,this.h+y_r,this.w2,this.h,this.w,this.h2);
    pop();
    this.prop = 0.5;
  }

  draw_p(sx,sy){
    push();
    translate(sx,sy);   
    stroke(0,0,random(200));
    this.prop = 1.0;
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,0,0+x_r,0+y_r,0-x_r,0-y_r,0,this.h);   
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h,0+x_r,this.h+y_r,0,this.h,this.w,3*this.h4);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h2,0+x_r,this.h2+y_r,0,this.h2,this.w,3*this.h4);
    pop();
    this.prop=0.5;
  }

  draw_q(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    this.prop=1.0;
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,0,this.h2);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(this.w2,0,this.w2+x_r,0,this.w2+y_r,0,this.w,this.h2); 
     arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
   bezier(this.w2,this.h,this.w2+x_r,this.h+y_r,this.w2,this.h,0,this.h2);

     arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
   bezier(this.w2,this.h,this.w2+x_r,this.h+y_r,this.w2,this.h,this.w,this.h2);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(this.w2,this.h2,this.w2+x_r,this.h2+y_r,this.w2,this.h2,this.w,0);
    pop();
    this.prop=0.5;
  }

  draw_r(sx,sy){
    push();
    translate(sx,sy);    
    stroke(0,0,random(200));
    this.prop = 1.0;
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,0,0+x_r,0+y_r,0,0,0,this.h);   
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h2,0+x_r,this.h2+y_r,0,this.h2,this.w,3*this.h4);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h,0+x_r,this.h+y_r,0,this.h,this.w,3*this.h4);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h2,0+x_r,this.h2+y_r,0,this.h2,this.w,0);
    pop();
  }

  draw_s(sx,sy){
    push();
    translate(sx,sy);
    
    stroke(0,0,random(200));
    this.prop = 1.0;
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,0,this.h4);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,this.w,this.h4);

     arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
   bezier(0,3*this.h4,0,3*this.h4+x_r,0+y_r,3*this.h4,this.w,this.h4);   
     arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
   bezier(this.w2,this.h,this.w2+x_r,this.h+y_r,this.w2,this.h,this.w,3*this.h4);

     arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
   bezier(this.w2,this.h,this.w2+x_r,this.h+y_r,this.w2,this.h,0,3*this.h4);
    
    pop();
  }
  draw_t(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h,0+x_r,this.h+y_r,0,this.h,this.w,this.h);

    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,this.w2,this.h);
    pop();
  }

  draw_u(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    // this.prop=0.0;
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,0,this.h4);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,this.w,this.h4);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,this.h4,0+x_r,this.h2+y_r,0,this.h2,0,this.h);

     arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1];    bezier(this.w,this.h4,this.w+x_r,this.h2+y_r,this.w,this.h2,this.w,this.h);    
    pop();
  }

  draw_v(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    this.prop = 0.7;
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,0,this.h);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(this.w2,0,this.w2+x_r,0+y_r,this.w2,0,this.w,this.h);
    pop();
  }
  draw_w(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    var x_r, y_r,arr;    
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(this.w4,0,this.w4+x_r,0+y_r,this.w4,0,this.w2,this.h2);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(this.w4,0,this.w4+x_r,0+y_r,this.w4,0,0,this.h);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

 bezier(3*this.w4,0,3*this.w4+x_r,0+y_r,3*this.w4,0,this.w2,this.h2);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(3*this.w4,0,3*this.w4+x_r,0+y_r,3*this.w4,0,this.w,this.h);
    pop();
  }

  draw_x(sx,sy){
    push();
    translate(sx,sy);
    var x_r, y_r,arr;  
    this.prop=1.0;
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,0,0+x_r,0+y_r,0,0,this.w,this.h);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h,0+x_r,this.h+y_r,0,this.h,this.w,0);
    pop();
  }

  draw_y(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    var x_r, y_r,arr;  
    // this.prop=1.0;
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(this.w2,this.h2,this.w2+x_r,this.h2+y_r,this.w2,this.h2,this.w2,0);
        arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

bezier(this.w2,this.h2,this.w2+x_r,this.h2+y_r,this.w2,this.h2,this.w,this.h);
        arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

bezier(this.w2,this.h2,this.w2+x_r,this.h2+y_r,this.w2,this.h2,0,this.h);
  
  pop();
  }

  draw_z(sx,sy){
    push();
    translate(sx,sy);
    stroke(0,0,random(200));
    var x_r, y_r,arr;  
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 
    bezier(0,0,0+x_r,0+y_r,0,0,this.w,0);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,0,0+x_r,0+y_r,0,0,this.w,this.h);
    arr = this.get_rand();
    x_r = arr[0]; y_r = arr[1]; 

    bezier(0,this.h,0+x_r,this.h+y_r,0,this.h,this.w,this.h);
    pop();
  }
  
  draw_str(){
    var dist = this.dist; var num_r = 21;
    var num_c = 2; var j = 1;
    for(var i = 0; i<this.string.length;i++){
      // if(this.string[i]==" "){i-=1;}
      this.draw_char(this.string[i],(i%num_r)*dist+(i%num_r)*this.w+dist,-dist+height*(num_c-j)/num_c);
      if(i%num_r==0 && i!=0){
        j+=1;
      }
    }
  }
  
  draw_char(x,sx,sy){
    print(x);
    if(x=="a" || x=="A"){
      this.draw_a(sx,sy);
    }
    if(x=="b" || x=="B"){
      this.draw_b(sx,sy);
    }
    if(x=="c" || x=="C"){
      this.draw_c(sx,sy);
    }
    if(x=="d" || x=="D"){
      this.draw_d(sx,sy);
    }
    if(x=="e" || x=="E"){
      this.draw_e(sx,sy);
    }
    if(x=="f" || x=="F"){
      this.draw_f(sx,sy);
    }
    if(x=="g" || x=="G"){
      this.draw_g(sx,sy);
    }
    if(x=="h" || x=="H"){
      this.draw_h(sx,sy);
    }
    if(x=="i" || x=="I"){
      this.draw_i(sx,sy);
    }
    if(x=="j" || x=="J"){
      this.draw_j(sx,sy);
    }
    if(x=="k" || x=="K"){
      this.draw_k(sx,sy);
    }
    if(x=="l" || x=="L"){
      this.draw_l(sx,sy);
    }
    if(x=="m" || x=="M"){
      this.draw_m(sx,sy);
    }
    if(x=="n" || x=="N"){
      this.draw_n(sx,sy);
    }
    if(x=="o" || x=="O"){
      this.draw_o(sx,sy);
    }
    if(x=="p" || x=="P"){
      this.draw_p(sx,sy);
    }
    if(x=="q" || x=="Q"){
      this.draw_q(sx,sy);
    }
    if(x=="r" || x=="R"){
      this.draw_r(sx,sy);
    }
    if(x=="s" || x=="S"){
      this.draw_s(sx,sy);
    }
    if(x=="t" || x=="T"){
      this.draw_t(sx,sy);
    }
    if(x=="u" || x=="U"){
      this.draw_u(sx,sy);
    }
    if(x=="v" || x=="V"){
      this.draw_v(sx,sy);
    }
    if(x=="w" || x=="W"){
      this.draw_w(sx,sy);
    }
    if(x=="x" || x=="X"){
      this.draw_x(sx,sy);
    }
    if(x=="y" || x=="Y"){
      this.draw_y(sx,sy);
    }
    if(x=="z" || x=="Z"){
      this.draw_z(sx,sy);
    }

  }

}