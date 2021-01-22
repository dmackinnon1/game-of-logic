"use strict";


function rect(x,y,size){
	let b = new Bldr("rect");
	b.att("x",x).att("y",y).att("width", size).att("height",size)
	    .att("fill","white").att("stroke","black")
	    .att("stroke-width",2);
    return b;
}

function tokenClick(event){
    let token = event.srcElement;
    let name = token.getAttribute("data_name")
	console.log(name + " clicked")
	globalFirstBoard[name] = (globalFirstBoard[name] + 1)%3;
	console.log(globalFirstBoard[name]);
    evnts.fireEvent("refreshFirstBoard");
}

function simpleCirc(x,y,r){
	let b = new Bldr("circle");
	b.att("cx",x).att("cy",y).att("r", r)
	    .att("fill","white").att("stroke","white")
	    .att("stroke-width",0);
    return b;

}

function circ(x,y,r,color,name="none"){
	let b = new Bldr("circle");
	b.att("cx",x).att("cy",y).att("r", r)
	    .att("fill",color).att("stroke","black")
	    .att("stroke-width",1);
	b.att("data_name",name);
	b.att("onclick", "tokenClick(event)");
    return b;
}

function fill(token){
    	if (token == 0) return "white";
    	if (token == 1) return "grey";
    	if (token == 2) return "black";
}

class FirstBoard {

constructor(size=400){
		this.size = size;
		
		this.xym = 0;
		this.xy_m = 0;
		this.x_ym = 0;
		this._xym = 0;
		this.x_y_m = 0;
		this._xy_m = 0;
		this._x_ym = 0;
		this._x_y_m = 0;	
	}

	init(){
		let height = this.size/2;
		let width = this.size/2;
		let outerSize = this.size/2;
		let innerSize = this.size/4;
		this.svgBldr = new Bldr("svg");
		this.svgBldr.att("version", "1.1").att("xmlns", "http://www.w3.org/2000/svg").att("xmlns:xlink", "http://www.w3.org/1999/xlink");
		this.svgBldr.att("align", "center").att("width", this.size).att("height", this.size);
		//1
		this.svgBldr.elem(rect(0,0,outerSize));
		//2
		this.svgBldr.elem(rect(width,0,outerSize));
		//3
		this.svgBldr.elem(rect(0,height,outerSize));
		//4
		this.svgBldr.elem(rect(width,height,outerSize));
		
		//1
		this.svgBldr.elem(rect(width/2,height/2,innerSize));
		//2
		this.svgBldr.elem(rect(width,height/2,innerSize));
		//3
		this.svgBldr.elem(rect(width/2,height,innerSize));
		//4
		this.svgBldr.elem(rect(width,height,innerSize));

        this.svgBldr.elem(simpleCirc(width,height/3-10,25));
        
        this.svgBldr.elem(new Bldr("text").text("x").att("x",width).att("y",height/3)
            .att("font-size",40).att("text-anchor","middle").att("font-style","italic")
            .att("font-family","times, serif"));

		return this; 
	}
      
    setTokens(){
    	let height = this.size/2;
		let width = this.size/2;
		let outerSize = this.size/2;
		let innerSize = this.size/4;

    	let xy_m = circ(width/3,height/3,innerSize/4,fill(this.xy_m),"xy_m");
        this.svgBldr.elem(xy_m);

        let xym = circ(3*width/4,3*height/4,innerSize/4,fill(this.xym),"xym");
        this.svgBldr.elem(xym);

        let x_ym = circ(5*width/4,3*height/4,innerSize/4,fill(this.x_ym),"x_ym");
        this.svgBldr.elem(x_ym);

        let x_y_m = circ(5*width/3,height/3,innerSize/4,fill(this.x_y_m),"x_y_m");
        this.svgBldr.elem(x_y_m);


        let _xy_m = circ(width/3,5*height/3,innerSize/4,fill(this._xy_m),"_xy_m");
        this.svgBldr.elem(_xy_m);

        let _xym = circ(3*width/4,5*height/4,innerSize/4,fill(this._xym),"_xym");
        this.svgBldr.elem(_xym);

        let _x_ym = circ(5*width/4,5*height/4,innerSize/4,fill(this._x_ym),"_x_ym");
        this.svgBldr.elem(_x_ym);

        let _x_y_m = circ(5*width/3,5*height/3,innerSize/4,fill(this._x_y_m),"_x_y_m");
        this.svgBldr.elem(_x_y_m);
    }

	build(){
		this.setTokens();
		return this.svgBldr.build();
	}



}

var globalFirstBoard = new FirstBoard();
globalFirstBoard.init();