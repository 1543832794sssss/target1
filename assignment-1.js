window.onload=function(){
	var cube=[0,1,2,3,4,5,6,7,8];
		var h=document.getElementById("control1");
		var s=document.getElementById("control2");
		var g=1;
	
			h.onclick=function v(){
				s.onclick=function(){g=1;}
				var u=setInterval(function(){
							if (g==1) {clearInterval(u); h.disabled="false";
								for(var k=0;k<9;k++){
								var n=document.getElementById("block"+k);
								n.style.background="orange";
								}
							}	
							else{
								twinkle();
								h.disabled="true";
							}
				    	},1000
				    );g=0;
			}
	    
	  

			function three(){	
				var t,j;
				for (var i = cube.length-1;i > 0;  i--) {
					var j=Math.floor(Math.random()*i);
					t=cube[i];
					cube[i]=cube[j];
					cube[j]=t;
				}
				return cube;
			}

			function color(){
				var m=[0,1,2,3,4,5];
				var r='';
				for (var q = 0; q <6 ; q++) {
					m[q]=Math.floor(Math.random()*0xf);
					r+=m[q].toString(16);
				}
				return "#"+r;
				
			}

			function twinkle(){			
		        for(var k=0;k<9;k++){
				var n=document.getElementById("block"+k);
				n.style.background="orange";
				}
			three();
			var a=document.getElementById("block"+cube[0]);
			var b=document.getElementById("block"+cube[1]);
			var c=document.getElementById("block"+cube[2]);
			a.style.background=color();
			b.style.background=color();
			c.style.background=color();
			}
}
		
