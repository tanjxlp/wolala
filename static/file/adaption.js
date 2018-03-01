window.onload = function(){
	
	adapt();
	
	function adapt(){
		var dpr = window.devicePixelRatio;
		var sca = dpr>1 ? 1/dpr:1;
		var meta = document.createElement("meta");
		meta.name = "viewport";
		meta.content = "width=device-width,user-scalable=no,initial-scale="+sca;
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(meta);
		var winWidth = document.documentElement.clientWidth;
		var html = document.getElementsByTagName('html')[0];
		var remRoot = winWidth*100/750;
		html.style.fontSize  = remRoot+"px";
		console.log(remRoot);
		}
		window.onresize = function(){
			adapt();
		}
}

