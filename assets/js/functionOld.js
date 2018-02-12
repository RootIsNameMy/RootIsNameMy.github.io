function adjustStyle(width,height) {
  width = parseInt(width);
    height = parseInt(height);
   
  if (width/height < 1) {
    $("#size-stylesheet").attr("href", "../assets/css/front-page-small.css");
  } else if (width/height < 13/9) {
    $("#size-stylesheet").attr("href", "../assets/css/front-page-medium.css");
  } else {
     $("#size-stylesheet").attr("href", "../assets/css/front-page-large.css"); 
  }
}


  $(window).resize(function() {
    adjustStyle($(this).width(),$(this).height());
  });


var siteFile="../";
var pages=[siteFile,siteFile+"programming-page",siteFile+"graphic-design-page",siteFile+"3d-page"];


function goToPage(str)
{
    window.location.assign(pages[str]);
    
}

$(window).scroll(function(){
	
    if (Math.round($(window).scrollTop())+2 > Math.round($(document).height()-$(window).height())){
        ContactOut();
		
    }
     else if($(window).scrollTop()<$(document).height()-$(window).height()){
        ContactIn();
	
    }
    if($(window).scrollTop()==0)
        {
            MenuOpen();
        }
    else
        {
            MenuClose();
        }
   
});
window.onload=function(){
    MenuOpen();
}
var windowOnTop=true;
function MenuOpen()
{
    MenuHover();
    windowOnTop=true;
}
function MenuClose()
{
	var distContact=Math.abs(menuleftPosition-menuContactCurrentPosition);
	if(menuOpenTrue)
		{
	hoveringOverMenu=false;
                   
                    var button1=document.getElementById(idNames[0]);
                    var button2=document.getElementById(idNames[1]);
                    var button3=document.getElementById(idNames[2]);
                     var button4=document.getElementById(idNames[3]);
			SetOpacity("menu-home-op",85);
			SetOpacity("menu-about-op",85);
				SetOpacity("menu-success-op",85);
			SetOpacity("menu-contact-op",85);
			if(button1.style.left=="30px")
				{
					button1.style.left="10px";
					
				}
			else if(button2.style.left=="30px")
				{
					button2.style.left="10px";
					
				}
			else if(button3.style.left=="30px")
				{
					button3.style.left="10px";
				
				}
			else if(button4.style.left=="30px")
				{
					button4.style.left="10px";
					
				}
                    
     menuOpenTrue=false;
    menuleftPosition=-250;
			menuBuffer=0;
		}
	else
		{
			menuBuffer=menuBufferConst;
		}
     
    windowOnTop=false;
}



var id=setInterval(frame,5);

//contact
var contactElem= document.getElementById("contact");
var rightLocatio=-750;
var currentPos=-750;
var contactOutTrue=false;
SetOpacity("logo",90);
function ContactOut()
{
 

rightLocatio=0;
    contactOutTrue=true;
    
}
function ContactIn()
{
   rightLocatio=-750;
    contactOutTrue=false;
}
function ContactButton()
{
    if(contactOutTrue)
        {
            ContactIn();
        }
    else
        {
            ContactOut();
        }
}
function frame()
{
    if(currentPos!=rightLocatio)//contact
        {
            var dir=(rightLocatio-currentPos)/Math.abs(rightLocatio-currentPos);
            var dist=Math.abs(rightLocatio-currentPos);
            currentPos+=dir*0.02*(dist+10);
            if(dist<3)
                {
                    currentPos=rightLocatio;
                }
   
             contactElem.style.right=currentPos+"px";
        }
    // menu
    var distHome=Math.abs(menuleftPosition-menuHomeCurrentPosition);
    var distAbout=Math.abs(menuleftPosition-menuAboutCurrentPosition);
    var distSuccess=Math.abs(menuleftPosition-menuSuccessCurrentPosition);
    var distContact=Math.abs(menuleftPosition-menuContactCurrentPosition);
 var distLogoScale=Math.abs(logoScale-logoMinScale);
   
    if(menuOpenTrue)
        {
            
            if(distLogoScale>0)
               {
               var logoScaleDir=(logoMinScale-logoScale)/Math.abs(logoMinScale-logoScale);
                   logoScale+=logoScaleDir*(distLogoScale+0.1)*0.06;
                   if(distLogoScale<0.02)
                       {
                           logoScale=logoMinScale;
                       }
               distLogoScale=0;
                   logoElem.style.transform= "scale("+logoScale+")";
                   logoElem.style.left="0px";
                    logoElem.style.top="0px";
                   var opacity=(1-distLogoScale)*100
                   
                   
                   SetOpacity("logo",opacity);
               }
               
  else  if(distHome>0)
        {
              var menuHomeDir=(menuleftPosition-menuHomeCurrentPosition)/Math.abs(menuleftPosition-menuHomeCurrentPosition);
             menuHomeCurrentPosition+=menuHomeDir*(distHome+10)*0.06;
            if(distHome<3)
                {
                    menuHomeCurrentPosition=menuleftPosition;
                   
                }
   
             menuHomeElem.style.left=menuHomeCurrentPosition+"px";
        }
    else  if(distAbout>0)
        {
            var menuAboutDir=(menuleftPosition-menuAboutCurrentPosition)/Math.abs(menuleftPosition-menuAboutCurrentPosition);
            
             menuAboutCurrentPosition+=menuAboutDir*(distAbout+10)*0.06;
            if(distAbout<3)
                {
                    menuAboutCurrentPosition=menuleftPosition;
                    
                }
   
             menuAboutElem.style.left=menuAboutCurrentPosition+"px";
        }
     else  if(distSuccess>0)
        {
            var menuSuccesstDir=(menuleftPosition-menuSuccessCurrentPosition)/Math.abs(menuleftPosition-menuSuccessCurrentPosition);
            
             menuSuccessCurrentPosition+=menuSuccesstDir*(distSuccess+10)*0.06;
            if(distSuccess<3)
                {
                    menuSuccessCurrentPosition=menuleftPosition;
                    
                }
   
             menuSuccessElem.style.left=menuSuccessCurrentPosition+"px";
        }
     else  if(distContact>0)
        {
             var menuContactDir=(menuleftPosition-menuContactCurrentPosition)/Math.abs(menuleftPosition-menuContactCurrentPosition);
             menuContactCurrentPosition+=menuContactDir*(distContact+10)*0.06;
            if(distContact<3)
                {
                    menuContactCurrentPosition=menuleftPosition;
                    
                }
   
             menuContactElem.style.left=menuContactCurrentPosition+"px";
        }
        }
    else
        {
            if(distContact>0)
        {
             var menuContactDir=(menuleftPosition-menuContactCurrentPosition)/Math.abs(menuleftPosition-menuContactCurrentPosition);
             menuContactCurrentPosition+=menuContactDir*(distContact+10)*0.06;
            if(distContact<3)
                {
                    menuContactCurrentPosition=menuleftPosition;
                    
                }
   
             menuContactElem.style.left=menuContactCurrentPosition+"px";
        }
            else  if(distSuccess>0)
        {
            var menuSuccesstDir=(menuleftPosition-menuSuccessCurrentPosition)/Math.abs(menuleftPosition-menuSuccessCurrentPosition);
            
             menuSuccessCurrentPosition+=menuSuccesstDir*(distSuccess+10)*0.06;
            if(distSuccess<3)
                {
                    menuSuccessCurrentPosition=menuleftPosition;
                    
                }
   
             menuSuccessElem.style.left=menuSuccessCurrentPosition+"px";
        }
     else if(distAbout>0)
        {
            var menuAboutDir=(menuleftPosition-menuAboutCurrentPosition)/Math.abs(menuleftPosition-menuAboutCurrentPosition);
            
             menuAboutCurrentPosition+=menuAboutDir*(distAbout+10)*0.06;
            if(distAbout<3)
                {
                    menuAboutCurrentPosition=menuleftPosition;
                    
                }
   
             menuAboutElem.style.left=menuAboutCurrentPosition+"px";
        }
     else if(distHome>0)
        {
              var menuHomeDir=(menuleftPosition-menuHomeCurrentPosition)/Math.abs(menuleftPosition-menuHomeCurrentPosition);
             menuHomeCurrentPosition+=menuHomeDir*(distHome+10)*0.06;
            if(distHome<3)
                {
                    menuHomeCurrentPosition=menuleftPosition;
                   
                }
   
             menuHomeElem.style.left=menuHomeCurrentPosition+"px";
        }
            else if(logoScale<1)
               {
               
                   logoScale+=(Math.abs(1-logoScale)+0.1)*0.06;
                   if(logoScale>0.98)
                       {
                           logoScale=1;
                       }
                  
                   logoElem.style.transform= "scale("+logoScale+")";
                   var opacity=(1-Math.abs(logoMinScale-logoScale))*100
                   
                   
                   SetOpacity("logo",opacity);
               }
        }
    
            
            
        


}


var logoElem=document.getElementById("logo");
var menuHomeElem=document.getElementById("menu-home");
var menuAboutElem=document.getElementById("menu-about");
var menuSuccessElem=document.getElementById("menu-success");
var menuContactElem=document.getElementById("menu-contact");

var hoveringOverMenu=false;

SetOpacity("menu-home-op",85);
SetOpacity("menu-about-op",85);
SetOpacity("menu-success-op",85);
SetOpacity("menu-contact-op",85);
SetOpacity("contact-title-img",85);
SetOpacity("contact-title",85);
SetOpacity("contact-content-img",85);
SetOpacity("contact-number",85);
SetOpacity("contact-mail",85);

var logoScale=1;
var logoMinScale=0.9;
var  menuleftPosition=-250;
var menuHomeCurrentPosition=-250;
var menuAboutCurrentPosition=-250;
var menuSuccessCurrentPosition=-250;
var menuContactCurrentPosition=-250;
var menuOpenTrue=false;
var menuBufferConst=2000;//millisecods
var menuBuffer=0;
//Logo

function MenuHover()
{
    menuBuffer=0;
     menuOpenTrue=true;
    menuleftPosition=10;
   
}
function LogoHover()
{
     menuBuffer=0;
    menuOpenTrue=true;
    menuleftPosition=10;
    
   
}




var anotherDirMenu=0;
window.smoothScroll = function(target) {
   if(anotherDirMenu>0)
{
    
    return;
}
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
      
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { 
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
      
    } while (target = target.offsetParent);
anotherDirMenu++;
    scroll = function(c, a, b, i) {
        var dist=Math.abs(c.scrollTop-b);
        i++; if (dist<5||i>100)
        { 
            
                 anotherDirMenu--;
            return;
        }
        
        
        
    
        c.scrollTop =a  + (b - a) / 50 *i ;
        setTimeout(function(){ scroll(c, a, b, i); }, 10);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

var aboutElem=document.getElementById("about");


var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });
alert(results[0]);
    return results;

};

function SetOpacity( imageid, opacity ) {
    var s= document.getElementById(imageid).style;
    s.opacity = ( opacity / 100 );
    s.MozOpacity = ( opacity / 100 );
    s.KhtmlOpacity = ( opacity / 100 );
    s.filter = 'alpha(opacity=' + opacity + ')';
}
var idNamesImg=["menu-home-op","menu-about-op","menu-success-op","menu-contact-op"]
var idNames=["menu-home","menu-about","menu-success","menu-contact"]
function HoverMenu(name1)
{
    MenuHover();
    SetOpacity(idNamesImg[name1],100);
    var button1=document.getElementById(idNames[name1]);
    button1.style.left="30px";
    hoveringOverMenu=true;
    
}
function HoverMenuOff(name1)
{
    if(hoveringOverMenu)
        {
            hoveringOverMenu=false;
    SetOpacity(idNamesImg[name1],85);
    var button1=document.getElementById(idNames[name1]);
    button1.style.left="10px";
}}

var contactTitleImgElem= document.getElementById("contact-title");
var contactContentImgElem= document.getElementById("contact-content");
function HoverContactTitle(status)
{
    
    if(status==0)
        {
           contactTitleImgElem.style.right="20px";
            SetOpacity("contact-title-img",100);
            SetOpacity("contact-title",100);
        }
    else
        {
           contactTitleImgElem.style.right="0px";
            SetOpacity("contact-title-img",85);
            SetOpacity("contact-title",85);
           
        }
}
function HoverContactContent(status)
{
   
     if(status==0)
        {
           contactContentImgElem.style.right="20px";
            SetOpacity("contact-content-img",100);
            SetOpacity("contact-number",100);
            SetOpacity("contact-mail",100);
            
        }
    else
        {
           contactContentImgElem.style.right="0px";
            SetOpacity("contact-content-img",85);
            SetOpacity("contact-number",85);
            SetOpacity("contact-mail",85);
        }

}
var contactInfo=["+38641796919","paul.mcguiness@sciencewriter.si"]
function Clipboard(infoint)
{
    
     var aux = document.createElement("input");
  aux.setAttribute("value", contactInfo[infoint]);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");

  document.body.removeChild(aux);
alert("text-copied");
}
// story constructor






var ourRequest=new XMLHttpRequest();
ourRequest.open('GET',siteFile+'stories.json');
ourRequest.onload= function(){
  var ourData= JSON.parse(ourRequest.responseText);
    var success1Exists=document.getElementById("success");
    var success2Exists=document.getElementById("success2");
    if(success1Exists!=null||success2Exists!=null)
        {
    var successElem;
            var n;
        if(success1Exists!=null)
                {
                    successElem=success1Exists;
                    n=2;
                }
            else
                {
                    successElem=success2Exists;
                    
                    n=ourData.length;
                }
 
var storyElem=document.getElementById("story");
           
var extensionElem=document.getElementById("success-extension");
    
    var currentStoryElem=storyElem;
    var cloneElem=currentStoryElem.cloneNode(true);
    
    for(i=0;i<n;i++)
        {
            if(i>0)
                {
                    currentStoryElem=cloneElem.cloneNode(true);
                    successElem.appendChild(currentStoryElem);
                }
            
            var c=ourData.length-i-1;
     
            var title=document.createTextNode(ourData[c].title);
            var content=document.createTextNode(ourData[c].content);
           var date=document.createTextNode(ourData[c].date);
            var dateElem=currentStoryElem.getElementsByClassName("date")[0];
            dateElem.appendChild(date);
            
            currentStoryElem.getElementsByClassName("title")[0].appendChild(title);
             currentStoryElem.getElementsByClassName("title")[0].appendChild(dateElem);
            currentStoryElem.getElementsByClassName("content")[0].appendChild(content);
            
     
            currentStoryElem.getElementsByClassName("story-img")[0].setAttribute("src",siteFile+"assets/img/story-img/"+ourData[c].img);
            
            if(ourData[c].doc!="none")
                {
                    currentStoryElem.getElementsByClassName("doc-link")[0].setAttribute("href",siteFile+"assets/doc/"+ourData[c].doc);
                    var doc=document.createTextNode("doc");
                    currentStoryElem.getElementsByClassName("doc-link")[0].appendChild(doc);
                }
            if(ourData[c].pdf!="none")
                {
                    currentStoryElem.getElementsByClassName("pdf-link")[0].setAttribute("href",siteFile+"assets/pdf/"+ourData[c].pdf);
                    var pdf=document.createTextNode("pdf");
                    currentStoryElem.getElementsByClassName("pdf-link")[0].appendChild(pdf);
}
            if(ourData[c].view!="none")
                {
                    currentStoryElem.getElementsByClassName("view-link")[0].setAttribute("href",ourData[c].view);
                    var doc=document.createTextNode("view");
                    currentStoryElem.getElementsByClassName("view-link")[0].appendChild(doc);
                }
        }
    successElem.appendChild(extensionElem);
        }
};
ourRequest.send();



