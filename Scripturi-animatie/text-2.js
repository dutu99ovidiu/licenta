var canvasText = document.querySelector("#text-2"),
    input = document.getElementById('txt'),
    ctx2 = canvasText.getContext("2d"),
    mouse2 = {
        x: 0,
        y: 0
    }

input.addEventListener("keyup", function(){
  input = document.getElementById('txt');
  initScene();
}); 

canvasText.width = 900;
canvasText.height = 300;
w = canvasText.width;
h = canvasText.height;

ctx2.font = "normal 4em Brush Script MT, cursive";
ctx2.textAlign = "center";
ctx2.fillText(input.value, canvasText.width / 4, canvasText.height / 3.9);
var radius = 1;

var data32 = new Uint32Array(ctx2.getImageData(0, 0, canvasText.width, canvasText.height).data.buffer);
var txtArr = [];
// loop through each pixel. We will only store the ones with alpha = 255
for (i = 0; i < data32.length; i++) {
    if (data32[i] & 0xff000000) { // check alpha mask
        txtArr.push({ // add new ball if a solid pixel
            x: (i % w) * radius * 2 + radius, // use position and radius to
            y: ((i / w) | 0) * radius * 2 + radius, //  pre-calc final position and size
        });
    }
}

//console.log(alpha);
function Circle(x, y) {
    this.x = Math.random() * canvasText.width;
    this.y = Math.random() * canvasText.height;
    this.dx = Math.random() - 1;
    this.dy = Math.random() - 1;
    this.radius = 1;
    this.dest = {
        x: x,
        y: y
    };
    this.vx = (Math.random() - 0.5) * 5;
    this.vy = (Math.random() - 0.5) * 5;
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random() * 0.05 + 0.95;

}
Circle.prototype.render = function() {
    this.accX = (this.dest.x - this.x) / 1000;
    this.accY = (this.dest.y - this.y) / 1000;
    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;

    this.x += this.vx;
    this.y += this.vy;
    
    ctx2.beginPath();
    ctx2.arc(this.x , this.y , this.radius, 0, Math.PI * 2);
    ctx2.fillStyle = "#ffffe0";
    ctx2.fill();
    var a = this.x - mouse2.x;
    var b = this.y - mouse2.y;

    var distance = Math.sqrt(a * a + b * b);
    if (distance < (radius * 70)) {
        this.accX = (this.x - mouse2.x) / 100;
        this.accY = (this.y - mouse2.y) / 100;
        this.vx += this.accX;
        this.vy += this.accY;
    }
    //this.update = function(){
    //if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
    //this.dx = -this.dx;
    //}
    //if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
    // this.dy = -this.dy;
    //}
    //}
}

function onMouseMove(e) {
    mouse2.x = e.clientX;
    mouse2.y = e.clientY;

}


function initScene() {
  
ctx2.font = "normal 4em Brush Script MT, cursive";
ctx2.textAlign = "center";
ctx2.fillText(input.value, canvasText.width / 4, canvasText.height / 3);
var radius = 1;

var data32 = new Uint32Array(ctx2.getImageData(0, 0, canvasText.width, canvasText.height).data.buffer);
var txtArr = [];
// loop through each pixel. We will only store the ones with alpha = 255
for ( let i = 0; i < data32.length; i++) {
    if (data32[i] & 0xff000000) { // check alpha mask
        txtArr.push({ // add new ball if a solid pixel
            x: (i % w) * radius * 2 + radius, // use position and radius to
            y: ((i / w) | 0) * radius * 2 + radius, //  pre-calc final position and size
        });
    }
}

    ctx2.clearRect(0, 0, canvasText.width, canvasText.height);
    ctx2.globalCompositeOperation = "screen";
    circleArr = [];
    for (var i = 0; i < txtArr.length; i++) {
        circleArr.push(new Circle(txtArr[i].x, txtArr[i].y));
    }
}

var circleArr = [];

function render(a) {
    requestAnimationFrame(render);
    ctx2.clearRect(0, 0, canvasText.width, canvasText.height);
    for (var i = 0; i < txtArr.length; i++) {
        circleArr[i].render();
    }
};
txt.addEventListener("keyup", initScene);
window.addEventListener("resize", initScene);
window.addEventListener("mousemove", onMouseMove);
initScene();
requestAnimationFrame(render);