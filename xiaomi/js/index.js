$(function(){
	// 选项卡
	const btn = document.querySelectorAll(".leaderItem");
	const xiala = document.querySelectorAll(".item-children");
	// console.log(xiala);
	xuanxiangka(btn,xiala);
	
	const btn1 = document.querySelectorAll(".bannerBoxList");
	const xiala2 = document.querySelectorAll(".bannerNavLis");
	// console.log(xiala2);
	xuanxiangka(btn1,xiala2);

	const btn2 = document.querySelectorAll(".shoppingCar");
	const xiala3 = document.querySelectorAll(".cart-menu");
	// console.log(xiala2);
	xuanxiangka(btn2,xiala3);

	//轮播
	// lrCarousel(pic,imgBox,leftBtn,rightBtn,lis,liactivebgColor,lisColor);
	lrCarousel(".tu",".bannerimg",".leftLink",".rightLink",".dianitem","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)");
	// Carousel(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor);
	// Carousel(".tu",".bannerLink",".dianitem",[],2,"rgba(0,0,0,0.2)",1000,1,"rgba(0,0,0,0.4)");
	duotu(".star-box",".gdleft",".gdright",".starbody",5);
	lrCarousel1(".wins1 li",".bbox1",".leftb1",".rightb1",".xm-pagers li","rgba(0,0,0,0.2)","rgba(66,66,66,0.2)");
	lrCarousel1(".wins2 li",".bbox2",".leftb2",".rightb2",".xm-pagers li","rgba(0,0,0,0.2)","rgba(66,66,66,0.2)");
	lrCarousel1(".wins3 li",".bbox3",".leftb3",".rightb3",".xm-pagers li","rgba(0,0,0,0.2)","rgba(66,66,66,0.2)");
	lrCarousel1(".wins4 li",".bbox4",".leftb4",".rightb4",".xm-pagers li","rgba(0,0,0,0.2)","rgba(66,66,66,0.2)");
});
