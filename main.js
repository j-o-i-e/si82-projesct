
last_touchx = "";
last_touchy = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
linewidth = 2;
if (screen.width < 992) {
    canvas.width = screen.width - 70;
    canvas.height = screen.height - 300
    document.body.style.overflow = "hidden"
}


canvas.addEventListener("touchstart", myts);
function myts(e) {
    color = document.getElementById("p_color").value;
    linewidth = document.getElementById("p_width").value;
    last_touchx = e.touches[0].clientX - canvas.offsetLeft;
    last_touchy = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", mytm);
function mytm(e) {
    ctouchx = e.touches[0].clientX - canvas.offsetLeft;
    ctouchy = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.moveTo(last_touchx, last_touchy);
    ctx.lineTo(ctouchx, ctouchy);
    ctx.stroke()

    last_touchx = ctouchx;
    last_touchy = ctouchy;

}
mouseEvent="";
lastmousex="";
lastmousey="";



canvas.addEventListener("mousedown",mymd);
function mymd(e){
    color=document.getElementById("p_color").value;
    linewidth=document.getElementById("p_width").value;
    mouseEvent="md";
}
canvas.addEventListener("mouseup",mymu);
function mymu(e){
    mouseEvent="mu";
}
canvas.addEventListener("mouseleave",myml);
function myml(e){
    mouseEvent="ml";
}
canvas.addEventListener("mousemove",mymm);
function mymm(e){
    cmousex=e.clientX-canvas.offsetLeft;
    cmousey=e.clientY-canvas.offsetTop;
    if(mouseEvent=="md"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=linewidth;
        ctx.moveTo(lastmousex,lastmousey);
        ctx.lineTo(cmousex,cmousey)
        ctx.stroke()

    }
    lastmousex=cmousex;
    lastmousey=cmousey

}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}