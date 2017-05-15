$(function(){
	// 微信
	xuanxiangka(".J_wechat",".yt-seller-wechat");
	// 手机
	xuanxiangka(".J_phone",".yt-seller-phone");
	// 我的银泰
	xuanxiangka(".J_myhome",".yt-seller-myhome");
	// 购物车
	xuanxiangka(".icart",".J-ShopCart");
	// banner左边导航
	xuanxiangka("dl","dd");
	//banner轮播
	lunboZ(".tab_pannel",".pannels",".nav_trriger li",[],1000,2,"#e5004f",1,"#211616",".eva-switchable-prev",".eva-switchable-next");
	// const 
	// 回到顶部
	backTop(".Y_floor_top");

	moveXXK(".brand_content .eva-switchable-triggers li",".pr_list_t","eva-switchable-active");
	moveXXK(".tk_nav ul li",".pro-list","eva-switchable-active");

	// lrCarousel1(pic,imgBox,leftBtn,rightBtn,lis,classname);
	lrCarousel1(".tu a",".wins",".lbtn",".rbtn",".dian li","eva-switchable-active");
	// lrCarousel1(".lg-item",".scroller",".lbtn1",".rbtn1","","eva-switchable-active");
	duotu(".scroller .eva-switchable-panels",".lbtn1",".rbtn1",".scroller",1);
	duotu(".scroller2 .eva-switchable-panels2",".lbtn2",".rbtn2",".scroller2",1);
	duotu(".scroller3 .eva-switchable-panels3",".lbtn3",".rbtn3",".scroller3",1);
	duotu(".scroller4 .eva-switchable-panels4",".lbtn4",".rbtn4",".scroller4",1);
	duotu(".scroller5 .eva-switchable-panels5",".lbtn5",".rbtn5",".scroller5",1);
	duotu(".scroller6 .eva-switchable-panels6",".lbtn6",".rbtn6",".scroller6",1);
	duotu(".scroller7 .eva-switchable-panels7",".lbtn7",".rbtn7",".scroller7",1);
	duotu(".scroller8 .eva-switchable-panels8",".lbtn8",".rbtn8",".scroller8",1);
	duotu(".scroller9 .eva-switchable-panels9",".lbtn9",".rbtn9",".scroller9",1);

	// lc_jz(btnbox,btnli,floor,navbox,btnColor,btnActiveColor);
	// lc_jz(btnbox,btnli,floor,colorArr,chushiColor,navbox)
	lc_jz(".float_nav",".Y_floor_btn",".floor","#e5004f","");
})