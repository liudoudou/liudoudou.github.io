class Draw{
    constructor(cobj,option){
        // option
        this.cobj = cobj;
        this.color = option.color;
        this.width = option.width;
        this.style = option.style;
    }
    init(){
        this.cobj.strokeStyle = this.color;
        this.cobj.fillStyle = this.color;
        this.cobj.lineWidth = this.width;
    }
    rect(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        this.cobj.rect(ox,oy,mx-ox,my-oy);
        this.cobj[this.style]();
        // this.cobj.strokeRect(ox,oy,mx-ox,my-oy);
    }
    line(ox,oy,mx,my){
        this.cobj.beginPath();
        this.cobj.moveTo(ox,oy);
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    circlein(ox,oy,mx,my){
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.beginPath();
        var r = Math.abs(mx-ox)<Math.abs(my-oy)?Math.abs(mx-ox)/2:Math.abs(my-oy)/2;
        this.cobj.arc((mx>ox?r:-r),(my>oy?r:-r),r,0,Math.PI*2);
        this.cobj[this.style]();

        this.cobj.restore();
    }
    circleout(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        let r = Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;
        this.cobj.arc(ox+(mx-ox)/2,oy+(my-oy)/2,r,0,Math.PI*2);
        this.cobj[this.style]();
    }
    circlecenter(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        let r = Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
        this.cobj.arc(ox,oy,r,0,Math.PI*2);
        this.cobj[this.style]();
    }
    poly(ox,oy,mx,my,s){
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.rotate(Math.PI/2);
        let angle = Math.PI/s;
        let r = Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
        let x = Math.cos(angle)*r;
        let y = Math.sin(angle)*r;
        this.cobj.beginPath();
        this.cobj.moveTo(x,y);
        for(let i=0;i<s;i++){
            this.cobj.lineTo(x,-y);
            this.cobj.rotate(-angle*2);
        }
        this.cobj.restore();
        this.cobj[this.style]();
    }
    pen(ox,oy,mx,my){
        this.init();
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    eraser(ox,oy,mx,my){
       this.cobj.clearRect(mx,my,10,10);
    }

}