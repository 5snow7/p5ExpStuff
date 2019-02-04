let y,le;
//<h1 id="h1" class="bdd" > A Heading </h1>
function cant(x,y,len){
if(len>1){
y+=15;strokeWeight(4);
line(x,y,x+len,y);
cant(x,y,len/3);
cant(x+(2/3)*len,y,len/3);
}	
strokeWeight(1);	
}

function koch(t,len,level){
if(level==1){t.fd(len);}
else{
koch(t,len/2,level-1);t.lt(60);
koch(t,len/2,level-1);t.rt(120);
koch(t,len/2,level-1);t.lt(60);
koch(t,len/2,level-1);
}	
}

function bubbles(x,y,rad){
	if(rad>2){
		ellipse(x,y,rad);
		bubbles(x-rad/2,y,rad/2);
		bubbles(x+rad/2,y,rad/2);
		
	}
}

function v(t,len,level){
if(level==0){}
else{t.rt(30);t.fd(len);v(t,len/2,level-1);t.bk(len);
t.lt(60);t.fd(len);v(t,len/2,level-1);t.bk(len);
t.rt(30);}	
}

function vk(t,len,level){
if(level==0){}
else{t.rt(30);koch(t,len/2,level);v(t,len/2,level-1);
t.rt(180);koch(t,len/2,level);t.rt(180);	
t.lt(60);koch(t,len/2,level);v(t,len/2,level-1);
t.rt(180);koch(t,len/2,level);t.rt(180);	
t.rt(30);}	
}

function plus(t,len,level){
if(level==0){}
else{
t.fd(len);plus(t,len/2,level-1);t.bk(len);t.rt(90);
t.fd(len);plus(t,len/2,level-1);t.bk(len);t.rt(90);
t.fd(len);plus(t,len/2,level-1);t.bk(len);t.rt(90);
t.fd(len);plus(t,len/2,level-1);t.bk(len);t.rt(90);
}	
	
}

function StriA(t,len,level){
	if(level==0){}
	else{
	t.fd(len);StriA(t,len/2,level-1);t.rt(120);
	t.fd(len);StriA(t,len/2,level-1);t.rt(120);
	t.fd(len);StriA(t,len/2,level-1);t.rt(120);
}
}

function StriB(t,len,level){
	if(level==0){}
	else{
	t.fd(len);t.rt(120);StriB(t,len/2,level-1);//t.rt(120);
	t.fd(len);t.rt(120);StriB(t,len/2,level-1);//t.rt(120);
	t.fd(len);t.rt(120);StriB(t,len/2,level-1);//t.rt(120);
}
}

function hilbert(t,len,lev,p){
	if(lev==0){}else
	{t.lt(p*90);hilbert(t,len,lev-1,-1*p);t.fd(len);
		t.rt(p*90);hilbert(t,len,lev-1,p);t.fd(len);
		hilbert(t,len,lev-1,p);t.rt(p*90);t.fd(len);
		hilbert(t,len,lev-1,-1*p);t.lt(p*90);
}
}










