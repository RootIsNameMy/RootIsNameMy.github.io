var logoColorElem=document.getElementById("logo-color");
var logoColors=["rgba(255,255,255,0.5)","#CA312B","#C1C800","#3ea0b5"]

var logoElem=document.getElementById("logo");
var asElem=document.getElementById("as");

var randomLogo=0;
var randomAS=0;
function HoverLogo(hover)
{
    if(hover)
        {
            
            randomLogo+=Math.floor(Math.random()*2+1);
                    randomLogo=randomLogo%3;
                    if(randomLogo==0)
                        {
                            randomLogo=3;
                        }
            logoColorElem.style.fill= logoColors[randomLogo];
                    //logoElem.style.transform="scale(1.1)";
            
        
        }
    else
        {
            logoColorElem.style.fill= logoColors[0];
            //logoElem.style.transform="scale(1)";
         
        }
}
var asStudioElems=document.getElementsByClassName("studio");
function ASHover(hover)
{
    if(hover)
        {
            
            randomAS+=Math.floor(Math.random()*2+1);
                    randomAS=randomAS%3;
                    if(randomAS==0)
                        {
                            randomAS=3;
                        }
            for(i=0;i<asStudioElems.length;i++)
                {
                    asStudioElems[i].style.fill=logoColors[randomAS];
                }
            
        
        }
        
    else
        {
           for(i=0;i<asStudioElems.length;i++)
                {
                    asStudioElems[i].style.fill=logoColors[0];
                } 
        }
}


function MenuNav(menu)// 0-home,,1-about us,2-team,3-projects,4-contact
{
    pageNav=menu;
  zoom=!zoom;
    
}
var zoom=false;
var blur=true;
var pageNav=0;

document.addEventListener("scroll", function(e){
    var y=window.pageYOffset;
    console.write(document.location.href);
});



var bodyElem=document.getElementById("body");
var bodyBlur=15;
var bodyScale=35;
var bodyContrast=0;

var siteFile="../";
var pages=[siteFile,siteFile+"about_us",siteFile+"success-stories-page"];


function goToPage(str)
{
    window.location.assign(pages[str]);
    
}

var frameElem=setInterval(frame,10);

function frame()
{
    if(blur)
       {
            if(bodyBlur>0||bodyScale>1||bodyContrast<100)
                {
                    bodyBlur-=0.2;
                    bodyScale-=0.5;
                    bodyContrast+=2;
                    if(bodyBlur<=0)
                       {
                           bodyBlur=0;
                           
                       }
                    if(bodyScale<=1)
                        {
                            bodyScale=1;
                        }
                    if(bodyContrast>=100)
                        {
                            bodyContrast=100;
                        }
                    if(bodyScale==1&&bodyBlur==0&&bodyContrast==100)
                        {
                            blur=false;
                        }
                    bodyElem.style.filter="blur("+bodyBlur+"px)";
                    bodyElem.style.transform="scale("+bodyScale+")";
                    bodyElem.style.filter="opacity("+bodyContrast+"%)";
                }
           
       }
   else if(zoom)
       {
           if(bodyBlur<15||bodyContrast>0||bodyScale<35)
               {
                   bodyScale+=0.5;
                   bodyBlur+=0.2;
                   bodyContrast-=2;
                   if(bodyBlur>=15)
                       {
                           bodyBlur=15;
                           
                       }
                   if(bodyContrast<=0)
                       {
                           bodyContrast=0;
                       }
                   if(bodyScale>=35)
                       {
                           bodyScale=35;
                       }
                   if(bodyBlur==15&&bodyContrast==0&&bodyScale==35)
                       {
                           goToPage(pageNav);
                       }
                   bodyElem.style.filter="blur("+bodyBlur+"px)";
                   bodyElem.style.transform="scale("+bodyScale+")";
                   bodyElem.style.filter="opacity("+bodyContrast+"%)";
               }
       }
    
}