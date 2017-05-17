	// const lis = document.querySelectorAll(".xuanxiangka li");
	// const div = document.querySelectorAll(".xuanxiangka li div");
	// const div = document.querySelectorAll(".xuanxiangka dl dt");
	//1.window.onload	2.获取元素	3.创建元素
	function $(select,obj=document){
		if(typeof select == "function"){
			window.onload=function(){
				select();
			}
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
	function xuanxiangka(btnbox,conbox){
		const btn = $(btnbox);
		const con = $(conbox);
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
	function zhezhaoO(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.opacity=1;
				
			}
			btn[i].onmouseout=function(){
				con[i].style.opacity=0;
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
		body.scrollTop = 1;
		html.scrollTop = 1;
		return body.scrollTop?body:html;
	}

 	
	function lc_jz(btnbox,btnli,floor,colorArr,chushiColor,navbox){
 		const btnBox = $(btnbox)[0];
	 	const btn = $(btnli);
	 	const section = $(floor);
	 	const nav = $(navbox)[0];
	 	let sobj = scrollobj();
	 	const winH = document.documentElement.clientHeight;
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
						btn[j].style.backgroundColor=chushiColor;
					}
					btn[i].style.backgroundColor = colorArr[i];
				}
				// if(sobj.scrollTop+winH>=section[i].offsetTop){
				// 	let img = $("img",section[i]);
				// 	for(let j = 0; j < img.length; j++){	
				// 		img[j].src = img[j].getAttribute("imgURL");
				// 	}								
				// }
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

	 	// setTimeout(function(){
	 	// 	animate(nav,{top:-50});
	 	// },1000);
 	}
 	
	function moveXXK(btn,con,classname){
	const lis = $(btn);
	// console.log(lis);
	const div = $(con);
	// console.log(div);

	for(let i=0;i<lis.length;i++){

		lis[i].onclick=function(){
			// lis[i].ind=i;
			for(let j = 0;j<div.length;j++){
				lis[j].classList.remove(classname);
				div[j].style.display="none";

			}
			div[i].style.display="block";
			lis[i].classList.add(classname);
		}
	}
}
			

	
