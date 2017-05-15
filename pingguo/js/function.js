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
	function lrCarousel(pic,imgBox,leftBtn,rightBtn,lis){	
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
		li[0].style.backgroundColor="#fff";
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
					li[next].style.backgroundColor="#fff";
					li[now].style.backgroundColor="orange";
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
						li[j].style.backgroundColor="orange";
						tu[j].style.left=imgW + "px";		
					}
					//鼠标移到的该轮播点所对应的图置于中间
					tu[i].style.left=0;
					//鼠标移到的该轮播点激活的颜色
					li[i].style.backgroundColor="#fff";
					now = i;
					next = i;
				}															
			}
		}
	}
			
	
	

