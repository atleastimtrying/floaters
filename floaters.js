window.addEventListener('load',function(){document.head.innerHTML+='<style>@-webkit-keyframes bob {0% {margin:-10% 0 0 -5%;}50%{margin:0;}100%{margin:-10% 0 0 -5%;}}</style>';var r=function(i){return Math.ceil(Math.random() * i);},i=0,l=10,f=null,z=0;for(i=0;i<l;++i){f=document.createElement('div');z=r(10)+5;f.style.cssText='top: '+r(100)+'%;left:'+r(100)+'%;width:'+z+'px;height:'+z*20+'px;opacity:'+z/15+';-webkit-transform:rotate('+r(360)+'deg);-webkit-filter:blur('+z*0.75+'px);position:fixed;background:black;-webkit-animation: bob '+z*5+'s ease-out infinite;';document.getElementsByTagName('article')[0].appendChild(f);}});