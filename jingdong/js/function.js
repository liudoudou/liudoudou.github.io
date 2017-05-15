	// const lis = document.querySelectorAll(".xuanxiangka li");
	// const div = document.querySelectorAll(".xuanxiangka li div");
	// const div = document.querySelectorAll(".xuanxiangka dl dt");

	function $(select,obj=document){
		if(typeof select == "function"){
			window.onload=function(){
				select();
			}
		}else if(typeof select == "string"){
			return obj.querySelectorAll(select);
		}
	}

	/* 选项卡
		xuanxiangka(btn,con)
		btn 按钮
		con 内容
	*/
	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){

			btn[i].onmouseover=function(){
				for(let j = 0;j<con.length;j++){
					con[j].style.display="none";					
				}
				con[i].style.display="block";		
			}

			btn[i].onmouseout=function(){
				for(let j = 0;j<con.length;j++){
					con[j].style.display="none";
				}
				
				
			}

		}
	}
	function xxka(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}
	// xuanxiangka(lis,div)

	/* 遮罩
		zhezhao(btn,con)
		btn 按钮
		con 内容
	*/

	// const box=document.querySelectorAll(".box");
	// const zz=document.querySelectorAll(".zhezhao");

	function zhezhao(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[j].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}

	}
	/* 层级轮播
			Carousel(btn,con)
			pic 轮播图片(string类型的选择器)
			bigbannerBox 通屏的banner盒子(string类型的选择器)
			lis 轮播点(string类型的选择器)
			colorArr 通屏的banner盒子的所有颜色(元素为颜色的数组["red","blue","green"]);
			tuactiveZ  
			liactivebgColor	激活时的
			*/
			function Carousel(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor){
				const tu = $(pic);
				const banner = $(bigbannerBox)[0];
				const li = $(lis);
				const color = colorArr;
				
				tu[0].style.zIndex=tuactiveZ;
				li[0].style.backgroundColor=liactivebgColor;
				banner.style.backgroundColor=color[0];
				var num = 0;

				var t = setInterval(move,lunboTime);
				banner.onmouseover=function(){
					clearInterval(t);
				}
				banner.onmouseout=function(){
					t = setInterval(move,lunboTime);
				}
			
				for(let j =0;j<li.length;j++){

					li[j].onmouseover=function(){
						for(let i = 0; i < tu.length; i ++){
						tu[i].style.zIndex=tuZ;
						li[i].style.backgroundColor=lisColor;
						banner.style.backgroundColor=color[0];
						}
						tu[j].style.zIndex=tuactiveZ;
						li[j].style.backgroundColor=liactivebgColor;
						banner.style.backgroundColor=color[j];
						num = j;
					}				
				}

				function move(){
					num++;
					if(num>tu.length-1){
						num = 0;
					}
					for(let i = 0; i < tu.length; i ++){
						tu[i].style.zIndex=tuZ;
						li[i].style.backgroundColor=lisColor;
					}
					tu[num].style.zIndex=tuactiveZ;
					li[num].style.backgroundColor=liactivebgColor;
					banner.style.backgroundColor=color[num];
				}
			}
	/* 左右轮播
	lrCarousel(pic,imgBox,leftBtn,rightBtn,lis)
	pic 轮播图片(string类型的选择器)
	imgBox 轮播图片所在的盒子
	lis 轮播点(string类型的选择器)
	leftBtn  左按钮  
	rightbtn  右按钮
*/
	function lrCarousel(pic,imgBox,leftBtn,rightBtn,lis,liactivebgColor,lisColor){	
		//获取轮播图
		const tu = $(pic);
		//获取轮播图盒子
		const img = $(imgBox)[0];
		//获取左按钮
		const leftbtn = $(leftBtn)[0];
		//获取右按钮
		const rightbtn = $(rightBtn)[0];
		const li = $(lis);
		//获取轮播图盒子宽度        获取最终样式    window.getComputedStyle(img,null).width
		const imgW = parseInt(window.getComputedStyle(img,null).width);
		// console.log(li);
		//初始化开始----------- 
		//开关
		var  flag = true;
		//将轮播图都置于右边
		for(let i = 0; i < tu.length; i ++){
			tu[i].style.left=imgW + "px";
		}
		//显示第一张图片在中间
		tu[0].style.left=0;
		//显示第一个轮播点激活的颜色
		li[0].style.backgroundColor=liactivebgColor;
		//开始轮播
		var t= setInterval(move,1000);
		var now = 0;
		var next = 0;
		//初始化结束---------------

		//轮播函数
		function move(type="l"){
			//轮播
			flag=false;
			if(type=="l"){
				//左移动
				next++;
				if(next>tu.length-1){
					next = 0;	
				}
				tu[next].style.left=imgW + "px";
				animate(tu[now],{left:-imgW},500);
			}else if(type=="r"){
				//右移动
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgW + "px";
				animate(tu[now],{left:imgW},500);
			}
			
			
			
			animate(tu[next],{left:0},500,function(){
				//轮播结束
					flag=true
					li[next].style.backgroundColor=liactivebgColor;
					li[now].style.backgroundColor=lisColor;
					// console.log(`${now}+${next}`);
					now = next;
			});				
		}
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			t= setInterval(move,1000);
		}
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}
		leftbtn.onclick=function(){
			if(flag){
				move("l");
			}
		}
		rightbtn.onclick=function(){
			if(flag){
				move("r");
			}
		}

		//鼠标移到轮播点上的效果
		for(let i = 0; i < tu.length; i ++){
			li[i].onmouseover=function(){
				clearInterval(t);
				if(flag){
					//
					for(let j = 0; j < tu.length; j ++){
						li[j].style.backgroundColor=lisColor;
						tu[j].style.left=imgW + "px";		
					}
					//鼠标移到的该轮播点所对应的图置于中间
					tu[i].style.left=0;
					//鼠标移到的该轮播点激活的颜色
					li[i].style.backgroundColor=liactivebgColor;
					now = i;
					next = i;
				}															
			}
		}
	}
	
 	function scrollobj(){
		let body = document.body
		let html = document.documentElement;
		body.scrollTop = 100;
		html.scrollTop = 100;
		let obj;
		if(body.scrollTop==0){
			obj=html;
		}else{
			obj=html
		}
		obj.scrollTop = 0;
		return obj;
		// return body.scrollTop?body:html;
	}
	function lc_jz(btnbox,btnli,floor,colorArr,chushiColor,navbox){
 		const btnBox = $(btnbox)[0];
 		console.log(btnBox);
	 	const btn = $(btnli);
	 	const section = $(floor);
	 	console.log(section);
	 	const nav = $(navbox)[0];
	 	let sobj = document.body;
	 	const winH = document.documentElement.clientHeight;
	 	for(let i = 0; i < btn.length; i++){

	 		btn[i].onclick=function(){
	 			animate(sobj,{scrollTop:section[i].offsetTop-100},500);
	 		}
	 	}
	 	let flagx = true;
	 	let flags = true;
	 	window.onscroll=function(){ 

			for(let i = 0; i < btn.length; i++){
				if(sobj.scrollTop+0.5*winH>=section[i].offsetTop){
					for(let j = 0; j < btn.length; j++){
						btn[j].style.backgroundColor=chushiColor;
					}
					btn[i].style.backgroundColor = colorArr;
				}
				// if(sobj.scrollTop+winH>=section[i].offsetTop){
				// 	let img = $("img",section[i]);
				// 	for(let j = 0; j < img.length; j++){	
				// 		img[j].src = img[j].getAttribute("imgURL");
				// 	}								
				// }
			}

			if(sobj.scrollTop>=section[0].offsetTop-100){
				if(flagx){
		 			flagx = false;
		 			flags = true
					animate(nav,{top:0},500,function(){
						flagx  = true;
					});
				}
				btnBox.style.display="block";
	 		}else{
				if(flags){
					flags = false;
					flagx = true
					animate(nav,{top:-50},500,function(){
						flags = true;
					});
				}
				btnBox.style.display="none";
		 			
	 		}
	 		
	 	}

	 	// setTimeout(function(){
	 	// 	animate(nav,{top:-50});
	 	// },1000);
 	}






			
	function getdjs(nowhBox,nowmBox,nowsBox,ddbox,dhbox,dmbox,dsbox){
		const nowh = $(".now .num:nth-child(1)")[0];
		const nowm = $(".now .num:nth-child(3)")[0];
		const nows = $(".now .num:nth-child(5)")[0];

		const dd = $(".djs .num:nth-child(1)")[0];
		const dh = $(".djs .num:nth-child(3)")[0];
		const dm = $(".djs .num:nth-child(5)")[0];
		const ds = $(".djs .num:nth-child(7)")[0];

		class time{
			constructor(h,m,s){
				this.h = h;
				this.m = m;
				this.s = s;
			}
			play(){
				this.getTime();
				this.writes(this.getTime());
				this.update();
				// console.log(this.getTime());
				// nowh.innerHTML=this.getTime().get("h");
				// nowm.innerHTML=this.getTime().get("m");
				// nows.innerHTML=this.getTime().get("s");
			}
			getTime(){
				let date = new Date();
				let h = date.getHours();
				let m = date.getMinutes();
				let s = date.getSeconds();
				let map = new Map();
				map.set("h",h);
				map.set("m",m);
				map.set("s",s);

				return map;
			}
			writes(map){
				// this.d.innerHTML=map.get("d");
				this.h.innerHTML=map.get("h");
				this.m.innerHTML=map.get("m");
				this.s.innerHTML=map.get("s");
			}
			update(){
				let that = this;
				setInterval(function(){
					that.writes(that.getTime());
				},1000)
			}
		}

		let nowtime = new time(nowh,nowm,nows);
		nowtime.play();
		class djs extends time{
			constructor(h,m,s,d,date){
				super(h,m,s);
				this.d = d;
				this.date = date;
			}
			play(){
				let map = this.getChaTime();
				this.writes(map);
				this.update();
				
			}
			getChaTime(){
				let now = new Date();
				let chatime = this.date.getTime()-now.getTime();
				chatime/=1000;
				let d = parseInt(chatime/60/60/24);
				let h = parseInt(chatime/60/60%24);
				let m = parseInt(chatime/60%60);
				let s = parseInt(chatime%60);

				let map = new Map();
				map.set("d",d);
				map.set("h",h);
				map.set("m",m);
				map.set("s",s);

				return map;
			}
			writes(map){
				this.d.innerHTML = map.get("d");
				super.writes(map);
			}
			update(){
				let that = this;
				setInterval(function(){
					let map = that.getChaTime();
					that.writes(map);
				},1000)
			}
			
		} 
		let date = new Date(2017,4,1,0,0,0);
		let wydjs = new djs(dh,dm,ds,dd,date);
		wydjs.play();
		// console.log(wydjs.h);
		// console.log(wydjs.m);
		// console.log(wydjs.s);
		// console.log(wydjs.d);
		// console.log(wydjs.date);		
	}




	function duotu(boxdata,leftBtndata,rightBtndata,winsdata,ndata){
		const box = $(boxdata)[0];
		const childlen = box.children.length;
		const leftBtn=$(leftBtndata)[0];
		const rightBtn=$(rightBtndata)[0];
		const wins=$(winsdata)[0];
		const imgW = parseInt(window.getComputedStyle(wins,null).width);
		let flag=true;
		let n=ndata;//传几张图
		var t = setInterval(movel,3000);
		function movel(){
			flag=false;
			let first = box.firstElementChild;		
			animate(box,{left:-imgW},1000,function(){
				flag=true;
                for(let i=0; i<n;i++){
                   box.appendChild(first);
                   first=box.firstElementChild;
                }
				box.style.left=0;
			});			
		}
		//按钮
        function moveR(){
        	//box.insertBefore(last,firstChild);
        	for(let i=0;i<n;i++){
        		let firstChild=box.firstElementChild;
				let last=box.lastElementChild;	
				box.insertBefore(last,firstChild);
        	}
        	box.style.left=-imgW+"px";
        	animate(box,{left:0},1000);
        }

		leftBtn.onclick=function(){
			if(flag){
				moveR();
			}
		}
		rightBtn.onclick=function(){
			if(flag){
				movel();
			}
		}
		leftBtn.onmouseover=function(){
			clearInterval(t);
		}
		rightBtn.onmouseover=function(){
			clearInterval(t);
		}
		leftBtn.onmouseout=function(){
			t = setInterval(movel,3000);
		}
		rightBtn.onmouseout=function(){
			t = setInterval(movel,3000);
		}
	}
	function backTop(btn){
		const btnTop = $(btn)[0];
		const body = $("body")[0];
		btnTop.onclick=function(){
			animate(body,{scrollTop:0},200);
		}
	}		
	

