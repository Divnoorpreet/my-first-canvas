var canvas=document.getElementById("myCanvas");
var cts=canvas.getContext("2d");
var mouseevent="";
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
   
    mouseevent="mousedown";
    
}


canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouseevent="mouseup";
}


canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouseevent="mouseleave";
}


canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    if (mouseevent=="mousedown") {
        color=document.getElementById("color").value;
        width=document.getElementById("width").value;
        cts.beginPath();
        cts.strokeStyle=color;
        cts.lineWidth=width;
        cts.moveTo(lx,ly);
        cts.lineTo(x,y);
        cts.stroke();
    }
    lx=x;
    ly=y;
}




function clearscreen() { 
    cts.clearRect(0, 0, canvas.width, canvas.height);
 }