$(function(){
	// 选项卡
	const btn = document.querySelectorAll(".list_menu_item");
	const xiala = document.querySelectorAll(".bannerNavLis");
	// console.log(xiala);
	xuanxiangka(btn,xiala);

	const btn1 = document.querySelectorAll(".lgbox");
	const xiala1 = document.querySelectorAll(".dorpdown-layer");
	// console.log(xiala);
	xuanxiangka(btn1,xiala1);

	const btn2 = $(".mobile");
	const xiala2 = $(".mobile_pop");
	// console.log(xiala);
	xuanxiangka(btn2,xiala2);

	// const btn3 = $(".mobile_static");
	// const xiala3 = $(".mobile_pop");
	// console.log(xiala);
	// xuanxiangka(btn3,xiala3);

	//轮播
	// lrCarousel(".tu",".bannerimg","leftLink",".rightLink",".dianitem");
	// Carousel(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor);
	Carousel(".banner",".banner-list",".dianitem",[],2,"#db192a",1000,1,"#fff");
	// function lc_jz(btnbox,btnli,floor,colorArr,chushiColor,navbox)
	lc_jz(".J_lift",".lift_list .lift_item1",".floor","#d70b1c","rgb(145, 136, 136)",".search-fix");
	// function duotu(boxdata,leftBtndata,rightBtndata,winsdata,ndata);
	duotu(".hc-list",".hc-btn-left",".hc-btn-right",".hc-main-left",5);
	duotu(".pt_logo_list",".pt_logo_pre",".pt_logo_next",".pt_logo_list_wrapper",6);
	duotu(".pt_logo_list1",".pt_logo_pre1",".pt_logo_next1",".pt_logo_list_wrapper1",6);
	duotu(".pt_logo_list2",".pt_logo_pre2",".pt_logo_next2",".pt_logo_list_wrapper2",6);
	duotu(".pt_logo_list3",".pt_logo_pre3",".pt_logo_next3",".pt_logo_list_wrapper3",6);
	duotu(".pt_logo_list4",".pt_logo_pre4",".pt_logo_next4",".pt_logo_list_wrapper4",6);
	duotu(".pt_logo_list5",".pt_logo_pre5",".pt_logo_next5",".pt_logo_list_wrapper5",6);
	duotu(".pt_logo_list6",".pt_logo_pre6",".pt_logo_next6",".pt_logo_list_wrapper6",6);
	duotu(".pt_logo_list7",".pt_logo_pre7",".pt_logo_next7",".pt_logo_list_wrapper7",6);
	duotu(".pt_logo_list8",".pt_logo_pre8",".pt_logo_next8",".pt_logo_list_wrapper8",6);
	duotu(".pt_logo_list9",".pt_logo_pre9",".pt_logo_next9",".pt_logo_list_wrapper9",6);
	duotu(".pt_logo_list10",".pt_logo_pre10",".pt_logo_next10",".pt_logo_list_wrapper10",6);
	duotu(".pt_logo_list11",".pt_logo_pre11",".pt_logo_next11",".pt_logo_list_wrapper11",6);
	duotu(".pt_logo_list12",".pt_logo_pre12",".pt_logo_next12",".pt_logo_list_wrapper12",6);
	duotu(".pt_logo_list13",".pt_logo_pre13",".pt_logo_next13",".pt_logo_list_wrapper13",6);
	duotu(".pt_logo_list14",".pt_logo_pre14",".pt_logo_next14",".pt_logo_list_wrapper14",6);
	duotu(".pt_logo_list15",".pt_logo_pre15",".pt_logo_next15",".pt_logo_list_wrapper15",6);
	backTop(".lift_item_top");
	backTop(".jdm-tbar-tab-top");
	// lrCarousel(pic,imgBox,leftBtn,rightBtn,lis,liactivebgColor,lisColor);
	lrCarousel(".live_item",".live_list",".live_btn_pre",".live_btn_next",".live_ind_item","#fd3131","#fff");


		const phb=$(".yer-bd");
		const phb1=$(".yer-item");
		const phbx=$(".yer-active")[0];
		phb[0].style.display="block";
		for(let i=0;i<phb.length;i++){
		phb1[i].onmouseover=function(){
			
			for(let j=0;j<phb.length;j++){
				phb[j].style.display="none";
			}
			phb[i].style.display="block";
				if(i==0){
				animate(phbx,{left:3},300);
			}else if(i==1){
				animate(phbx,{left:77},300);
			}else if(i==2){
				animate(phbx,{left:156},300);
			}else if(i==3){
				animate(phbx,{left:230},300);
			}else if(i==4){
				animate(phbx,{left:305},300);
			}
		}
		
	}

	const gg=$(".news-content");
	const ggr=$(".news-item");
	const ggxxx=$(".news-tab-active")[0];
	gg[1].style.display="none"
	for(let i=0;i<ggr.length;i++){
		ggr[i].onmouseover=function(){
			for(let j=0;j<ggr.length;j++){
				gg[j].style.display="none";
				
			}
			
			gg[i].style.display="block";
			if(i==0){
				// ggxxx.style.left=4+"px";
				animate(ggxxx,{left:4},200)
			}else{
			// ggxxx.style.left=48+"px";
			animate(ggxxx,{left:44},200)	
			}
		}
	}
		const dh=$(".hour span")[0];
		const dm=$(".cd_minute span")[0];
		const ds=$(".cd_second span")[0];
		class djs{
			constructor(h,m,s,date){
				this.h=h;
				this.m=m;
				this.s=s;
				// this.t=t;
				this.date=date;
			}
			play(){
				let map=this.gettime();
				this.writes(map);
				this.update();
			}
			gettime(){
				let now= new Date();
				let chatime=this.date.getTime()-now.getTime();
				chatime/=1000;
				// let t=parseInt(chatime/60/60/24);
				let h=parseInt(chatime/60/60%24);
				let m=parseInt(chatime/60%60);
				let s=parseInt(chatime%60);
				let map =new Map();

				h=h<10?('0'+h):h;
				m=m<10?('0'+m):m;
				s=s<10?('0'+s):s;
				
				map.set("h",h);
				map.set("m",m);
				map.set("s",s);
				return map;
			}
			writes(map){
				this.h.innerHTML=map.get("h");
				this.m.innerHTML=map.get("m");
				this.s.innerHTML=map.get("s");
				
			}
			update(){
				let that=this;
				setInterval(function(){
					that.writes(that.gettime());
				},1000)
			}
		}
		let wuyi=new Date(2017,4,1,0,0,0)	
		let wydjs1=new djs(dh,dm,ds,wuyi);
		wydjs1.play();
});
