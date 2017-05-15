$(function(){
	// const hei = $(".mui-mbar-tabs-mask")[0];
	// hei.style.height=document.documentElement.clientWidth;
	// 选项卡
	const topbtn = $(".mui-mbar-tab-logo-top")[0];
	const body = $("body")[0];
	topbtn.onclick=function(){
		animate(body,{scrollTop:0},500);
	}
	const btn0 = $(".navright li.sn-menu");
	const xiala0 = $(".menu-bd");
	// console.log(xiala);
	xuanxiangka(btn0,xiala0);

	const btn = $(".nav-item");
	const xiala = $(".bannerNavLis");
	// console.log(xiala);
	xuanxiangka(btn,xiala);

	const zhezhaoBox1 = $(".brand-item");
	const zhezhao1 =$(".brand-mask");
	zhezhaoO(zhezhaoBox1,zhezhao1);

	
	//轮播
	// function Carousel(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor);
	Carousel(".tu",".bannernav",".dianitem",["rgb(7, 101, 163)","rgb(232, 232, 232)","rgb(232, 232, 232)","rgb(7, 117, 242)","rgb(137, 27, 209)","rgb(7, 101, 163)"],1,"#fff",1000,0,"rgba(0,0,0,0.4)");
	lc_jz(".mui-lift",".mui-lift .mui-lift-nav",".floor",["#EA5F8D","#0AA6E8","#64C333","#F15453"],"#666",".as-total-container");
	const moveBox = $(".mui-mbar-tab-tip");
	const homeBox = $(".mui-mbar-tab");
	// for(let i=0;i<moveBox.length;i++){
		
	// }
	for(let i=0;i<homeBox.length;i++){
		homeBox[i].onmouseover=function(){
			// for(let j=0;j<moveBox.length;j++){
				moveBox[i].style.display="block";
				animate(moveBox[i],{right:35,opacity:1},300);
			// }
			
		}
	}
	for(let i=0;i<homeBox.length;i++){
		homeBox[i].onmouseout=function(){
			// for(let j=0;j<moveBox.length;j++){
				moveBox[i].style.opacity = 0;
				moveBox[i].style.display="none";
				animate(moveBox[i],{right:70,opacity:0},300);
			// }
			
		}
	}

	const box = $(".act-title-ctn");
	let t = setInterval(move,2000);
	function move(){
		for(let i=0;i<box.length;i++){
			let first = box[i].firstElementChild;													
			animate(box[i],{marginTop:-30},1000,function(){
			box[i].appendChild(first);
			box[i].style.marginTop=0;
		});
		}
						
	}

	// function move(){
	// 	for(let i=0;i<box.length;i++){
	// 		let first = box[i].firstElementChild;
	// 		let last = 	box[i].lastElementChild;									
	// 		animate(first,{height:0},500,function(){
	// 			box[i].appendChild(first);
	// 			first.style.height=200+"px";
	// 		});	
	// 	}			
	// }
	
});
