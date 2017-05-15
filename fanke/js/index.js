$(function(){
	// 选项卡
	// const btn = document.querySelectorAll(".leader .nav-item1");
	// const xiala = document.querySelectorAll(".xiala");
	// // console.log(xiala);
	// xuanxiangka(btn,xiala);
	

	const btn1 = document.querySelectorAll(".weixinBar");
	const xiala1 = document.querySelectorAll(".vweixinTip");
	// console.log(xiala);
	xuanxiangka(btn1,xiala1);

	const btn2 = document.querySelectorAll(".shoppingCar");
	const xiala2 = document.querySelectorAll(".BuycarTab");
	// console.log(xiala);
	xuanxiangka(btn2,xiala2);
	xialanav(".nav-item1",".nav-item1 .xiala",2);
	//轮播
	// Carousel(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor)
	// Carousel(".banner a",".banner",".banner ul li",[],2,"#a10000",1000,1,"#dddddd");
	// lrCarousel(pic,imgBox,leftBtn,rightBtn,lis,lunboTime,lisColor,liactivebgColor)
	lrCarousel(".banner a",".banner",".leftBtn",".rightBtn",".banner ul li",2000,"#dddddd","#a10000");

	const btnTop = $(".topback")[0];
	const body = $("body")[0];
	btnTop.onclick=function(){
		animate(body,{scrollTop:0},200);
	}
});
