class move{

constructor(posst1A,velst1A){
		this.pos=posst1A;this.vel=velst1A;
	this.acc=createVector(.05,.05);}
	
move(){
	this.vel.add(this.acc);
    this.pos.add(this.vel);	
	}
	
chbdd(){
if(this.pos.x<0||this.pos.x>width){this.vel.x=-1*this.vel.x;}
if(this.pos.y<0||this.pos.y>height){this.vel.y=-1*this.vel.y;}
}	

chWbdd(){
if(this.pos.x<0||this.pos.x>windowWidth){this.vel.x=-1*this.vel.x;}
if(this.pos.y<0||this.pos.y>windowHeight){this.vel.y=-1*this.vel.y;}
}	

show(){
fill(250,50,50);strokeWeight(5);stroke(0,100,250);
ellipse(this.pos.x,this.pos.y,20,20);
strokeWeight(1);stroke(0,0,0);
}	
	
}