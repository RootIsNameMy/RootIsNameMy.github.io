function ScrollLogos(){
	
   if(menuOpen)
   {
       if(headOpen||openingHead)
           {
               openingHead=false;
               
               closeingHead=true;
           }
       if(contactOpen||openingContact)
           {
               openingContact=false;
               closeingContact=true;
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

var page2Elem=document.getElementById("page-2");
var logoLeft2=document.getElementById("logo-left-2");
var logoRight2=document.getElementById("logo-right-2");
var logoLeftFade2=document.getElementById("logo-left-c-2");
var logoRightFade2=document.getElementById("logo-right-c-2");




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

var openingContact=false;
var contactOpen=false;
var closeingContact=false;

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
$("#head-menu-left h1,#head-menu-right h1").mouseover(function(e){
    e.currentTarget.style.color="rgba(239,239,239,1)";
    e.currentTarget.style.background="rgba(20,20,20,1)";
    
});
$("#head-menu-left h1,#head-menu-right h1").mouseout(function(e){
    e.currentTarget.style.color="rgba(239,239,239,0.5)";
    e.currentTarget.style.background="rgba(20,20,20,0.5)";

});

$("#head-menu-left h1").mouseover(function(e){
   
    e.currentTarget.style.paddingLeft=sideOuter+3*Math.sqrt(sideOuter)+"px";
});
$("#head-menu-left h1").mouseout(function(e){
   
    e.currentTarget.style.paddingLeft=sideOuter+"px";
});
$("#head-menu-right h1").mouseover(function(e){
   
    e.currentTarget.style.paddingRight=sideOuter+3*Math.sqrt(sideOuter)+"px";
});
$("#head-menu-right h1").mouseout(function(e){
   
    e.currentTarget.style.paddingRight=sideOuter+"px";
});
$("#head-menu-bottom").mouseover(function(e){
   if(!openingContact&&!contactOpen)
       {
    e.currentTarget.style.color="rgba(239,239,239,1)";
    e.currentTarget.style.background="rgba(20,20,20,1)";
       }
    e.currentTarget.style.height=bottomHeight+2*Math.sqrt(bottomHeight)+"px";
    footerMiddleDesiredAlpha=1;
    isOverContact=true;
});
$("#head-menu-bottom").mouseout(function(e){
   if(!openingContact&&!contactOpen)
       {
    e.currentTarget.style.color="rgba(239,239,239,0.5)";
    e.currentTarget.style.background="rgba(20,20,20,0.5)";
       }
    e.currentTarget.style.height=bottomHeight+"px";
    footerMiddleDesiredAlpha=0.5;
    isOverContact=false;
});



function OpenPage1()
{
        console.debug("page1");

}




function OpenPage2()
{
        console.debug("page2");

}


function OpenContact()
{
    
    menuOpen=true;
    openingContact=true;
        
}
function CloseContact()
{
    closeingContact=true;
    openingContact=false;
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
     if(scrollIndex==3&&scrollLocation==scrollCurrent)
        {
            OpenContact();
        }

  }
    
    scrollIndex=Math.max(0,Math.min(2,scrollIndex));
    
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
                if(!contactOpen&&!openingContact)
                    {
                    OpenContact();
                    }
                else
                    {
                    CloseContact();
                    }
            break;
                      }
     scrollLocation=-scrollIndex*100;
}








$("#footer-left").mouseover(function(){
    footerLeftDesiredAlpha=1;
});
$("#footer-left").mouseout(function(){
   footerLeftDesiredAlpha=0.5;
    
});
$("#footer-middle").mouseover(function(){
    
    footerMiddleDesiredAlpha=1;
});
$("#footer-middle").mouseout(function(){
   footerMiddleDesiredAlpha=0.5;
    
});
$("#footer-right").mouseover(function(){
    footerRightDesiredAlpha=1;
});
$("#footer-right").mouseout(function(){
   footerRightDesiredAlpha=0.5;
    
});



var timeDelta=0.005;
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
     FooterContact();
    
    
    FooterLeftTrans();
    FooterMiddleTrans();
    FooterRightTrans();
}

var footerProgress=0;
function FooterContact()
{
    if(openingContact)
        {
           footerProgress+=timeDelta*2; 
            if(footerProgress>=1)
                {
                    footerProgress=1;
                    openingContact=false;
                    contactOpen=true;
                }
            var footerBottom=-200+200*footerProgress;
            $("#contact").css("bottom",footerBottom+"px");
            
            if(!headOpen&&!openingHead)//contact button
                {
                    var bottomFont=15+30*footerProgress;
                    $("#head-menu-bottom h1").css("font-size",bottomFont+"px");

                    bottomHeight=25+35*footerProgress;
                    var bottomWidth=70+130*footerProgress;
                    $("#head-menu-bottom").css("height",bottomHeight+"px");
                    $("#head-menu-bottom").css("width",bottomWidth+"px");
                }
            
        }
    else if(closeingContact)
        {
            footerProgress-=timeDelta*2;
            if(footerProgress<=0)
                {
                    footerProgress=0;
                    closeingContact=false;
                    contactOpen=false;
                }
            var footerBottom=-200+200*footerProgress;
            $("#contact").css("bottom",footerBottom+"px");
            
            if(!headOpen&&!openingHead||headOpen&&closeingHead)//contact button
                {
                   var bottomFont=15+30*footerProgress;
                    $("#head-menu-bottom h1").css("font-size",bottomFont+"px");

                    bottomHeight=25+35*footerProgress;
                    var bottomWidth=70+130*footerProgress;
                    $("#head-menu-bottom").css("height",bottomHeight+"px");
                    $("#head-menu-bottom").css("width",bottomWidth+"px"); 
                }
        }
}


//footer left
var footerLeftAlpha=0.5;
var footerLeftDesiredAlpha=0.5;
function FooterLeftTrans()
{
    if(footerLeftAlpha==footerLeftDesiredAlpha)
        {
            return;
            
        }
   var dist=footerLeftDesiredAlpha-footerLeftAlpha;
    var dir=dist/Math.abs(dist);
    footerLeftAlpha+=timeDelta*dir;
    if(Math.abs(dist)<0.01)
        {
            footerLeftAlpha=footerLeftDesiredAlpha;
        }
    
    
    $("#footer-left").css("background","rgba(20,20,20,"+footerLeftAlpha+")")
    
    
   $("#footer-left svg > .color").css("fill","rgba(62,161,183,"+footerLeftAlpha+")");//color
   $("#footer-left svg > .white").css("fill","rgba(239,239,239,"+footerLeftAlpha+")");//white
   $("#footer-left div  p").css("color","rgba(239,239,239,"+footerLeftAlpha+")");//white
}
//footer middle




var footerMiddleAlpha=0.5;
var footerMiddleDesiredAlpha=0.5;
var isOverContact=false;
var isOverWorkMail=false;
var isOverInfoMail=false;
function FooterMiddleTrans()
{
    if(footerMiddleAlpha==footerMiddleDesiredAlpha)
        {
            return;
            
        }
    var dist=footerMiddleDesiredAlpha-footerMiddleAlpha;
    var dir=dist/Math.abs(dist);
    footerMiddleAlpha+=timeDelta*dir;
    
    if(Math.abs(dist)<0.01)
        {
            footerMiddleAlpha=footerMiddleDesiredAlpha;
        }
    $("#footer-middle").css("background","rgba(20,20,20,"+footerMiddleAlpha+")");
    if(contactOpen||openingContact||!isOverContact)
        {
    $("#head-menu-bottom").css("background","rgba(20,20,20,"+footerMiddleAlpha+")");
    $("#head-menu-bottom").css("color","rgba(239,239,239,"+footerMiddleAlpha+")");
        }
    
    $("#footer-middle .mail").css("color","rgba(239,239,239,"+footerMiddleAlpha+")");
  
    
    
    $("#footer-middle .title-mail .work").css("color","rgba(62,161,183,"+footerMiddleAlpha+")");
    $("#footer-middle .title-mail .info").css("color","rgba(236,161,55,"+footerMiddleAlpha+")");
    $("#footer-middle .title-mail .work").css("border-bottom","1px solid rgba(62,161,183,"+footerMiddleAlpha+")");
    $("#footer-middle .title-mail .info").css("border-bottom","1px solid rgba(236,161,55,"+footerMiddleAlpha+")");
   
   
}
//footer right
    //facebook
$("#footer-right .facebook").mouseover(function(){
    $("#footer-right .facebook path").css("fill","rgba(60,90,153,"+footerRightAlpha+")");
    $("#footer-right .facebook").css("transform","scale(1.3)");
    isOverFacebook=true;
});
$("#footer-right .facebook").mouseout(function(){
    $("#footer-right .facebook path").css("fill","rgba(239,239,239,"+footerRightAlpha+")");
    $("#footer-right .facebook").css("transform","scale(1)");
    isOverFacebook=false;
});
    //discord
$("#footer-right .discord").mouseover(function(){
    $("#footer-right .discord path").css("fill","rgba(114,137,218,"+footerRightAlpha+")");
    $("#footer-right .discord").css("transform","scale(1.3)");
    isOverDiscord=true;
});
$("#footer-right .discord").mouseout(function(){
    $("#footer-right .discord path").css("fill","rgba(239,239,239,"+footerRightAlpha+")");
    $("#footer-right .discord").css("transform","scale(1)");
    isOverDiscord=false;
});
    //twitch
$("#footer-right .twitch").mouseover(function(){
    $("#footer-right .twitch path,#footer-right .twitch rect").css("fill","rgba(90,62,133,"+footerRightAlpha+")");
    $("#footer-right .twitch").css("transform","scale(1.3)");
    isOverTwitch=true;
});
$("#footer-right .twitch").mouseout(function(){
    $("#footer-right .twitch path,#footer-right .twitch rect").css("fill","rgba(239,239,239,"+footerRightAlpha+")");
        $("#footer-right .twitch").css("transform","scale(1)");

    isOverTwitch=false;
});
    //twitter
$("#footer-right .twitter").mouseover(function(){
    $("#footer-right .twitter path").css("fill","rgba(0,172,237,"+footerRightAlpha+")");
        $("#footer-right .twitter").css("transform","scale(1.3)");

    isOverTwitter=true;
});
$("#footer-right .twitter").mouseout(function(){
    $("#footer-right .twitter path").css("fill","rgba(239,239,239,"+footerRightAlpha+")");
    $("#footer-right .twitter").css("transform","scale(1)");

    isOverTwitter=false;
});
    //youtube
$("#footer-right .youtube").mouseover(function(){
    $("#footer-right .youtube path").css("fill","rgba(255,0,0,"+footerRightAlpha+")");
    $("#footer-right .youtube").css("transform","scale(1.3)");

    isOverYoutube=true;
});
$("#footer-right .youtube").mouseout(function(){
    $("#footer-right .youtube path").css("fill","rgba(239,239,239,"+footerRightAlpha+")");
    $("#footer-right .youtube").css("transform","scale(1)");

    isOverYoutube=false;
});


var isOverFacebook=false;
var isOverDiscord=false;
var isOverTwitch=false;
var isOverTwitter=false;
var isOverYoutube=false;




var footerRightAlpha=0.5;
var footerRightDesiredAlpha=0.5;
function FooterRightTrans()
{
    if(footerRightAlpha==footerRightDesiredAlpha)
        {
            return;
            
        }
    var dist=footerRightDesiredAlpha-footerRightAlpha;
    var dir=dist/Math.abs(dist);
    footerRightAlpha+=timeDelta*dir;
    if(Math.abs(dist)<0.01)
        {
            footerRightAlpha=footerRightDesiredAlpha;
        }
    
    $("#footer-right").css("background","rgba(20,20,20,"+footerRightAlpha+")")
    
    $("#footer-right .title-social a").css("color","rgba(193,200,0,"+footerRightAlpha+")");
    $("#footer-right .title-social a").css("border-bottom","1px solid rgba(193,200,0,"+footerRightAlpha+")");
    
    $("#footer-right svg path,#footer-right svg rect").css("fill","rgba(239,239,239,"+footerRightAlpha+")");
   if(isOverFacebook)
       {
           $("#footer-right .facebook path").css("fill","rgba(60,90,153,"+footerRightAlpha+")");
       }
    else
        {
            $("#footer-right .facebook path").css("fill","rgba(239,239,239,"+footerRightAlpha+")");
        }
    
    
    if(isOverDiscord)
       {
           $("#footer-right .discord path").css("fill","rgba(114,137,218,"+footerRightAlpha+")");
       }
    else
        {
            $("#footer-right .discord path").css("fill","rgba(239,239,239,"+footerRightAlpha+")");
        }
    
    
    if(isOverTwitch)
       {
            $("#footer-right .twitch path,#footer-right .twitch rect").css("fill","rgba(90,62,133,"+footerRightAlpha+")");
       }
    else
        {
            $("#footer-right .twitch path,#footer-right .twitch rect").css("fill","rgba(239,239,239,"+footerRightAlpha+")");
        }
    
    
    if(isOverTwitter)
       {
            $("#footer-right .twitter path").css("fill","rgba(0,172,237,"+footerRightAlpha+")");
       }
    else
        {
            $("#footer-right .twitter path").css("fill","rgba(239,239,239,"+footerRightAlpha+")");
        }
    
    
    if(isOverYoutube)
       {
            $("#footer-right .youtube path").css("fill","rgba(255,0,00,"+footerRightAlpha+")");
       }
    else
        {
            $("#footer-right .youtube path").css("fill","rgba(239,239,239,"+footerRightAlpha+")");
        }
    
    
}
var sideOuter;
var bottomHeight;
function HeadMenu(fadeLogo)
{
    
    
    
    var sideInner=5+5*fadeLogo;
   sideOuter=10+50*fadeLogo;
    var topPadding=1+3*fadeLogo;
    var font=15 + 25*fadeLogo;

    var height=50+150*fadeLogo;
    var bottomPadding=4+6*fadeLogo;

    //left
    $("#head-menu-left div h1").css("padding-left",+sideOuter+"px");
    $("#head-menu-left div h1").css("padding-right",+sideInner+"px");
    $("#head-menu-left div h1").css("padding-top",+topPadding+"px");
    $("#head-menu-left div h1").css("padding-bottom",+bottomPadding+"px");


    $("#head-menu-left h1").css("font-size",font+"px")

    $('#h-1-l').css("bottom",height+"px");

    $('#h-3-l').css("top",height+"px");
    //right

    $("#head-menu-right div h1").css("padding-right",+sideOuter+"px");
    $("#head-menu-right div h1").css("padding-left",+sideInner+"px");
    $("#head-menu-right div h1").css("padding-top",+topPadding+"px");
    $("#head-menu-right div h1").css("padding-bottom",+bottomPadding+"px");


    $("#head-menu-right h1").css("font-size",font+"px")

    $('#h-1-r').css("bottom",height+"px");

    $('#h-3-r').css("top",height+"px");
    //bottom

    if(!closeingContact)
        {
    var bottomFont=15+30*fadeLogo;
    $("#head-menu-bottom h1").css("font-size",bottomFont+"px");
    
    bottomHeight=25+35*fadeLogo;
    var bottomWidth=70+130*fadeLogo;
    $("#head-menu-bottom").css("height",bottomHeight+"px");
    $("#head-menu-bottom").css("width",bottomWidth+"px");
        }



    //$("#head-menu-bottom").css("top",bottom+"vh");
    //$("#head-menu-bottom h1").css("font-size",font+"px");
    //fade

                
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