$(function(){
	// 选项卡
	const btn = document.querySelectorAll(".list_menu_item");
	const xiala = document.querySelectorAll(".bannerNavLis");
	// console.log(xiala);
	xuanxiangka(btn,xiala);

	//轮播
	// lrCarousel(".tu",".bannerimg","leftLink",".rightLink",".dianitem");
	// Carousel(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor);
	Carousel(".banner",".banner-list",".dianitem",[],2,"#db192a",1000,1,"#fff");
});
