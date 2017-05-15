// 当页面加载之后
window.onload=function(){
	// 常亮 const
	const designWidth=750;
	const fontSize=100;
	// document.querySelector("html").style.fontSize=fontSize+"px";
	function resizeFont(){
		// 变量 var
		var CW = document.documentElement.clientWidth;
		// console.log(CW);
		var radio = CW/designWidth;
		var newFontSize = fontSize * radio;
		// 文档   查询选择器   html   样式    字体  
		document.querySelector("html").style.fontSize = newFontSize + "px";
	}
	resizeFont();
	// 窗口大小改变时执行resizeFont
	window.onresize = resizeFont;
}