
var logoColorElem=document.getElementById("logo-color");
var logoColors=["#fff","#CA312B","#C1C800","#3ea0b5"]

var logoElem=document.getElementById("logo");
var asElem=document.getElementById("as");

var graphicsElem=document.getElementById("graphics");
var d3Elem=document.getElementById("d3");
var programmingElem=document.getElementById("programming");

var graphicsTop=0;
var d3Top=0;
var programmingTop=0;
var currentGraphicsTop=0;
var currentD3Top=0;
var currentProgrammingTop=0;

var graphicsLeft=-110;
var programmingRight=-110;
var d3OutTop=110;

var frontPageTrue=true;
var graphicTrue=false;
var d3True=false;
var programmingTrue=false;
var changeMenuTrue=false;
var frameDelta=0.01;
var frameElem=setInterval(frame,10);

var titleElem=document.getElementById("title");


var testSpeed=false;
function TestSpeed()
{
    testSpeed=!testSpeed;
    alert("speed changed to "+testSpeed);
}
function OpenMenu(menu)
{
    
    
    if(changeMenuTrue)
        {
            return;
        }
    
    
   
    frontPageTrue=false;
    
    graphicsElem.style.zIndex="1";
    d3Elem.style.zIndex="1";
    programmingElem.style.zIndex="1";
    
    
    if(menu==1)
        {
       if(!graphicTrue)
        {
            graphicTrue=true;
            d3True=false;
            programmingTrue=false;
            graphicsElem.style.zIndex="2";
            changeMenuTrue=true;
            
            graphicsMenuElem.style.borderBottom="1px solid currentColor";
            d3MenuElem.style.borderBottom="none";
            programmingMenuElem.style.borderBottom="none";
            
           graphicsMenuElem.style.color="#ddd";
            d3MenuElem.style.color="#fff";
    programmingMenuElem.style.color="#fff";
            
            
            
           document.title="Afinity studios - graphics";
        }
            else
                {
                    OpenFrontPage();
                }
        }
    else if(menu==2)
        {
            if(!d3True)
        {
            graphicTrue=false;
            d3True=true;
            programmingTrue=false;
            changeMenuTrue=true;
          
            d3Elem.style.zIndex="2";
            
            graphicsMenuElem.style.borderBottom="none";
            d3MenuElem.style.borderBottom="1px solid currentColor";
            programmingMenuElem.style.borderBottom="none";
            
            graphicsMenuElem.style.color="#fff";
           d3MenuElem.style.color="#ddd";
            programmingMenuElem.style.color="#fff";
            
            
             
            document.title="Afinity studios - 3D";
        }
    else
        {
            OpenFrontPage();
        }
}
    else if(menu==3)
        {
            if(!programmingTrue)
        {
            graphicTrue=false;
            d3True=false;
            programmingTrue=true;
            
            programmingElem.style.zIndex="2";
            changeMenuTrue=true;
            
            graphicsMenuElem.style.borderBottom="none";
            d3MenuElem.style.borderBottom="none";
            programmingMenuElem.style.borderBottom="1px solid currentColor";
            
            graphicsMenuElem.style.color="#fff";
    d3MenuElem.style.color="#fff";
            programmingMenuElem.style.color="#ddd";
            
           
            document.title="Afinity studios - programming"
        }
            else
                {
                     OpenFrontPage();
                }
        }
}
function OpenFrontPage()
{
    if(frontPageTrue||changeMenuTrue)
        {
            return;
        }
   
    graphicsMenuElem.style.color="#fff";
    d3MenuElem.style.color="#fff";
    programmingMenuElem.style.color="#fff";
    
    graphicsMenuElem.style.borderBottom="none";
    d3MenuElem.style.borderBottom="none";
            programmingMenuElem.style.borderBottom="none";
    
    changeMenuTrue=true;
    frontPageTrue=true;
    document.title="Afinity studios - home"
}

var graphicsMenuElem=document.getElementById("graphics-menu");
var d3MenuElem=document.getElementById("d3-menu");
var programmingMenuElem=document.getElementById("programming-menu");


function HoverMenu(menu)
{
    if(menu==1||menu==1&&frontPageTrue)
        {
            graphicsMenuElem.style.borderBottom="2px solid currentColor";
        }
    else if(menu==2||menu==2&&frontPageTrue)
        {
            d3MenuElem.style.borderBottom="2px solid currentColor";
        }
    else if(menu==3||menu==3&&frontPageTrue)
        {
           programmingMenuElem.style.borderBottom="2px solid currentColor";
        }
    else if(menu==4)
        {
            if(!graphicTrue||frontPageTrue)
                {
            graphicsMenuElem.style.borderBottom="none";
                }
            else
                {
                    graphicsMenuElem.style.borderBottom="1px solid currentColor";
                }
}   
    else if(menu==5)
        {
            if(!d3True||frontPageTrue)
                {
            d3MenuElem.style.borderBottom="none";
                }
            else
                {
                    d3MenuElem.style.borderBottom="1px solid currentColor";
                }
        }
    else if(menu==6)
        {
           if(!programmingTrue||frontPageTrue)
                {
            programmingMenuElem.style.borderBottom="none";
                }
            else
                {
                    programmingMenuElem.style.borderBottom="1px solid currentColor";
                }
        }
}
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
function ClickLogo()
{
    OpenMenu(randomLogo);
}


var graphicsYElem=document.getElementById("graphics-y")
var d3YElem=document.getElementById("d3-y")
var programmingYElem=document.getElementById("programming-y")


var MOUSE_OVER = false;

var minGraphicsTop;
var minD3Top;
var minProgrammingTop;


document.addEventListener("mousewheel",function(e){
    var delta=-e.deltaY;
    if(graphicTrue)
        {
            graphicsTop+=delta;
        }
    else if(d3True)
        {
            d3Top+=delta;
        }
    else if(programmingTrue)
        {
            programmingTop+=delta;
        }
    
});
function frame()
{
    
    minGraphicsTop=-graphicsYElem.clientHeight+window.innerHeight;
    minD3Top=-d3YElem.clientHeight+window.innerHeight;
    minProgrammingTop=-programmingYElem.clientHeight+window.innerHeight;
    
    
    graphicsTop=Math.min(Math.max(graphicsTop,minGraphicsTop),0);
    d3Top=Math.min(Math.max(d3Top,minD3Top),0);
    programmingTop=Math.min(Math.max(programmingTop,minProgrammingTop),0);
    
    
    
    
    
    
    
    
    
    
    
    
    //menu transfer
    var ySpeed=(window.innerWidth/window.innerHeight);
   
    if(frontPageTrue)
        {
            if(graphicTrue)
        {
            if(graphicsLeft>-110)
        {
            if(testSpeed)
                graphicsLeft-=frameDelta*110;
            else
                graphicsLeft-=frameDelta*(Math.abs(-110-graphicsLeft)*2+10);
            if(graphicsLeft<=-110)
                {
                    graphicsLeft=-110;
                    graphicTrue=false;
                    changeMenuTrue=false;
                    
                }
            graphicsElem.style.left=graphicsLeft+"%";
        }
    
        }
    else if(d3True)
        {
            
                    if(d3OutTop<110)
                        {
                            if(testSpeed)
                                d3OutTop+=frameDelta*110;
                            else
                            d3OutTop+=(Math.abs(110-d3OutTop)*2*ySpeed+10)*frameDelta;
                            if(d3OutTop>=110)
                                {
                                    d3OutTop=110;
                                    d3True=false;
                                    changeMenuTrue=false;
                                    
                                }
                            d3Elem.style.top=d3OutTop+"%";
                        
                        }
            
        }
    else if(programmingTrue)
        {
            
            if(programmingRight>-110)
        {
            if(testSpeed)
                programmingRight-=frameDelta*110;
            else
            programmingRight-=frameDelta*(Math.abs(-110-programmingRight)*2+10);
            if(programmingRight<=-110)
                {
                    programmingRight=-110
                    programmingTrue=false;
                    changeMenuTrue=false;
                }
            programmingElem.style.right=programmingRight+"%";
        }
        }
            
        }
   else if(graphicTrue)
        {
            //scroll
            if(graphicsTop!=currentGraphicsTop)
                {
                    currentGraphicsTop+=(graphicsTop-currentGraphicsTop)*frameDelta*10;
                    if(Math.abs(currentGraphicsTop-graphicsTop)<1)
                        {
                            currentGraphicsTop=graphicsTop;
                        }
                    graphicsYElem.style.top=currentGraphicsTop+"px";
                }
            
            
            
            //menu transfer
            if(graphicsLeft<0)
        {
            if(testSpeed)
                graphicsLeft+=frameDelta*110;
            else
            graphicsLeft+=frameDelta*(Math.abs(0-graphicsLeft)*2+10);
            if(graphicsLeft>=0)
                {
                    graphicsLeft=0
                    d3OutTop=110;
                    d3Elem.style.top=d3OutTop+"%";
                    programmingRight=-110;
                    programmingElem.style.right=programmingRight+"%";
                    changeMenuTrue=false;
                }
            graphicsElem.style.left=graphicsLeft+"%";
        }
    
        }
    else if(d3True)
        {
            //scroll
            if(d3Top!=currentD3Top)
                {
                    currentD3Top+=(d3Top-currentD3Top)*frameDelta*10;
                    if(Math.abs(currentD3Top-d3Top)<1)
                        {
                            currentD3Top=d3Top;
                        }
                    d3YElem.style.top=currentD3Top+"px";
                }
            
            
            
            //menu transfer
                    if(d3OutTop>0)
                        {
                            if(testSpeed)
                                d3OutTop-=frameDelta*110;
                            else
                            d3OutTop-=(Math.abs(0-d3OutTop)*2*ySpeed+10)*frameDelta;
                            if(d3OutTop<=0)
                                {
                                    d3OutTop=0;
                                    
                                    graphicsLeft=-110;
                                    graphicsElem.style.left=graphicsLeft+"%";
                                    programmingRight=-110;
                                    programmingElem.style.right=programmingRight+"%";
                                    changeMenuTrue=false;
                                }
                            d3Elem.style.top=d3OutTop+"%";
                        
                        }
            
        }
    else if(programmingTrue)
        {
            //scroll
            if(programmingTop!=currentProgrammingTop)
                {
                    currentProgrammingTop+=(programmingTop-currentProgrammingTop)*frameDelta*10;
                    if(Math.abs(currentProgrammingTop-programmingTop)<1)
                        {
                            currentProgrammingTop=programmingTop;
                        }
                    programmingYElem.style.top=currentProgrammingTop+"px";
                }
            
            
            
            //menu transfer
            if(programmingRight<0)
        {
            if(testSpeed)
                programmingRight+=frameDelta*110;
            else
            programmingRight+=frameDelta*(Math.abs(0-programmingRight)*2+10);
            if(programmingRight>=0)
                {
                    programmingRight=0
                    d3OutTop=110;
                    d3Elem.style.top=d3OutTop+"%";
                    graphicsLeft=-110;
                    graphicsElem.style.left=graphicsLeft+"%";
                    changeMenuTrue=false;
                }
            programmingElem.style.right=programmingRight+"%";
        }
        }
    
}
