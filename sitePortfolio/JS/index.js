var marginY=0;
var destination =0;
var speed =7;
var scroller =null;

function initScroll(elementId){
    destination=document.getElementById(elementId).offsetTop;
        scroller =setTimeout(function(){
            initScroll(elementId);
        },1);
    //console.log(destination);
    marginY=marginY+speed;
        if(marginY >=destination){
            clearTimeout(scroller);
        }
        window.scroll(0,marginY);

}
