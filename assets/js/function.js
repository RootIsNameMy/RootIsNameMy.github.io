$(window).scroll(function(){
	
    if (Math.round($(window).scrollTop())+2 > Math.round($(document).height()-$(window).height())){
     
		
    }
     else if($(window).scrollTop()<$(document).height()-$(window).height()){
       
	
    }
   
    var h=window.innerHeight;
    
    
    var scrollVar=$(window).scrollTop();
    var visableLogo=0;
    var treshold=50;
    var declineLogo=0;
    
    
    if(scrollVar>visableLogo+treshold)
        {
            declineLogo=Math.abs(scrollVar-visableLogo-treshold);
        }
    else if(scrollVar<visableLogo-treshold)
        {
            declineLogo=Math.abs(scrollVar-visableLogo+treshold);
        }
    
    if(declineLogo<h/2)
        {
            
        
    logoRight0.style.left=declineLogo+"px";
    logoLeft0.style.right=declineLogo+"px";
    
    var fadeLogo=1-Math.max(0,Math.min(declineLogo*3/h,1));
    logoRightFade0.style.fill="rgba(255,255,255,"+fadeLogo+")";
    logoLeftFade0.style.fill="rgba(255,255,255,"+fadeLogo+")";
        }
    var declineLogo=0;
    visableLogo+=h;
    if(scrollVar>visableLogo+treshold)
        {
            declineLogo=Math.abs(scrollVar-visableLogo-treshold);
        }
    else if(scrollVar<visableLogo-treshold)
        {
            declineLogo=Math.abs(scrollVar-visableLogo+treshold);
        }
     if(declineLogo<h/2)
        {
    logoRight1.style.left=declineLogo+"px";
    logoLeft1.style.right=declineLogo+"px";
    
     fadeLogo=1-Math.max(0,Math.min(declineLogo*3/h,1));
    logoRightFade1.style.fill="rgba(255,255,255,"+fadeLogo+")";
    logoLeftFade1.style.fill=blueRGB+fadeLogo+")";
        }
    var declineLogo=0;
    visableLogo+=h;
    if(scrollVar>visableLogo+treshold)
        {
            declineLogo=Math.abs(scrollVar-visableLogo-treshold);
        }
    else if(scrollVar<visableLogo-treshold)
        {
            declineLogo=Math.abs(scrollVar-visableLogo+treshold);
        }
     if(declineLogo<h/2)
        {
    logoRight2.style.left=declineLogo+"px";
    logoLeft2.style.right=declineLogo+"px";
    
     fadeLogo=1-Math.max(0,Math.min(declineLogo*3/h,1));
    logoRightFade2.style.fill="rgba(255,255,255,"+fadeLogo+")";
    logoLeftFade2.style.fill="rgba(236,161,55,"+fadeLogo+")";
        }
    var declineLogo=0;
    visableLogo+=h;
    if(scrollVar>visableLogo+treshold)
        {
            declineLogo=Math.abs(scrollVar-visableLogo-treshold);
        }
    else if(scrollVar<visableLogo-treshold)
        {
            declineLogo=Math.abs(scrollVar-visableLogo+treshold);
        }
     if(declineLogo<h/2)
        {
    logoRight3.style.left=declineLogo+"px";
    logoLeft3.style.right=declineLogo+"px";
    
     fadeLogo=1-Math.max(0,Math.min(declineLogo*3/h,1));
    logoRightFade3.style.fill="rgba(255,255,255,"+fadeLogo+")";
    logoLeftFade3.style.fill="rgba(120,255,120,"+fadeLogo+")";
        }
});
var logoColor="#3ea1b7";
var blueRGB="rgba(62,161,183,";
var headerElem=document.getElementById("header");
var logoLeft0=document.getElementById("logo-left");
var logoRight0=document.getElementById("logo-right");
var logoLeftFade0=document.getElementById("logo-color");
var logoRightFade0=document.getElementById("logo-fade");

var logoLeft1=document.getElementById("logo-left-1");
var logoRight1=document.getElementById("logo-right-1");
var logoLeftFade1=document.getElementById("logo-left-c-1");
var logoRightFade1=document.getElementById("logo-right-c-1");

var logoLeft2=document.getElementById("logo-left-2");
var logoRight2=document.getElementById("logo-right-2");
var logoLeftFade2=document.getElementById("logo-left-c-2");
var logoRightFade2=document.getElementById("logo-right-c-2");

var logoLeft3=document.getElementById("logo-left-3");
var logoRight3=document.getElementById("logo-right-3");
var logoLeftFade3=document.getElementById("logo-left-c-3");
var logoRightFade3=document.getElementById("logo-right-c-3");






function OpenHead()
{
    
}
function CloseHead()
{
    
}



function OpenPage1()
{
    
}
function ClosePage1()
{
    
}



function OpenPage2()
{
    
}
function ClosePage2()
{
    
}



function OpenPage3()
{
    
}
function ClosePage3()
{
    
}




var id=setInterval(frame,5);
function frame()
{
    
}

function lerpColor(a, b, amount) { 

    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);

    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}