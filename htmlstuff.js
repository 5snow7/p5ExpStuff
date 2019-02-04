let rad,sl;let h;
let level;let ch=6;let p,inp;
function htStuff(){
rad=createRadio();rad.class("inpbdd");
rad.position(900,150);//rad.style('transform','rotate(30deg)');
rad.option('level1',1);
rad.option('level2',2);
rad.option('level3',3);
rad.option('start',4);
rad.option('stop',5);
level=6;
sl=createSlider(0,1,.5,.05);
sl.mousePressed(chgspin);
inp=createInput("checking");inp.class('inpbdd');
inp.position(900,50);
inp.changed(chgheading);
//sl.position(900,300);
p=createP("spin speed");p.id('par');
sl.parent('par');p.class('inpbdd');
p.position(900,400);
h=select('h1');
h.position(500,0);

}

function chglevel(){
	 ch=rad.value();
	if(ch){
	if(ch=='1'){level=2;}
	if(ch=='2'){level=4;}
	if(ch=='3'){level=6;}
    //if(ch='4'){numch=0;}
	if(ch=='5'){numch=1;}
	if(ch=='4'){numch=0;}
	}	

}

function chgheading(){
h.html(inp.value());	
}

function chgspin(){
	rotsp=sl.value();
}