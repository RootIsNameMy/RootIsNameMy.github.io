
var logoColorElem=document.getElementById("logo-color");
var logoColors=["#eee","#CA312B","#C1C800","#3ea0b5"]

var logoElem=document.getElementById("logo");

var graphicsElem=document.getElementById("graphics");
var d3Elem=document.getElementById("d3");
var programmingElem=document.getElementById("programming");

var graphicsTop=0;
var d3Top=0;
var programmingTop=0;
var currentGraphicsTop=0;
var currentD3Top=110;
var currentProgrammingTop=0;

var graphicsLeft=-110;
var programmingRight=-110;


var frontPageTrue=true;
var graphicTrue=false;
var d3True=false;
var programmingTrue=false;
var changeMenuTrue=false;
var frameDelta=0.01;
var frameElem=setInterval(frame,10);


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
    
    
    if(menu==1&&!graphicTrue)
        {
            graphicTrue=true;
            d3True=false;
            programmingTrue=false;
            graphicsElem.style.zIndex="2";
            changeMenuTrue=true;
            graphicsMenuElem.style.borderBottom="none";
           graphicsMenuElem.style.color="#aaa";
            d3MenuElem.style.color="#eee";
    programmingMenuElem.style.color="#eee";
            graphicsMenuElem.style.cursor="default";
            d3MenuElem.style.cursor="pointer";
    programmingMenuElem.style.cursor="pointer";
        }
    else if(menu==2&&!d3True)
        {
            graphicTrue=false;
            d3True=true;
            programmingTrue=false;
            changeMenuTrue=true;
          
            d3Elem.style.zIndex="2";
            d3MenuElem.style.borderBottom="none";
            graphicsMenuElem.style.color="#eee";
            
           d3MenuElem.style.color="#aaa";
            programmingMenuElem.style.color="#eee";
            graphicsMenuElem.style.cursor="pointer";
            d3MenuElem.style.cursor="default";
            programmingMenuElem.style.cursor="pointer";
        }
    else if(menu==3&&!programmingTrue)
        {
            graphicTrue=false;
            d3True=false;
            programmingTrue=true;
            
            programmingElem.style.zIndex="2";
            changeMenuTrue=true;
            programmingMenuElem.style.borderBottom="none";
            graphicsMenuElem.style.color="#eee";
    d3MenuElem.style.color="#eee";
            programmingMenuElem.style.color="#aaa";
            graphicsMenuElem.style.cursor="default";
            d3MenuElem.style.cursor="pointer";
            programmingMenuElem.style.cursor="default";
        }
}
function OpenFrontPage()
{
    if(frontPageTrue||changeMenuTrue)
        {
            return;
        }
    logoColorElem.style.fill= logoColors[0];
    graphicsMenuElem.style.color="#eee";
    d3MenuElem.style.color="#eee";
    programmingMenuElem.style.color="#eee";
    graphicsMenuElem.style.cursor="pointer";
    d3MenuElem.style.cursor="pointer";
    programmingMenuElem.style.cursor="pointer";
    changeMenuTrue=true;
    frontPageTrue=true;
}

var graphicsMenuElem=document.getElementById("graphics-menu");
var d3MenuElem=document.getElementById("d3-menu");
var programmingMenuElem=document.getElementById("programming-menu");


function HoverMenu(menu)
{
    if(menu==1&&!graphicTrue)
        {
            graphicsMenuElem.style.borderBottom="2px solid currentColor";
        }
    else if(menu==2&&!d3True)
        {
            d3MenuElem.style.borderBottom="2px solid currentColor";
        }
    else if(menu==3&&!programmingTrue)
        {
           programmingMenuElem.style.borderBottom="2px solid currentColor";
        }
    else if(menu==4)
        {
            graphicsMenuElem.style.borderBottom="none";
        }
    else if(menu==5)
        {
            d3MenuElem.style.borderBottom="none";
        }
    else if(menu==6)
        {
           programmingMenuElem.style.borderBottom="none";
        }
}
var random=0;
var mouseOverLogo=false;
function HoverLogo(hover)
{
    if(hover)
        {
            if(!mouseOverLogo)
                {
            random+=Math.floor(Math.random()*2+1);
                    random=random%3;
                    if(random==0)
                        {
                            random=3;
                        }
            logoColorElem.style.fill= logoColors[random];
                    logoElem.style.transform="scale(1.1)";
            mouseOverLogo=true;
        }
        }
    else
        {
            logoColorElem.style.fill= logoColors[0];
            logoElem.style.transform="scale(1)";
            mouseOverLogo=false;
        }
}
function ClickLogo()
{
    OpenMenu(random);
}


function frame()
{
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
            
                    if(currentD3Top<110)
                        {
                            if(testSpeed)
                                currentD3Top+=frameDelta*110;
                            else
                            currentD3Top+=(Math.abs(110-currentD3Top)*2+10)*frameDelta;
                            if(currentD3Top>=110)
                                {
                                    currentD3Top=110;
                                    d3True=false;
                                    changeMenuTrue=false;
                                    
                                }
                            d3Elem.style.top=currentD3Top+"%";
                        
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
            if(graphicsLeft<0)
        {
            if(testSpeed)
                graphicsLeft+=frameDelta*110;
            else
            graphicsLeft+=frameDelta*(Math.abs(0-graphicsLeft)*2+10);
            if(graphicsLeft>=0)
                {
                    graphicsLeft=0
                    currentD3Top=110;
                    d3Elem.style.top=currentD3Top+"%";
                    programmingRight=-110;
                    programmingElem.style.right=programmingRight+"%";
                    changeMenuTrue=false;
                }
            graphicsElem.style.left=graphicsLeft+"%";
        }
    
        }
    else if(d3True)
        {
            
                    if(currentD3Top>d3Top)
                        {
                            if(testSpeed)
                                currentD3Top-=frameDelta*110;
                            else
                            currentD3Top-=(Math.abs(d3Top-currentD3Top)*2+10)*frameDelta;
                            if(currentD3Top<=d3Top)
                                {
                                    currentD3Top=d3Top;
                                    
                                    graphicsLeft=-110;
                                    graphicsElem.style.left=graphicsLeft+"%";
                                    programmingRight=-110;
                                    programmingElem.style.right=programmingRight+"%";
                                    changeMenuTrue=false;
                                }
                            d3Elem.style.top=currentD3Top+"%";
                        
                        }
            
        }
    else if(programmingTrue)
        {
            if(programmingRight<0)
        {
            if(testSpeed)
                programmingRight+=frameDelta*110;
            else
            programmingRight+=frameDelta*(Math.abs(0-programmingRight)*2+10);
            if(programmingRight>=0)
                {
                    programmingRight=0
                    currentD3Top=110;
                    d3Elem.style.top=currentD3Top+"%";
                    graphicsLeft=-110;
                    graphicsElem.style.left=graphicsLeft+"%";
                    changeMenuTrue=false;
                }
            programmingElem.style.right=programmingRight+"%";
        }
        }
    
}