//Animatie cerc- Web animations Api
window.onload=function(){
var canvas = document.getElementById("canvas");
var loader = document.querySelector(".loader");
var ctx = canvas.getContext("2d");
var counter=0;


class Circle{
 radian=50;
 rotate=0;
 color="blue";
 link=null;

 constructor(radian,color){
  this.radian=radian;
  this.color=color;
 }

 update(){
  if(this.link!=null){
   this.rotate+=(this.link.rotate-this.rotate)*0.29;
  }

 }
 draw(ctx){
  ctx.beginPath();
  ctx.strokeStyle=this.color;
  ctx.lineWidth=5;
  ctx.arc((canvas.width/2),canvas.height/2,this.radian,Math.PI+this.rotate,this.rotate);
  ctx.stroke();
}}

var circleList=[];
var colorList=["#fdd835","#fdd835","#fdd835","#fdd835","#fdd835"];
var prev=null;


for(var i in colorList){
 var circle = new Circle(50-(i*8),colorList[i]);
 circle.link=prev;
 circleList.push(circle);
 prev=circle;
}


var first=circleList[0];
var last=circleList[circleList.length-1];
var targetRotate=Math.PI*2;

var ceva=setInterval(function(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 if(Math.abs(targetRotate-last.rotate)<0.01){
  for(var i in circleList){
   circleList[i].rotate=0;
  }
 }

 first.rotate+=(targetRotate-first.rotate)*0.1;
for(var i in colorList){
 var circle=circleList[i];
 circle.update();
 circle.draw(ctx);
}
counter++;
//console.log(counter);
if(counter==210){//Se pornesc celalte animatii dupa ce se executa 3 rotatii
 //clearInterval(ceva);
 loader.remove();
 

 //Animatia tilului
 //Separ fiecare litera si o pun intr-un <span>
 //Anime.js
 var textWrapper1 = document.querySelector('.ml6 .letters');
 var nav = document.querySelector('nav');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper1.style.visibility="visible";
nav.style.visibility="visible";
anime.timeline({loop:true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });


  //Animatie info
  //Separ fiecare litera si o pun intr-un <span>
  //Anime.js
 var infoWrapper = document.querySelector('.info-wrapper .litere');
 var info = document.querySelector(".info");
 infoWrapper.innerHTML = infoWrapper.textContent.replace(/\S/g, "<span class='litere'>$&</span>");
info.style.visibility="visible";
anime.timeline({loop:true})
  .add({
    targets: '.info-wrapper .litere',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 850,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.info-wrapper',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });


  //Animatia barei nav
  //Separ fiecare litara din <a>(componenta<li>) intr-u <span>
  //Anime.js
  var textWrapper2 = document.querySelector('.nav1 .link1');
  var textWrapper3= document.querySelector('.nav1 .link2');
  var textWrapper4= document.querySelector('.nav1 .link3');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='link1'>$&</span>");
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='link2'>$&</span>");
textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='link3'>$&</span>");
 var animation1 = anime.timeline({loop:true})
  .add({
    targets: '.nav1 .link1',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.nav1 .link1',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1300000000,
    autoplay:false,
    delay: (el, i) => 10 + 30 * i
  });
  var animation2=anime.timeline({loop:true})
  .add({
    targets: '.nav1 .link2',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 400 + 30 * i
  }).add({
    targets: '.nav1 .link2',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1300000000,
    delay: (el, i) => 10 + 30 * i
  });

  var animation3=anime.timeline({loop:true})
  .add({
    targets: '.nav1 .link3',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 400 + 30 * i
  }).add({
    targets: '.nav1 .link3',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1300000000,
    delay: (el, i) => 10 + 30 * i
  });
  //Nav-bar stuff
  //Vanilla javascript
  let navBar=document.querySelector('#link1');
  let navBar2=document.querySelector('#link2');
  let navBar3=document.querySelector('#link3');
  navBar.addEventListener("mouseover",function(){
     navBar.style.color="#fdd835";
     navBar.style.fontSize=60+"px";
     navBar.style.transition='all 0.8s';
     navBar2.style.fontSize=20+"px";
     navBar2.style.transition='all 0.8s';
     navBar3.style.fontSize=20+"px";
     navBar3.style.transition='all 0.8s';
  });
  navBar.addEventListener("mouseout",function(){
     navBar.style.color="azure";
     navBar.style.fontSize=40+"px";
     navBar.style.transition='all 0.8s';
     navBar2.style.fontSize=40+"px";
     navBar2.style.transition='all 0.8s';
     navBar3.style.fontSize=40+"px";
     navBar3.style.transition='all 0.8s';
  });

  navBar2.addEventListener("mouseover",function(){
     navBar2.style.color="#fdd835";
     navBar2.style.fontSize=60+"px";
     navBar2.style.transition='all 0.8s';
     navBar.style.fontSize=20+"px";
     navBar.style.transition='all 0.8s';
     navBar3.style.fontSize=20+"px";
     navBar3.style.transition='all 0.8s';
  });

  navBar2.addEventListener("mouseout",function(){
     navBar2.style.color="azure";
     navBar2.style.fontSize=40+"px";
     navBar2.style.transition='all 0.8s';
     navBar.style.fontSize=40+"px";
     navBar.style.transition='all 0.8s';
     navBar3.style.fontSize=40+"px";
     navBar3.style.transition='all 0.8s';
  });

   navBar3.addEventListener("mouseover",function(){
     navBar3.style.color="#fdd835";
     navBar3.style.fontSize=60+"px";
     navBar3.style.transition='all 0.8s';
     navBar.style.fontSize=20+"px";
     navBar.style.transition='all 0.8s';
     navBar2.style.fontSize=20+"px";
     navBar2.style.transition='all 0.8s';
    
  });

  navBar3.addEventListener("mouseout",function(){
     navBar3.style.color="azure";
     navBar3.style.fontSize=40+"px";
     navBar3.style.transition='all 0.8s';
     navBar.style.fontSize=40+"px";
     navBar.style.transition='all 0.8s';
     navBar2.style.fontSize=40+"px";
     navBar2.style.transition='all 0.8s';
    
  });
   //Modificare culoare si cursor pt Titlu
  textWrapper1.addEventListener("mouseover",function(){
    textWrapper1.style.color="green";
    textWrapper1.style.cursor="default";
    textWrapper1.style.transition='all 0.8s';
  });

  textWrapper1.addEventListener("mouseout",function(){
    textWrapper1.style.color="azure";
    textWrapper1.style.transition='all 0.8s';
  });
  //Modificare cursor pt 
  infoWrapper.addEventListener("mouseover",function(){
    infoWrapper.style.cursor="default";
  });
}
},20);
}