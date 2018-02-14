
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




var scrollLocations=[document.getElementById("header"),document.getElementById("about-us"),document.getElementById("team"),document.getElementById("projects")];
function MenuNav(menu)// 0-home,,1-about us,2-team,3-projects,4-contact
{
    if(menu==4)
        {
            
            
            
            return;
        }
    var target=scrollLocations[menu];
  window.scroll({ top: target.offsetTop, left: 0, behavior: 'smooth' }); 
}
var fixedMenuTrue=false;
document.addEventListener("scroll", function(e){
    var y=window.pageYOffset;
    if(fixedMenuTrue)
        {
            if(y<100)
                {
                  fixedMenuTrue=false;  
                }
        }
    else
        {
            if(y>=100)
                {
                    fixedMenuTrue=true;
                }
        }
});
var fixedLogoElem=document.getElementById("logo-fixed");
var fixedAboutElem=document.getElementById("about-fixed");
var fixedTeamElem=document.getElementById("team-fixed");
var fixedProjectsElem=document.getElementById("projects-fixed");
var fixedContactElem=document.getElementById("contact-fixed");

var fixedMenuElem=document.getElementById("menu-fixed");


var fixedLogoTop= -30;
var fixedAboutLeft= 0;
var fixedTeamLeft= 0;
var fixedProjectsLeft= 0;
var fixedContactLeft= 0;

var fixedMenuLeft=-30;


var frameElem=setInterval(frame,10);

function frame()
{
    if(fixedMenuTrue)
        {
           if(fixedLogoTop<5)
               {
                   fixedLogoTop+=(Math.abs(5-fixedLogoTop)+1)*0.01*10;
                   if(fixedLogoTop>=5)
                       {
                           fixedLogoTop=5;
                       }
                   fixedLogoElem.style.top=fixedLogoTop+"px";
               }
            //if(fixedMenuLeft<0)
                //{
                   // fixedMenuLeft+=(Math.abs(fixedMenuLeft)+1)*0.01*10;
                   // if(fixedMenuLeft>=0)
                      //  {
                            fixedMenuLeft=0;
                      //  }
                  //  fixedMenuElem.style.left=fixedMenuLeft+"px";
               // }
        }
    else
        {
            if(fixedLogoTop>-30)
               {
                   fixedLogoTop-=(Math.abs(-30-fixedLogoTop)+1)*0.01*10;
                   if(fixedLogoTop<=-30)
                       {
                           fixedLogoTop=-30;
                       }
                   fixedLogoElem.style.top=fixedLogoTop+"px";
               }
           // if(fixedMenuLeft>-30)
               // {
                //    fixedMenuLeft-=(Math.abs(-30-fixedMenuLeft)+1)*0.01*10;
                  //  if(fixedMenuLeft<=-30)
                     //   {
                    //        fixedMenuLeft=-30;
                     //   }
                   // fixedMenuElem.style.left=fixedMenuLeft+"px";
               // }
        }
}
