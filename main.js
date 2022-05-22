var mouseEvent = "empty"; var lastx, lasty; canvas = document.getElementById('myCanvas'); ctx = canvas.getContext("2d")
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if(width < 992)
{document.getElementById("myCanvas").width = new_width;
document.getElementById("myCanvas").height = new_height;
document.body.style.overflow ="hidden";


}
canvas.addEventListener('touchstart', my_touchstart);


function my_touchstart(e)

{
   lastx=e.touches[0].clientX - canvas.offsetLeft;
   lasty=e.touches[0].clientY -canvas.offsetTop;
}canvas.addEventListener('touchmove', my_touchmove);





function my_touchmove(e)

{
currentx=e.touches[0].clientX- canvas.offsetLeft;
currenty=e.touches[0].clientY- canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle ="color black";
    ctx.linewidth =2;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();











lastx=currentx;
lasty=currenty
}

