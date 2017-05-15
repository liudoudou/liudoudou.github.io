$(function(){
	// alert("开始游戏！");
	const sence = $(".sence")[0];
	const defen = $(".fen")[0];
	const gao = $(".gao")[0];
	const pausebtn = $(".pause")[0];
	let snake1 = new snake(sence,defen,gao,pausebtn);

	// console.log(snake1.sence);
});
class snake{
	constructor(sence,defen,gao,pausebtn){
	// constructor(sence){
		// 定义初始蛇信息
		this.sence = sence;		
		this.she = [{x:0,y:0},{x:0,y:1},{x:0,y:2}];
		this.shefx = "right";	
		this.shekeyFlag = true;
		this.defen = defen;
		this.gao = gao;
		this.fenshu = 0;
		this.maxfen=0;
		this.pausebtn = pausebtn;
		this.pausebtnFlag = true;	
		this.play();

		
	}
	play(){
		// console.log(defen);
		//创建格子
		this.createSence();
		// 创建蛇
		this.createShe();
		// 让蛇动
		this.sheMove();
		// 键盘控制蛇
		this.controlKey();
		// 创建食物
		this.createFood();
		// 暂停
		this.pause();
		if(Number(localStorage.gao)){
			this.gao.innerHTML = localStorage.gao;
			this.maxfen = localStorage.gao;
		}else{
			this.maxfen = 0;
			this.gao.innerHTML = this.maxfen;
		}
	}
	changeFenshu(){
		this.defen.innerHTML = this.fenshu;
		// if(this.maxfen){
			if(this.maxfen<this.fenshu){
				this.maxfen = this.fenshu;
			}
		// }
		// this.defen.innerHTML = this.maxfen;
	}
	createSence(){
		//行
		for(let i = 0; i < 20; i++){
			//列
			for(let j = 0;j < 20; j++){
				let gezi = $("<div>");
				gezi.id = `${i}-${j}`;
				gezi.classList.add("gezi");
				this.sence.appendChild(gezi);
			}
		}
	}
	// 根据蛇信息创建蛇
	createShe(){
		for(let i = 0; i < this.she.length; i++){

			this.getElement(this.she[i]).classList.add("she");
		}		
	}
	// 蛇移动 时间间隔函数
	sheMove(){
		let that = this;
		// let score = $(".fen")[0];
		// let gao= $(".gao")[0];
		this.t = setInterval(function(){
			let newtou;
			//
			if(that.shefx=="right"){
				// 定义新蛇头的位置信息
				newtou = {x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y+1};
			}
			if(that.shefx=="left"){
				// 定义新蛇头的位置信息
				newtou = {x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y-1};
			}
			if(that.shefx=="top"){
				// 定义新蛇头的位置信息
				newtou = {x:that.she[that.she.length-1].x-1,y:that.she[that.she.length-1].y};
			}
			if(that.shefx=="bottom"){
				// 定义新蛇头的位置信息
				newtou = {x:that.she[that.she.length-1].x+1,y:that.she[that.she.length-1].y};
			}
			// 判断蛇是否出界
			if(newtou.x<0||newtou.x>19||newtou.y<0||newtou.y>19){
				that.gameover();
				return;
			}
			// 判断蛇是否碰到自己
			for(let i = 0; i < that.she.length; i++){
				if(newtou.x==that.she[i].x&&newtou.y==that.she[i].y){
					that.gameover();
					return;
				}
			}			
			// 改变初始蛇的信息(添加新蛇头信息)
			that.she.push(newtou);
			//判断蛇头和
			if(newtou.x==that.foodw.x&&newtou.y==that.foodw.y){
				that.getElement(that.foodw).classList.remove("food");
				that.createFood();
				// score.innerHTML=that.she.length-3;
				that.fenshu++;
				that.changeFenshu();
			}else{
				// 去除旧蛇尾信息
				let oldWei = that.she.shift(that.she[0]);//从数组中去掉第一个元素
				// 去除旧蛇尾she类名
				that.removeWei(oldWei);
			}
			
			// 重新创建蛇
			that.createShe();
			that.shekeyFlag=true;
		},300);

	}
	pause(){
		let that = this;
		this.pausebtn.onclick=function(){
			if(that.pausebtnFlag){
				that.pausebtnFlag = false;
				clearInterval(that.t);
				that.pausebtn.innerHTML="on";
			}else{
				that.pausebtnFlag = true;
				that.sheMove();
				that.pausebtn.innerHTML="off";
			}
			
		}
	}

	getElement(weizhi){
		let id=weizhi.x+"-"+weizhi.y;
		return document.getElementById(id);
	}
	// 去除旧蛇尾she类名
	removeWei(oldWei){

		this.getElement(oldWei).classList.remove("she");
	}
	// 创建食物
	createFood(){
		this.foodw = {};
		this.foodw.x = Math.floor(Math.random()*20);
		this.foodw.y = Math.floor(Math.random()*20);
		this.getElement(this.foodw).classList.add("food");
	}
	gameover(){
		localStorage.gao = this.maxfen;
		this.gao.innerHTML = localStorage.gao;
		clearInterval(this.t);
	}
	controlKey(){
		let that = this;
		window.onkeydown=function(e){
			// 定义蛇的方向
			if(that.shekeyFlag){
				// 改变方向开关关闭(方向变化后 shemove结束开关打开)
				that.shekeyFlag=false;
				if(e.keyCode==37){
					if(that.shefx!="right"){
						that.shefx = "left";
					}				
				}
				if(e.keyCode==38){
					if(that.shefx!="bottom"){
						that.shefx = "top";
					}
				}
				if(e.keyCode==39){
					if(that.shefx!="left"){
						that.shefx = "right";
					}
				} 
				if(e.keyCode==40){
					if(that.shefx!="top"){
						that.shefx = "bottom";
					}
				}

			}
				
		}
	}
}
// 定义初始蛇信息
// 根据蛇信息创建蛇
// 蛇移动 时间间隔函数
// 定义新蛇头的位置信息
// 改变初始蛇的信息(添加新蛇头信息)
// 去除旧蛇尾信息
// 去除旧蛇尾she类名
// 重新创建蛇
	