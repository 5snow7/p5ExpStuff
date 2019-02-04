let textA;let th;
let t;let num;let numch;
let rotsp=.1;
function Ssetup(){
	htStuff();stuff();
	can=createCanvas(800,600);
	can.position(25,65);
	can.class("bdd");
    t=new logo(300,200,0);th=new logo(500,300,0);
	rad.mousePressed(chglevel);
    num=45;
	textA=num+'deg';
	numch=0;
	}
	let word;
	
	function Ddraw(){
	background(200,200,0);

	t.set1(20,20,0);
	StriB(t,200,level);
	th.set1(780,590,-90);
	hilbert(th,8,6,1);
	//text(textA,50,300);
	num+=rotsp;
	textA=num+'deg';
	numsp=sl.value();
	//rad.style('transform',word);
	if(ch!='5'){word='rotateY('+textA+')';}
	if(ch=='5'){word='rotateY('+0+'deg'+')';}
	can.style('transform',word);
	
	mRec.move();mRec.chbdd();mRec.show();
	bubbles(mRec.pos.x,mRec.pos.y,50);
	textSize(25);
	text("ch is "+ch,50,400);
	text("numch is "+numch,50,350);
	}
	
	