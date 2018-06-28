function ScrollLogos(){
	
   if(menuOpen)
   {
       if(headOpen||openingHead)
           {
               openingHead=false;
               headOpen=false;
               closeingHead=true;
           }
    
   }
    
    
   
    var h=window.innerHeight;
    var scrollH=-scrollCurrent*h/100;
    
    
    var visableLogo=0;
    var treshold=0;
    var declineLogo=0;
    
    
    if(scrollH>visableLogo+treshold)
        {
            declineLogo=Math.abs(scrollH-visableLogo-treshold);
        }
    else if(scrollH<visableLogo-treshold)
        {
            declineLogo=Math.abs(scrollH-visableLogo+treshold);
        }
    else if(scrollCurrent==scrollLocation)
        {
            OpenHead();
        }
    
    if(declineLogo<h*2/3)
        {
            
        
    logoRight0.style.left=declineLogo+"px";
    logoLeft0.style.right=declineLogo+"px";
    
            
            
    
            
    var fadeLogo=1-Math.max(0,Math.min(declineLogo*3/h,1));
      
    logoRightFade0.style.fill="rgba(255,255,255,"+fadeLogo+")";
    logoLeftFade0.style.fill="rgba(255,255,255,"+fadeLogo+")";
            
            
            //menu
            if(closeingHead)
                {
                    
                    if(fadeLogo==0)//closed
                        {
                            ClosedHead();
                        }
                    
                    if(openingProgress>fadeLogo)
                        {
                HeadMenu(fadeLogo);
                        }
                }
        }
    var progress;
    var declineLogo=0;
    visableLogo+=h;
    if(scrollH>visableLogo+treshold)
        {
            declineLogo=Math.abs(scrollH-visableLogo-treshold);
        }
    else if(scrollH<visableLogo-treshold)
        {
            declineLogo=Math.abs(scrollH-visableLogo+treshold);
        }
    else if(scrollCurrent==scrollLocation)
        {
            OpenPage1();
        }
    
     if(declineLogo<h*2/3)
        {
    logoRight1.style.left=declineLogo+"px";
    logoLeft1.style.right=declineLogo+"px";
    
     fadeLogo=Math.max(0,Math.min(0.5-declineLogo*3/(2*h),0.5));
     progress=1-Math.max(0,Math.min(declineLogo*3/h,1));
    logoRightFade1.style.fill="rgba(255,255,255,"+fadeLogo+")";
    logoLeftFade1.style.fill=blueRGB+fadeLogo+")";
            
           
            
        }
    var declineLogo=0;
    visableLogo+=h;
    if(scrollH>visableLogo+treshold)
        {
            declineLogo=Math.abs(scrollH-visableLogo-treshold);
        }
    else if(scrollH<visableLogo-treshold)
        {
            declineLogo=Math.abs(scrollH-visableLogo+treshold);
        }
    else if(scrollCurrent==scrollLocation)
        {
            OpenPage2();
        }
    
     if(declineLogo<h*2/3)
        {
    logoRight2.style.left=declineLogo+"px";
    logoLeft2.style.right=declineLogo+"px";
   fadeLogo=Math.max(0,Math.min(0.5-declineLogo*3/(2*h),0.5));
     progress=1-Math.max(0,Math.min(declineLogo*3/h,1));
    logoRightFade2.style.fill="rgba(255,255,255,"+fadeLogo+")";
    logoLeftFade2.style.fill="rgba(236,161,55,"+fadeLogo+")";
        }
    var declineLogo=0;
    visableLogo+=h;
    if(scrollH>visableLogo+treshold)
        {
            declineLogo=Math.abs(scrollH-visableLogo-treshold);
        }
    else if(scrollH<visableLogo-treshold)
        {
            declineLogo=Math.abs(scrollH-visableLogo+treshold);
        }
    else if(scrollCurrent==scrollLocation)
        {
            OpenPage3();
        }
    
     if(declineLogo<h*2/3)
        {
    logoRight3.style.left=declineLogo+"px";
    logoLeft3.style.right=declineLogo+"px";
    
     fadeLogo=Math.max(0,Math.min(0.5-declineLogo*3/(2*h),0.5));
     progress=1-Math.max(0,Math.min(declineLogo*3/h,1));
    logoRightFade3.style.fill="rgba(255,255,255,"+fadeLogo+")";
    logoLeftFade3.style.fill="rgba(120,255,120,"+fadeLogo+")";
        }
}

var scrollVar=0;
var scrollCurrent=0;
var scrollLocation=0;
var scrollIndex=0;

 var windowHeight;
var logoColor="#3ea1b7";
var blueRGB="rgba(62,161,183,";
var headerElem=document.getElementById("header");
var logoLeft0=document.getElementById("logo-left");
var logoRight0=document.getElementById("logo-right");
var logoLeftFade0=document.getElementById("logo-color");
var logoRightFade0=document.getElementById("logo-fade");

var headMenuLeft=document.getElementById("head-menu-left");
var headMenuRight=document.getElementById("head-menu-right");


var page1Elem=document.getElementById("page-1");
var logoLeft1=document.getElementById("logo-left-1");
var logoRight1=document.getElementById("logo-right-1");
var logoLeftFade1=document.getElementById("logo-left-c-1");
var logoRightFade1=document.getElementById("logo-right-c-1");

var page1Elem=document.getElementById("page-2");
var logoLeft2=document.getElementById("logo-left-2");
var logoRight2=document.getElementById("logo-right-2");
var logoLeftFade2=document.getElementById("logo-left-c-2");
var logoRightFade2=document.getElementById("logo-right-c-2");

var page1Elem=document.getElementById("page-3");
var logoLeft3=document.getElementById("logo-left-3");
var logoRight3=document.getElementById("logo-right-3");
var logoLeftFade3=document.getElementById("logo-left-c-3");
var logoRightFade3=document.getElementById("logo-right-c-3");


var menuOpen=true;

var openingProgress=0;//to 1

var delay=400;
var currentDelay=0;

var openingHead=true;
var headOpen=false;
var closeingHead=false;

var openingPage1=false;
var page1Open=false;
var closeingPage1=false;



function OpenHead()
{
  
    menuOpen=true;
    openingHead=true;
    console.debug("head");
}
function ClosedHead()
{
    closeingHead=false;
    headOpen=false;
    currentDelay=0;
    openingProgress=0;
    console.debug("closed");
    
    
}
$("#head-menu-left h1,#head-menu-bottom h1,#head-menu-right h1").mouseover(function(e){
    if(headOpen)
        {
    e.currentTarget.style.textDecoration="underline";
    
        }
});
$("#head-menu-left h1,#head-menu-bottom h1,#head-menu-right h1").mouseout(function(e){
       e.currentTarget.style.textDecoration="none";

});


function OpenPage1()
{
        console.debug("page1");

}




function OpenPage2()
{
        console.debug("page2");

}




function OpenPage3()
{
        console.debug("page3");

}


function CloseMenu()
{
    //head
    headMenuLeft.style.color="rgba(255,255,255,0)";
    headMenuRight.style.color="rgba(255,255,255,0)";
    closeingHead=false;
    headOpen=false;
}

var layoutElem=document.getElementById("layout");

$(window).on('wheel', function(event){

  // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
  if(event.originalEvent.deltaY < 0){
    scrollIndex--;
     
  }
  else {
        scrollIndex++;
     

  }
    scrollIndex=Math.max(0,Math.min(3,scrollIndex));
    
    scrollLocation=-scrollIndex*100;
    
});
//buttons
function MenuButton(buttonIndex)//1-home 2-about 3-team 4-games 5-modles 6-graphics 7-contact
{
    switch(buttonIndex){
            case 1://home
                scrollIndex=0;
               
            break;
            case 2://about
                scrollIndex=1;
            break;
            case 3://team
                scrollIndex=1;

            break;
            case 4://games
                scrollIndex=2;
            break;
            case 5://models
                scrollIndex=2;
            break;
            case 6://graphics
                scrollIndex=2;
            break;
            case 7://contact
                
            break;
                      }
     scrollLocation=-scrollIndex*100;
}









var id=setInterval(frame,5);

function frame()
{
    
    windowHeight=window.innerHeight;
    if(scrollCurrent!=scrollLocation)
        {
            var dif=scrollLocation-scrollCurrent;
            var dir=dif/Math.abs(dif);
            scrollCurrent+=1*dir;
            if(Math.abs(dif)<0.1)
                {
                    CloseMenu();
                    scrollCurrent=scrollLocation;
                }
            
            layoutElem.style.top=scrollCurrent+"vh";
            ScrollLogos();
        }
   if(openingHead)
       {
           
          
           
           openingProgress+=0.01;
           if(openingProgress>=1)
               {
                   openingProgress=1;
                   openingHead=false;
                   headOpen=true;

               }
               HeadMenu(openingProgress);
               
       }
    
    
}

function HeadMenu(fadeLogo)
{
    
    
    
    
    var sideTop=0.5+29.5*fadeLogo;
                var sideMiddle=0.5+24.5*fadeLogo;
                var sideBottom=0.5+30.5*fadeLogo;

                var font=25 + 15*fadeLogo;

                var height=100+100*fadeLogo;
                var heightBottom=100+150*fadeLogo;

                //left
                $('#h-1-l').css("left",sideTop+"vw");
                $('#h-2-l').css("left",sideMiddle+"vw");
                $('#h-3-l').css("left",sideBottom+"vw");

                $("#head-menu-left h1").css("font-size",font+"px")

                $('#h-1-l').css("bottom",height+"px");

                $('#h-3-l').css("top",heightBottom+"px");
                //right

                $('#h-1-r').css("right",sideTop+"vw");
                $('#h-2-r').css("right",sideMiddle+"vw");
                $('#h-3-r').css("right",sideBottom+"vw");

                $("#head-menu-right h1").css("font-size",font+"px")

                $('#h-1-r').css("bottom",height+"px");

                $('#h-3-r').css("top",heightBottom+"px");
                //bottom

                var bottom=-1+26*fadeLogo;


                $("#head-menu-bottom").css("bottom",bottom+"vh");
                $("#head-menu-bottom h1").css("font-size",font+"px");
                //fade
                var fade=0.5+0.5*fadeLogo;
                $("#head-menu-left").css("color","rgba(239,239,239,"+fade+")");
                $("#head-menu-right").css("color","rgba(239,239,239,"+fade+")");
                $("#head-menu-bottom").css("color","rgba(239,239,239,"+fade+")");
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