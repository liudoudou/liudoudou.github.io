	/*
		鼠标滚动事件mouseWheel(obj,shang,xia)
			obj鼠标滚动事件源;
			shang鼠标向上滚动触发的事件
			xia鼠标向下滚动触发的事件
	*/




	// const lis = document.querySelectorAll(".xuanxiangka li");
	// const div = document.querySelectorAll(".xuanxiangka li div");
	// const div = document.querySelectorAll(".xuanxiangka dl dt");
	//1.window.onload	2.获取元素	3.创建元素
	function $(select,obj=document){
		if(typeof select == "function"){
			// window.onload=function(){
			// 	select();
			// }
			window.addEventListener("load",select,false);
		}else if(typeof select == "string"){
			
			//<>
			if(/^<\w+>$/.test(select)){//(\w字母数字下划线)(比一个多+)(<开始 >结束)
				// alert(/^<\w+>$/.test(select));
				
				return document.createElement(select.slice(1,-1));
			}else{
				return obj.querySelectorAll(select);
			}
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
				// lis[i].ind=i;
				for(let j = 0;j<con.length;j++){
					// con[j].style.display="none";
					con[j].style.display="block";
				}
				
			}

			btn[i].onmouseout=function(){
				for(let j = 0;j<con.length;j++){
					con[j].style.display="none";
				}
				
				
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
			Carousel(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor)
			pic 轮播图片(string类型的选择器)
			bigbannerBox 通屏的banner盒子(string类型的选择器)
			lis 轮播点(string类型的选择器)
			colorArr 通屏的banner盒子的所有颜色(元素为颜色的数组["red","blue","green"]);
			tuactiveZ  
			liactivebgColor	激活时的
			*/
			var lunboTime=1000;
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
	function lrCarousel(pic,imgBox,leftBtn,rightBtn,lis,lunboTime,lisColor,liactivebgColor){	
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
		var t= setInterval(move,lunboTime);
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
			t= setInterval(move,lunboTime);
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
			
	
	function Carousel(pic,bigbannerBox,lis,colorArr,tuactiveO,liactivebgColor,lunboTime,tuO,lisColor){
		const tu = $(pic);
		const banner = $(bigbannerBox)[0];
		const li = $(lis);
		const color = colorArr;
		
		tu[0].style.opacity=tuactiveO;
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
				tu[i].style.opacity=tuO;
				li[i].style.backgroundColor=lisColor;
				// banner.style.backgroundColor=color[0];
				}
				tu[j].style.opacity=tuactiveO;
				// animate(tu[j],{opacity:1},500);
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
				tu[i].style.opacity=tuO;
				li[i].style.backgroundColor=lisColor;
			}
			tu[num].style.opacity=tuactiveO;
			// animate(tu[num],{opacity:1},500);
			li[num].style.backgroundColor=liactivebgColor;
			banner.style.backgroundColor=color[num];
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
	/*
		楼层跳转和图片按序加载
	*/
	function lc_jz(btnbox,btnli,floor,navbox){
 		const btnBox = $(btnbox)[0];
	 	const btn = $(btnli);
	 	const section = $(floor);
	 	const nav = $(navbox)[0];
	 	let sobj = scrollobj();
	 	const winH = document.documentElement.clientHeight


	 	for(let i = 0; i < btn.length; i++){

	 		btn[i].onclick=function(){
	 			animate(sobj,{scrollTop:section[i].offsetTop},500);
	 		}
	 	}
	 	let flagx = true;
	 	let flags = true;
	 	window.onscroll=function(){ 

			for(let i = 0; i < btn.length; i++){
				if(sobj.scrollTop+0.5*winH>=section[i].offsetTop){
					for(let j = 0; j < btn.length; j++){
						btn[j].style.backgroundColor="#000";
					}
					btn[i].style.backgroundColor = "orange";
				}
				if(sobj.scrollTop+winH>=section[i].offsetTop){
					let img = $("img",section[i]);
					for(let j = 0; j < img.length; j++){	
						img[j].src = img[j].getAttribute("imgURL");
					}								
				}
			}

			if(sobj.scrollTop>=800){
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

	 	setTimeout(function(){
	 		animate(nav,{top:-50});
	 	},1000);
 	}
 	// 事件
 	/*>>>>>>>>>>>>>>>>>>>>>>>>>
 	让事件只执行一次
	 	one(obj,eventType,fn)
		 	obj事件源
		 	evenType 事件类型
		 	fn 处理程序
 	>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	function one(obj,eventType,fn){
		//添加第一个eventType类型事件 执行fn
		obj.addEventListener(eventType,fn,false);
		//添加第二个eventType类型事件 执行clear
		obj.addEventListener(eventType,clear,false);
		function clear(){
			//清除eventType类型事件中fn处理程序
			obj.removeEventListener(eventType,fn,false);
			//清除eventType类型事件中clear处理程序
			obj.removeEventListener(eventType,clear,false);
		}
	}
	/*>>>>>>>>>>>>>>>>>>>>>>>>>>
		拖拽
			tuozhuai(movebox);
			movebox要绝对定位
	>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	function tuozhuai(movebox){
		const box = $(movebox)[0];
		const winX = document.documentElement.clientWidth;
		const winY = document.documentElement.clientHeight;
		let x;
		let y;
		let boxX;
		let boxY;
		// box.style.position="relative";
		box.addEventListener("mousedown",down,false);


		function down(e){
			x = e.clientX;
			y = e.clientY;
			boxX = box.offsetLeft;
			boxY = box.offsetTop;
			window.addEventListener("mousemove",move,false);
			window.addEventListener("mouseup",up,false);
		}
		
		
		function move(e){
			let mX = e.clientX;
			let mY = e.clientY;
			let chaX = mX-x;
			let chaY = mY-y;
			let lefts = boxX+chaX;
			if(lefts<0){
				lefts = 0;
			}
			if(lefts>winX-box.offsetWidth){
				lefts = winX-box.offsetWidth;
			}
			
			let tops = boxY+chaY;
			if(tops<0){
				tops = 0;
			}
			if(tops>winY-box.offsetHeight){
				tops = winY-box.offsetHeight;
			}
			box.style.left = lefts+"px";
			box.style.top = tops+"px";
		}
		function up(){
			window.removeEventListener("mousemove",move,false);
			window.removeEventListener("mouseup",up,false);
		}
		

	}
	/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		鼠标滚动事件
			obj鼠标滚动事件源;
			shang鼠标向上滚动触发的事件
			xia鼠标向下滚动触发的事件
	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	function mouseWheel(obj,shang,xia){
		obj.addEventListener("mousewheel",scrollFn,false);
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
		function scrollFn(e){
			e.preventDefault();	//阻止浏览器默认行为
			if(e.wheelDelta){
				//谷歌
				if(e.wheelDelta>0){
					shang();
				}else{
					xia();
				}
			}else{
				//火狐
				if(e.wheelDelta>0){
					shang();
				}else{
					xia();
				}

			}
		}
	}
	/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		多张图一起轮播
		duotu(boxdata,leftBtndata,rightBtndata,winsdata,ndata);
		boxdata        放图片的盒子
		leftBtndata		左按钮
		rightBtndata	右按钮
		winsdata		图片盒子外面的盒子
		ndata			几张图一起轮播
	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	function duotu(boxdata,leftBtndata,rightBtndata,winsdata,ndata){
		const box = $(boxdata)[0];
		const childlen = box.children.length;
		const leftBtn=$(leftBtndata)[0];
		const rightBtn=$(rightBtndata)[0];
		const wins=$(winsdata)[0];
		const imgW = parseInt(window.getComputedStyle(wins,null).width);
		let flag=true;
		let n=ndata;//传几张图
		var t = setInterval(movel,1000);
		function movel(){
			flag=false;
			let first = box.firstElementChild;		
			animate(box,{left:-400},500,function(){
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
        	animate(box,{left:0},500)
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
	}

	/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	attr(obj,style)获取obj的style样式值(width,height等)
	obj   类型: DOM元素
	style 类型: 字符串
	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
	function attr(obj,style){
		return window.getComputedStyle(obj,null)[style];
	}




	function xialanav(itemdata,uldata,n){
		const item = $(itemdata);
		const ul = $(uldata);
		for(let i=0;i<ul.length;i++){
			let h=parseInt(attr(ul[i],"height"));
			ul[i].setAttribute("h",h);
			ul[i].style.height=0;
		}
		for(let i=0;i<item.length;i++){
			hover(item[i],function(){
				if(item[i].children[n]){
					let ul = item[i].children[n];
					animate(ul,{height:ul.getAttribute("h")},500);
				}
				
			},function(){
				if(item[i].children[n]){
					let ul = item[i].children[n];
					animate(ul,{height:0},500);
				}
			})
		}
	}
	/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	添加cookie
	addCookie(key,val,[time]);
	key: 		键名            string
	val: 		值              string
	time(可不填)  过期时间 单位s

	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	// 添加
	function addCookie(key,val,time){
		val = escape(val);
		if(time){
			let date = new Date();
			time *= 1000;
			date.setTime(date.getTime()+time);
			date = date.toGMTString();
			document.cookie=`${key}=${val};expires=${date}`;
		}else{
			document.cookie=`${key}=${val}`;
		}
	}
	/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	查看cookie
	getCookie(key);
	key: 		键名            string

	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	// 查看
	function getCookie(key){
		let cookies = document.cookie;
		let cookieArr = cookies.split("; ");
		let val;
		for(let i = 0;i < cookieArr.length; i++){
			// let arr = cookieArr[i].split("=");
			// if(key==arr[0]){
			// 	val = arr[1];
			// 	return val;
			// }
			if(key==cookieArr[i].split("=")[0]){
				val = cookieArr[i].split("=")[1];
			}
		}
		return unescape(val);
	}
	/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	删除cookie
	delCookie(key,val,[time]);
	key: 		键名            string

	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	// 删除
	function delCookie(key){
		let date = new Date();
		date.setTime(date.getTime()-10000);
		date = date.toGMTString();
		document.cookie = `${key}=aa;expires=${date}`;
	}
			

	
