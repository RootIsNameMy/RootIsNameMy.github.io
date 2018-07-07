

var menuOpen=true;


var openingContact=false;
var contactOpen=false;
var closeingContact=false;






//contact
function OpenContact()
{
    

    openingContact=true;
    closeingContact=false;
        
}
function CloseContact()
{
    closeingContact=true;
    openingContact=false;
}




var layoutElem=document.getElementById("layout");

$(window).on('wheel', function(event){

  // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
  if(event.originalEvent.deltaY < 0){
    
             CloseContact();
       
  }
  else {
       
            OpenContact();
        

  }
    
   
    
});


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



$("#head-menu-bottom").mouseover(function(e){
   if(!openingContact&&!contactOpen)
       {
    e.currentTarget.style.color="rgba(239,239,239,1)";
    e.currentTarget.style.background="rgba(20,20,20,1)";
       }
    e.currentTarget.style.height=72+"px";
    footerMiddleDesiredAlpha=1;
    isOverContact=true;
});
$("#head-menu-bottom").mouseout(function(e){
   if(!openingContact&&!contactOpen)
       {
    e.currentTarget.style.color="rgba(239,239,239,0.5)";
    e.currentTarget.style.background="rgba(20,20,20,0.5)";
       }
    e.currentTarget.style.height=60+"px";
    footerMiddleDesiredAlpha=0.5;
    isOverContact=false;
});

var timeDelta=0.005;
var id=setInterval(frame,5);

function frame()
{
    
    windowHeight=window.innerHeight;

     FooterContact();
    
    
    FooterLeftTrans();
    FooterMiddleTrans();
    FooterRightTrans();
    CopiedOpacityTrans();
}



var footerProgress=0;
var footerConst=200;
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
            var footerBottom=-footerConst+footerConst*footerProgress;
            $("#contact").css("bottom",footerBottom+"px");
            
            
            
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
            var footerBottom=-footerConst+footerConst*footerProgress;
            $("#contact").css("bottom",footerBottom+"px");
            
            
        }
}
function Contact()
{
    if(contactOpen||openingContact)
        {
            CloseContact();
        }
    else{
        OpenContact();
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
            if(!isOverContact)
                {
                    $("#head-menu-bottom").css("background","rgba(20,20,20,"+footerMiddleAlpha+")");
                    $("#head-menu-bottom").css("color","rgba(239,239,239,"+footerMiddleAlpha+")");
                }
        }
    $("#footer-middle").css("background","rgba(20,20,20,"+footerMiddleAlpha+")");
    if(contactOpen||openingContact)
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


function sizeCheck() {
    if (phone.matches) { // phone
      footerConst=600;
        if(!contactOpen)
            {
                $("#contact").css("bottom","-600px");
            }
    } else if(tablet.matches) {//tablet
       
     footerConst=400;
        if(contactOpen)
            {
                $("#contact").css("bottom","0px");
            }
        else 
            {
               $("#contact").css("bottom","-400px"); 
            }
    }
    else//deskotp
        {
         footerConst=200;
            if(contactOpen)
            {
                $("#contact").css("bottom","0px");
            }
        else 
            {
               $("#contact").css("bottom","-200px"); 
            }
        }
}

var tablet = window.matchMedia("(max-width: 992px)");
var phone = window.matchMedia("(max-width: 600px)");
sizeCheck(tablet,phone);
tablet.addListener(sizeCheck);
phone.addListener(sizeCheck);



var copyInfo=["studio@afinity-studios.com","info@afinity-studios.com"];
var copiedTrue0=false;
var copiedOpacity0=0;
var copiedTrue1=false;
var copiedOpacity1=0;
function Copy(index)
{
    if(index==0)
        {
            copiedTrue0=true;
            copiedOpacity0=1.1;
        }
    else
        {
            copiedTrue1=true;
            copiedOpacity1=1.1;
        }
  const el = document.createElement('textarea');
  el.value = copyInfo[index];
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  
    
}

function CopiedOpacityTrans()
{
    if(copiedTrue0)
        {
            copiedOpacity0-=timeDelta;
            if(copiedOpacity0<=0)
                {
                    copiedOpacity0=0;
                    copiedTrue0=false;
                    
                }
            var opacity=Math.min(1,copiedOpacity0);
            $("#footer-middle .copy-0").css("opacity",opacity);
        }
    if(copiedTrue1)
        {
            copiedOpacity1-=timeDelta;
            if(copiedOpacity1<=0)
                {
                    copiedOpacity1=0;
                    copiedTrue1=false;
                    
                }
            var opacity=Math.min(1,copiedOpacity1);
            $("#footer-middle .copy-1").css("opacity",opacity);

        }
}

