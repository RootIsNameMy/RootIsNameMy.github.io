var colorButtonRightText="";
var colorButtonLeftText="";
var colorButton="rgba(64,64,64,";

var leftButtonElem=document.getElementById("curriculum-vita-button");
var rightButtonElem=document.getElementById("portfolio-button");

var leftButtonTextElem=document.getElementById("curriculum-vita-h2-button");
var rightButtonTextElem=document.getElementById("portfolio-h2-button");

var opacityLeftButton=0.8;
var opacityRightButton=0.8;

var opacityLeftTrue=false;
var opacityRightTrue=false;

var menuMovingTrue=false;

var homeMenuTrue=true;
var cvMenuTrue=false;
var portfolioMenuTrue=false;

var homeElem=document.getElementById("home");
var cvElem=document.getElementById("curriculum-vita");
var portfolioElem=document.getElementById("portfolio");

var cvPosition=100;
var portfolioPosition=-100

var portfolioScroll=0;
var cvScroll=0;

var opacityTrue=false;
function mouseOverLeft()
{if(buttonPosition!=0)
    {
        return;
    }
 
 if(portfolioMenuTrue)
     {
         colorButtonLeftText=colorHome;
         
     }
 else if(homeMenuTrue)
     {
         colorButtonLeftText=colorCV;
     }
 
    if(!cvMenuTrue)
        {
    opacityLeftTrue=true;
        }
    if(!opacityTrue)
        {
            opacityTrue=true;
        }
}
function mouseOutLeft()
{
    opacityLeftTrue=false;
}

function mouseOverRight()
{
    if(buttonPosition!=0)
    {
        return;
    }
    if(cvMenuTrue)
     {
         colorButtonRightText=colorHome;
         
     }
 else if(homeMenuTrue)
     {
         colorButtonRightText=colorPort;
     }
    if(!portfolioMenuTrue)
        {
    opacityRightTrue=true;
        }
    if(!opacityTrue)
        {
            opacityTrue=true;
        }
}
function mouseOutRight()
{
    opacityRightTrue=false;
}

function MoveLeft()
{
    console.log("left");
    if(menuMovingTrue)
        {
            return;
        }
    opacityLeftTrue=false;
    opacityRightTrue=false;
    
    if(homeMenuTrue)
        {
      $(this).scrollTop(cvScroll);
            menuMovingTrue=true;
            cvMenuTrue=true;
            homeMenuTrue=false;
            leftButtonElem.style.cursor="auto";
            
        }
    else if(portfolioMenuTrue)
        {
           portfolioScroll=$(this).scrollTop();
            menuMovingTrue=true;
           portfolioMenuTrue=false;
            homeMenuTrue=true; 
            rightButtonElem.style.cursor="pointer";
        }
}
function MoveRight()
{
console.log("jas");
    if(menuMovingTrue)
        {
            return;
        }
    opacityRightTrue=false;
    opacityLeftTrue=false;

    if(homeMenuTrue)
        {
            $(this).scrollTop(portfolioScroll);
            menuMovingTrue=true;
            portfolioMenuTrue=true;
            homeMenuTrue=false;
            rightButtonElem.style.cursor="auto";
        }
    else if(cvMenuTrue)
        {
            cvScroll=$(this).scrollTop();
            menuMovingTrue=true;
           cvMenuTrue=false;
            homeMenuTrue=true; 
            leftButtonElem.style.cursor="pointer";
        }
}



window.onload=function(){
    DefaultSettings();
  var jas=  setInterval(frame, timeDelta*1000);
    
};

buttonPosition=-75;

var timeDelta=0.005;
var buffer=1;
var skipFrameImg=true;
function frame()
{
    
    BeginingTrans();
        
     MenuTrans();
    
    
}

function MenuTrans()
{
   if(menuMovingTrue)
         {
             
             if(opacityRightButton>0)
                    {
                        opacityRightButton-=0.01;
                       
                        
                        
                        rightButtonElem.style.background=colorButton+opacityRightButton+")";
                        rightButtonTextElem.style.color=colorButtonRightText+opacityRightButton+")";
                        
                    }
             if(opacityLeftButton>0)
                    {
                        opacityLeftButton-=0.01;
                        leftButtonElem.style.background=colorButton+opacityLeftButton+")";
                        leftButtonTextElem.style.color=colorButtonLeftText+opacityLeftButton+")"; 
                        
                    }
             
                 
             if(homeMenuTrue)
                 {
                     if(portfolioPosition>-100)
                         {
                             var dist=Math.abs(portfolioPosition+100);
                             portfolioPosition-=0.005*(dist+20)*2;
                             
                             if(portfolioPosition<=-100)
                                 {
                                     portfolioPosition=-100;
                                     menuMovingTrue=false;
                                     rightButtonTextElem.innerHTML="p o r t o l i o";
                                     leftButtonTextElem.innerHTML="cv";
                                     leftButtonElem.style.left="0px";
                                     rightButtonElem.style.right="0px";
                                     portfolioScroll=$(this).scrollTop();
                                 }
                             portfolioElem.style.right=portfolioPosition+"%";
                         }
                     else if(cvPosition<100)
                         {
                             var dist=Math.abs(cvPosition-100);
                            cvPosition+=0.005*(dist+20)*2; 
                             
                             if(cvPosition>=100)
                                 {
                                     cvPosition=100;
                                     menuMovingTrue=false;
                                     rightButtonTextElem.innerHTML="p o r t o l i o";
                                     leftButtonTextElem.innerHTML="cv";
                                     leftButtonElem.style.left="0px";
                                     rightButtonElem.style.right="0px";
                                     
                                     
                                 }
                             cvElem.style.right=cvPosition+"%";
                         }
                 }
             else if(cvMenuTrue)
                 {
                     if(cvPosition>0)
                         {
                             var dist=Math.abs(cvPosition);
                            cvPosition-=0.005*(dist+20)*2; 
                             
                             if(cvPosition<=0)
                                 {
                                     cvPosition=0;
                                     menuMovingTrue=false;
                                     rightButtonTextElem.innerHTML="home";
                                     leftButtonElem.style.left="-75px";
                                     
                                 }
                             cvElem.style.right=cvPosition+"%";
                         }
                 }
             else if(portfolioMenuTrue)
                 {
                     if(portfolioPosition<0)
                         {
                             var dist=Math.abs(portfolioPosition);
                             portfolioPosition+=0.005*(dist+20)*2;
                             
                            
                             if(portfolioPosition>=0)
                                 {
                                     portfolioPosition=0;
                                     menuMovingTrue=false;
                                     leftButtonTextElem.innerHTML="home";
                                     rightButtonElem.style.right="-75px";
                                 
                                 }
                              portfolioElem.style.right=portfolioPosition+"%";
                         }
                 }
             if(!menuMovingTrue)
                 {
                     
                 }
         }
    else
        {
        if(opacityRightTrue)
            {
                if(opacityRightButton<1)
                    {
                       opacityRightButton+=0.01;
                        rightButtonElem.style.background=colorButton+opacityRightButton+")";
                        rightButtonTextElem.style.color=colorButtonRightText+opacityRightButton+")";
                    }
            }
        else if(opacityTrue)
            {
                if(opacityRightButton>0)
                    {
                        opacityRightButton-=0.01;
                        rightButtonElem.style.background=colorButton+opacityRightButton+")";
                        rightButtonTextElem.style.color=colorButtonRightText+opacityRightButton+")";
                    }
            }
        if(opacityLeftTrue)
            {
                if(opacityLeftButton<1)
                    {
                       opacityLeftButton+=0.01;
                        leftButtonElem.style.background=colorButton+opacityLeftButton+")";
                        leftButtonTextElem.style.color=colorButtonLeftText+opacityLeftButton+")"; 
                    }
            }
        else if(opacityTrue)
            {
                if(opacityLeftButton>0)
                    {
                        opacityLeftButton-=0.01;
                        leftButtonElem.style.background=colorButton+opacityLeftButton+")";
                        leftButtonTextElem.style.color=colorButtonLeftText+opacityLeftButton+")"; 
                    }
            }
        
        
        } 
}
function BeginingTrans()
{
    if(!opacityTrue)
        {
            if(buffer>0)
                {
                    buffer-=timeDelta;
                }
            
        else  if(!titleTrue)
                    {
                    titleWidth-=timeDelta*(Math.abs(titleWidth)+20)*2;
                     
                        if(titleWidth<=0)
                            {
                                titleWidth=0;
                                
                            }
                        
                         
                        
                        
                        profileTitleElem.style.width=titleWidth+"%";
                        if(titleWidth==0)
                            {
                                titleTrue=true;
                            }
                    }
                
            else      if(!bodyTrue)
                    {
                    bodyWidth-=timeDelta*(Math.abs(bodyWidth)+20)*2;
                     
                        if(bodyWidth<=0)
                            {
                                bodyWidth=0;
                                
                            }
                        
                         
                        
                        
                        profileBodyElem.style.width=bodyWidth+"%";
                        if(bodyWidth==0)
                            {
                                bodyTrue=true;
                            }
                    }
                
            else     if(!fullSizeTrue)
               {
                   if(skipFrameImg)
                               {
                   if(imgWidth<300)
                       {
                           
               imgHeight+=4;
                imgWidth+=4;
                              
                       if(imgWidth>=300)
                           {
                               imgWidth=300;
                           }
                           profileImgElem.style.width=imgWidth+"px";
                       
                       }
                   else if(imgHeight<400)
                       {
                           imgHeight+=2;
                           if(imgHeight>=400)
                           {
                               imgHeight=400;
                               fullSizeTrue=true;
                           }
                       }
                   
                   profileImgElem.style.height=imgHeight+"px";
                                        skipFrameImg=false;
                               }
                           else
                               {
                                  skipFrameImg=true; 
                               }
               }
            else if(shadowDistance<10||shadowHoriz>-2||shadowVertic<2)
                    {
                    shadowDistance+=timeDelta*5;
                        
                        if(shadowDistance>=10)
                            {
                                shadowHoriz-=timeDelta;
                        shadowVertic+=timeDelta;
                                shadowDistance=10;
                            }
                        if(shadowHoriz<=-2)
                            {
                                shadowHoriz=-2;
                            }
                        if(shadowVertic>=2)
                            {
                                shadowVertic=2;
                            }
                        profileImgElem.style.boxShadow=shadowHoriz +"px "+shadowVertic +"px "+shadowDistance+"px black";
                        
                        bodyElem.style.boxShadow=shadowHoriz +"px "+shadowVertic +"px "+shadowDistance+"px black";
                        
                        titleElem.style.boxShadow=shadowHoriz +"px "+shadowVertic +"px "+shadowDistance+"px black";
                    }
            else  if(buttonPosition<0)
                {
                    buttonPosition+=0.005*75;
                    
                    rightButtonElem.style.right=buttonPosition+"px";
                    leftButtonElem.style.left=buttonPosition+"px";
                }
        }
}
function DefaultSettings()
{
    colorButtonLeftText=colorCV;
    colorButtonRightText=colorPort;
    leftButtonTextElem.style.color=colorButtonLeftText+opacityLeftButton+")"; 
    rightButtonTextElem.style.color=colorButtonRightText+opacityRightButton+")"; 
}
var profileImgElem=document.getElementById("profile-img");
var profileBodyElem=document.getElementById("profile-body-back");
var profileTitleElem=document.getElementById("profile-title-back");

var bodyElem=document.getElementById("profile-body");
var titleElem=document.getElementById("profile-title");

var bodyTrue=false;
var bodyWidth=100;

var titleTrue=false;
var titleWidth=100;

var fullSizeTrue=false;
var imgHeight=0;
var imgWidth=0;
var shadowDistance=0;
var shadowHoriz=0;
var shadowVertic=0;
var profileTitleConst="Tilen Koren";
var profileTitleCurrent;

var colorPort="rgba(128,128,255,";
var colorHome="rgba(128,255,128,";
var colorCV="rgba(255,128,128,";