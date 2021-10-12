//Web Animations API
//Balls Aniamtion
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
  x: canvas.width,
  y: canvas.height/2,
  vx:10,
  //vy:5,
  radius:25,
  color: 'white',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

var ball2={
 x:canvas.width-650,
 y:canvas.height/2,
 vx:10,
 radius:25,
 color:'white',
 draw: function(){
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fillStyle=this.color;
  ctx.fill();
 }
};

function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 ball2.draw();
 ball.draw();
 ball.x+=ball.vx;
 ball2.x-=ball2.vx;
 //ball.y+=ball.vy;
 if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
if (ball2.y + ball2.vy > canvas.height || ball2.y + ball2.vy < 0) {
  ball2.vy = -ball2.vy;
}
if (ball2.x - ball2.vx > canvas.width || ball2.x - ball2.vx < 0) {
  ball2.vx =-ball2.vx;
}
 raf= window.requestAnimationFrame(draw);
}

/*canvas.addEventListener('mouseover', function(e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});*/

raf=window.requestAnimationFrame(draw);
ball.draw();