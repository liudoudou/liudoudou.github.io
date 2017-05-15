$(function(){
	xuanxiangka(".topright .dropdown",".topright .dropdown-menu");

	moveXXK("header .navbar-nav .dropdown","header .navbar-nav .dropdown-menu","open");

	banner(".banner","#lbpre","#lbnext",".carousel-inner #item",".carousel-indicators li");

	duotu(".yhgundong",".yhpre",".yhnext",".yhcx",1);
	
	duotu(".indexgg .row",".qhbtn .left",".qhbtn .right",".indexgg",1);
	ck("#dropdownMenu3",".middleleft .dropdown1 .dropdown-menu");
	function ck(btnbox,conbox){
		const btn = $(btnbox);
		const con = $(conbox);
		let flag = true;
		for(let i=0;i<btn.length;i++){

			btn[i].onclick=function(){
				if(flag){
					flag = false;
					con[i].style.display="block";	
				}else{
					flag = true;
					con[i].style.display="none";
				}
					
			}
				
		}

	}
})