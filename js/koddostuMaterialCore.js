/**
 * @license koddostuMaterialCore Copyright (c) 2015-2019, Gokhan Mete Erturk.
 * Available via the MIT or new BSD license.
 * see: http://www.koddostu.com for details
 */
var addMulitListener=function(b,a,d){var c=a.split(" ");Array.prototype.forEach.call(b,function(a,b){Array.prototype.forEach.call(c,function(b,c){a.addEventListener(b,d,!1)})})};
addMulitListener(document.querySelectorAll("[kdripple]"),"click touchstart",function(b){var a=this.querySelector(".ripple"),d=b.type;if(null==a&&(a=document.createElement("span"),a.classList.add("ripple"),this.insertBefore(a,this.firstChild),!a.offsetHeight&&!a.offsetWidth)){var c=Math.max(b.target.offsetWidth,b.target.offsetHeight);a.style.width=c+"px";a.style.height=c+"px"}a.classList.remove("animate");if("click"==d)var e=b.pageX,f=b.pageY;else"touchstart"==d&&(e=b.changedTouches[0].pageX,f=b.changedTouches[0].pageY);
e=e-this.offsetLeft-a.offsetWidth/2;f=f-this.offsetTop-a.offsetHeight/2;a.style.top=f+"px";a.style.left=e+"px";a.classList.add("animate")});

var addMulitListener=function(b,a,d){var c=a.split(" ");Array.prototype.forEach.call(b,function(a,b){Array.prototype.forEach.call(c,function(b,c){a.addEventListener(b,d,!1)})})};
addMulitListener(document.querySelectorAll("[kdripplefixed]"),"click touchstart",function(b){var a=this.querySelector(".ripple"),d=b.type;if(null==a&&(a=document.createElement("span"),a.classList.add("ripple"),this.insertBefore(a,this.firstChild),!a.offsetHeight&&!a.offsetWidth)){var c=Math.max(b.target.offsetWidth,b.target.offsetHeight);a.style.width=c+"px";a.style.height=c+"px"}a.classList.remove("animate");if("click"==d)var e=b.pageX,f=b.pageY;else"touchstart"==d&&(e=b.changedTouches[0].pageX,f=b.changedTouches[0].pageY);
e=e-this.offsetLeft-a.offsetWidth/2;f=(f-this.offsetTop-a.offsetHeight/2);var qwe = ((window.pageYOffset || document.scrollTop)  - (document.clientTop || 0));if(isNaN(qwe)){qwe=0;} f=f-qwe;a.style.top=f+"px";a.style.left=e+"px";a.classList.add("animate")});

var addMulitListener=function(b,a,d){var c=a.split(" ");Array.prototype.forEach.call(b,function(a,b){Array.prototype.forEach.call(c,function(b,c){a.addEventListener(b,d,!1)})})};
addMulitListener(document.querySelectorAll("[soripple]"),"click touchstart",function(b){var a=this.querySelector(".ripple"),d=b.type;if(null==a&&(a=document.createElement("span"),a.classList.add("ripple"),this.insertBefore(a,this.firstChild),!a.offsetHeight&&!a.offsetWidth)){var c=Math.max(b.target.offsetWidth,b.target.offsetHeight);a.style.width=c+"px";a.style.height=c+"px"}a.classList.remove("animate");if("click"==d)var e=b.pageX,f=b.pageY;else"touchstart"==d&&(e=b.changedTouches[0].pageX,f=b.changedTouches[0].pageY);
e=e-this.offsetLeft-a.offsetWidth/2;f=(f-this.offsetTop-a.offsetHeight/2);var qwe = ((window.pageYOffset || document.scrollTop)  - (document.clientTop || 0));if(isNaN(qwe)){qwe=0;} f=f-(qwe-(document.getElementById('so').scrollTop));a.style.top=f+"px";a.style.left=e+"px";a.classList.add("animate")});
