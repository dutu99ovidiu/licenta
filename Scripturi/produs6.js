//gsap.js

function init(){

const buton = document.querySelector('.button-container');
const img = document.querySelector('.img-wrapper');

buton.addEventListener('click',function(){
 img.style.opacity=1;
});

//Sub-text animation
const subtitle1 = document.querySelector('.sub-text1');
const subtitle2 = document.querySelector('.sub-text2');
const subtitle3 = document.querySelector('.sub-text3');

 subtitle1.addEventListener("mouseover",function(){
   subtitle1.style.color="#ff7600";
   subtitle1.animate([
     {transform:'translateX(0%)'},
     {transform:'translateX(10%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

 subtitle1.addEventListener("mouseout",function(){
   subtitle1.style.color="#fff";
   subtitle1.animate([
     {transform:'translateX(10%)'},
     {transform:'translateX(0%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });


 subtitle2.addEventListener("mouseover",function(){
   subtitle2.style.color="#ff7600";
   subtitle2.animate([
     {transform:'translateX(0%)'},
     {transform:'translateX(10%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

 subtitle2.addEventListener("mouseout",function(){
   subtitle2.style.color="#fff";
   subtitle2.animate([
     {transform:'translateX(10%)'},
     {transform:'translateX(0%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });



 subtitle3.addEventListener("mouseover",function(){
   subtitle3.style.color="#ff7600";
   subtitle3.animate([
     {transform:'translateX(0%)'},
     {transform:'translateX(10%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

 subtitle3.addEventListener("mouseout",function(){
   subtitle3.style.color="#fff";
   subtitle3.animate([
     {transform:'translateX(10%)'},
     {transform:'translateX(0%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });
//End-Sub-text animation


//bottom-nav animation

const navItem1 = document.querySelector('.nav-item-1');
const navItem2 = document.querySelector('.nav-item-2');
const navItem3 = document.querySelector('.nav-item-3');


navItem1.addEventListener("mouseover",function(){
   navItem1.style.color="#FF1493";
   navItem1.animate([
     {transform:'translateX(0%)'},
     {transform:'translateX(-30%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

 navItem1.addEventListener('click',function(){
     tl2.restart(true,false);
     nextPage(1);
     scrollSlide=1;
 });

 navItem1.addEventListener("mouseout",function(){
   navItem1.style.color="#fff";
   navItem1.animate([
     {transform:'translateX(-30%)'},
     {transform:'translateX(0%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

 navItem2.addEventListener("mouseover",function(){
   navItem2.style.color="#FF1493";
   navItem2.animate([
     {transform:'translateX(0%)'},
     {transform:'translateX(-30%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

 navItem2.addEventListener('click',function(){
     tl2.restart(true,false);
     nextPage(2);
     scrollSlide=2;
 });

 navItem2.addEventListener("mouseout",function(){
   navItem2.style.color="#fff";
   navItem2.animate([
     {transform:'translateX(-30%)'},
     {transform:'translateX(0%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

 navItem3.addEventListener("mouseover",function(){
   navItem3.style.color="#FF1493";
   navItem3.animate([
     {transform:'translateX(0%)'},
     {transform:'translateX(-30%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

  navItem3.addEventListener('click',function(){
     tl2.restart(true,false);
     nextPage(3);
     scrollSlide=3;
 });

 navItem3.addEventListener("mouseout",function(){
   navItem3.style.color="#fff";
   navItem3.animate([
     {transform:'translateX(-30%)'},
     {transform:'translateX(0%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });


//End bottom-nav animation


//Categories animation

const categorie1 = document.querySelector('.categorie-1');
const categorie2 = document.querySelector('.categorie-2');
const categorie3 = document.querySelector('.categorie-3');


categorie1.addEventListener("mouseover",function(){
   //categorie1.style.color="#FF1493";
   categorie1.style.background="#FF1493";
   categorie1.style.fontSize=2+'rem';
   categorie1.animate([
     {transform:'translateX(-20%)'},
     {transform:'translateX(-40%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

 categorie1.addEventListener("mouseout",function(){
   categorie1.style.background="#ff7600";
   //console.log(categorie1.style.background);
   categorie1.style.color="#fff";
   categorie1.animate([
     {transform:'translateX(-40%)'},
     {transform:'translateX(-20%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });


 categorie2.addEventListener("mouseover",function(){
   //categorie2.style.color="#FF1493";
   categorie2.style.background="#FF1493";
   categorie2.style.fontSize=2+'rem';
   categorie2.animate([
     {transform:'translateX(10%)'},
     {transform:'translateX(30%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

 categorie2.addEventListener("mouseout",function(){
   categorie2.style.background="#ff7600";
   categorie2.style.color="#fff";
   categorie2.animate([
     {transform:'translateX(30%)'},
     {transform:'translateX(10%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });


 categorie3.addEventListener("mouseover",function(){
   //categorie3.style.color="#FF1493";
   categorie3.style.background="#FF1493";
   categorie3.style.fontSize=2+'rem';
   categorie3.animate([
     {transform:'translateX(-10%)'},
     {transform:'translateX(-70%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

 categorie3.addEventListener("mouseout",function(){
   categorie3.style.background="#ff7600";
   categorie3.style.color="#fff";
   categorie3.animate([
     {transform:'translateX(-70%)'},
     {transform:'translateX(-10%)'}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'})
 });

//End Categories Animation


//Social svg animation

const fb = document.querySelector('.bi-facebook');
const insta = document.querySelector('.bi-instagram');
const twitter = document.querySelector('.bi-twitter');
const twitch = document.querySelector('.bi-twitch');

fb.addEventListener('mouseover',function(){
   fb.animate([
    {opacity:1},
    {opacity:0.5}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'});
});

fb.addEventListener('mouseout',function(){
   fb.animate([
    {opacity:0.5},
    {opacity:1}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'});
});

insta.addEventListener('mouseover',function(){
   insta.animate([
    {opacity:1},
    {opacity:0.5}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'});
});

insta.addEventListener('mouseout',function(){
   insta.animate([
    {opacity:0.5},
    {opacity:1}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'});
});

twitter.addEventListener('mouseover',function(){
   twitter.animate([
    {opacity:1},
    {opacity:0.5}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'});
});

twitter.addEventListener('mouseout',function(){
   twitter.animate([
    {opacity:0.5},
    {opacity:1}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'});
});

twitch.addEventListener('mouseover',function(){
   twitch.animate([
    {opacity:1},
    {opacity:0.5}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'});
});

twitch.addEventListener('mouseout',function(){
   twitch.animate([
    {opacity:0.5},
    {opacity:1}
   ],{duration:300,fill:'forwards',easing:'ease-in-out'});
});


//End Social svg anmation

//Button animation

const bt = document.querySelector('.button-container');


bt.addEventListener('mouseover',function(){
  bt.animate([
    {opacity:1},
    {opacity:0.5}
  ],{duration:500,fill:'forwards',easing:'ease-in-out'})
});

bt.addEventListener('mouseout',function(){
  bt.animate([
    {opacity:0.5},
    {opacity:1}
  ],{duration:500,fill:'forwards',easing:'ease-in-out'})
});


//End Button animation


//Web Animations API
 const sageata = document.querySelector('.container-sageata');

 sageata.addEventListener('click',function(){
  tl2.restart(true,false);
  nextPage(3);
  scrollSlide=3;
 })

 sageata.animate([
  {transform:'translateY(0%)'},
  {transform:'translateY(-20%)'}
 ],{duration:500,direction:'alternate-reverse',iterations:Infinity,fill:'forwards'});
//


//sageata pag2

const sageata2 = document.querySelector('.container-sageata2');

 sageata2.addEventListener('click',function(){
  //tl2.restart(true,false);
  //nextPage(2);
  //scrollSlide=2;
 })

 sageata2.animate([
  {transform:'translateY(0%)'},
  {transform:'translateY(-20%)'}
 ],{duration:500,direction:'alternate-reverse',iterations:Infinity,fill:'forwards'});

//


//sageata pag3

const sageata3 = document.querySelector('.container-sageata3');

sageata3.animate([
  {transform:'translateY(0%)'},
  {transform:'translateY(-20%)'}
 ],{duration:500,direction:'alternate-reverse',iterations:Infinity,fill:'forwards'});

//

//sageata pag4

const sageata4 = document.querySelector('.container-sageata4');

sageata4.animate([
  {transform:'translateY(0%)'},
  {transform:'translateY(-20%)'}
 ],{duration:500,direction:'alternate-reverse',iterations:Infinity,fill:'forwards'});

//

//music

let audio = new Audio();
let audio2 = new Audio();
let audio3 = new Audio();
audio.volume=0.1;
audio2.volume=0.1;
audio3.volume=0.1;

function playSong(){
  audio.src='test-audio.mp3';
  audio.play();
}

function pauseSong(){
  audio.pause();
}

function playSong2(){
  audio2.src='test-audio2.mp3';
  audio2.play();
}

function pauseSong2(){
  audio2.pause();
}

function playSong3(){
  audio3.src='test-audio3.mp3';
  audio3.play();
}

function pauseSong3(){
  audio3.pause();
}

const play = document.querySelector('.bi-play-circle');
const pause=document.querySelector('.bi-pause-circle');

const cover = document.querySelector('.cover1');
const cover2 = document.querySelector('.cover2');
const cover3 = document.querySelector('.cover3');

const play2 = document.querySelector('.bi-play-circle2');
const pause2=document.querySelector('.bi-pause-circle2');

const play3 = document.querySelector('.bi-play-circle3');
const pause3=document.querySelector('.bi-pause-circle3');

play.addEventListener('click',function(){
   play.style.opacity=0;
   cover.style.filter='blur(15px)';
   play.style.zIndex=3;
   playSong();
   pause.style.opacity=1;
});

pause.addEventListener('click',function(){
  pause.style.opacity=0;
  cover.style.filter='blur(0px)';
  play.style.opacity=1;
  pauseSong();
   play.style.zIndex=5;
});

play2.addEventListener('click',function(){
   play2.style.opacity=0;
   cover2.style.filter='blur(15px)';
   playSong2();
   play2.style.zIndex=3;
   pause2.style.opacity=1;
});

pause2.addEventListener('click',function(){
  pause2.style.opacity=0;
  cover2.style.filter='blur(0px)';
  pauseSong2();
  play2.style.opacity=1;
   play2.style.zIndex=5;
});

play3.addEventListener('click',function(){
   play3.style.opacity=0;
   cover3.style.filter='blur(15px)';
   playSong3();
   play3.style.zIndex=3;
   pause3.style.opacity=1;
});

pause3.addEventListener('click',function(){
  pause3.style.opacity=0;
  cover3.style.filter='blur(0px)';
  pauseSong3();
  play3.style.opacity=1;
   play3.style.zIndex=5;
});

//

const tl = new TimelineMax({onComplete:()=>document.addEventListener('wheel',throttle(scrollChange,3500))});
 tl.to('.text',1,{y:'0%',stagger:0.25});
 tl.to('.slider',1.5,{y:'-100%',delay:0.5});
 tl.to('.intro',1,{y:'-100%'},'-=1');
 tl.fromTo('.title',2,{opacity:0,y:"-100%"},{opacity:1,y:'0%',ease:Power3.easeOut});
 //tl.fromTo('.circle-3',1,{opacity:0},{opacity:1},'-=1');
 tl.to('.sub-text1',1,{y:'0%',stagger:0.25},'-=1.5');
//tl.fromTo('.circle-2',1,{opacity:0},{opacity:1},'-=0.5');
 tl.to('.sub-text2',1,{y:'0%',stagger:0.25},'-=1');
 tl.to('.sub-text3',1,{y:'0%',stagger:0.25},'-=0.5');
 tl.fromTo('.button-container',1,{opacity:0},{opacity:1});
 tl.to('.button',1,{x:'0%',stagger:0.5});
 tl.fromTo('.nav-item-1',1,{opacity:0,x:'200%'},{opacity:1,x:'0%'},'-=2');
 tl.fromTo('.nav-item-2',1,{opacity:0,x:'200%'},{opacity:1,x:'0%'},'-=1');
 tl.fromTo('.nav-item-3',1,{opacity:0,x:'200%'},{opacity:1,x:'0%'},'-=0.5');
 tl.fromTo('.hero',1,{opacity:0,scale:0},{opacity:1,scale:1.3},'-=2');
 tl.fromTo('.categorie-1',1,{opacity:0,scale:0},{opacity:1,scale:1.3},'-=4');
 tl.fromTo('.categorie-2',1,{opacity:0,scale:0},{opacity:1,scale:1.3},'-=3');
 tl.fromTo('.categorie-3',1,{opacity:0,scale:0},{opacity:1,scale:1.3},'-=2');
 tl.fromTo('.bi-facebook',1,{opacity:0},{opacity:1},'-=3');
 tl.fromTo('.bi-instagram',1,{opacity:0},{opacity:1},'-=2.2');
 tl.fromTo('.bi-twitter',1,{opacity:0},{opacity:1},'-=1.5');
 tl.fromTo('.bi-twitch',1,{opacity:0},{opacity:1},'-=1');
 //tl.fromTo('.circle-1',1,{opacity:0},{opacity:1},'-=0.2');






 //Transition timeline

 const tl2 = new TimelineMax();

 tl2.to('.slider-top',0.2,{opacity:1});
 tl2.to('.slider-bottom',0.1,{opacity:1},'-=0.2')
 tl2.to('.slider-top',3,{x:'-100%'});
 tl2.to('.slider-bottom',3,{x:'100%'},'-=3');

 tl2.pause();



const pages = document.querySelectorAll('section');


let current=0;
let scrollSlide=0;




 function nextPage(pageNumber){
  const nextPage = pages[pageNumber];
  const currentPage=pages[current];


   const tl1 = new TimelineMax({
   onStart:function(){
    pages.forEach(page =>{
      page.getElementsByClassName.pointerEvents="none";
    });
   },
   onComplete:function(){
    pages.forEach(page =>{
      page.getElementsByClassName.pointerEvents="all";
    });
   }
  });
  
  tl1.fromTo(currentPage,1,{opacity:1,pointerEvents:'all'},{opacity:0,pointerEvents:'none'})
     .fromTo(nextPage,1,{opacity:0,pointerEvents:'none'},{opacity:1,pointerEvents:'all'})
  current=pageNumber;
  if(current==1)
  {
    pag2 = new TimelineMax({delay:2});
    pag2.fromTo('.about-title',2,{opacity:0},{opacity:1});
    pag2.fromTo('.about-descriere',2,{opacity:0,scale:0},{opacity:1,scale:1},'-=1');
    pag2.fromTo('.about-img-wrapper',2,{opacity:0,x:'200%'},{opacity:1,x:'0%'},'-=0.5');
    pag2.fromTo('.about-img-wrapper-center',2,{opacity:0,x:'200%'},{opacity:1,x:'0%'},'-=0.5');
    pag2.fromTo('.about-img-wrapper-bottom',2,{opacity:0,x:'200%'},{opacity:1,x:'0%'},'-=0.5');

  }
  if(current==2){
     pag3 = new TimelineMax({delay:2});
     pag3.fromTo('.contact-titlu',2,{opacity:0,x:'-200%'},{opacity:1,x:'0%',ease:Bounce.easeOut});
     pag3.fromTo('#slogan',1,{opacity:0,x:'-200%'},{opacity:1,x:'0%'});
     pag3.fromTo('.phone',1,{opacity:0,x:'-200%'},{opacity:1,x:'0%'});
     pag3.fromTo('.mail',1,{opacity:0,x:'-200%'},{opacity:1,x:'0%'});
     pag3.fromTo('.contact-social-row',1,{opacity:0,x:'-200%'},{opacity:1,x:'0%'});
     pag3.fromTo('.rectangle',1,{width:'0%'},{width:'100%'});
     pag3.fromTo('#form-nume',2,{opacity:0,x:'200%'},{opacity:1,x:'0%',ease:Bounce.easeOut},'-=3');
     pag3.fromTo('#form-email',2,{opacity:0,x:'200%'},{opacity:1,x:'0%',ease:Bounce.easeOut},'-=2');
     pag3.fromTo('#form-mesaj',2,{opacity:0,x:'200%'},{opacity:1,x:'0%',ease:Bounce.easeOut},'-=1');
      pag3.fromTo('#submit',2,{opacity:0,x:'-200%'},{opacity:1,x:'0%',ease:Bounce.easeOut},'-=0.5');
  }
  if(current==3){

    const artist = document.querySelectorAll('.cover-artist');

    pag4= new TimelineMax({delay:2});
    pag4.fromTo('.music-titlu-container',1,{opacity:0,y:'-200%'},{opacity:1,y:'0'});
    pag4.fromTo('.container-song1',1,{opacity:0,x:'-200%'},{opacity:1,x:'0',ease:Bounce.easeOut});
    pag4.fromTo('.container-song2',1,{opacity:0,x:'-200%'},{opacity:1,x:'0',ease:Bounce.easeOut});
    pag4.fromTo('.container-song3',1,{opacity:0,x:'-200%'},{opacity:1,x:'0',ease:Bounce.easeOut});
    pag4.fromTo('.music-circle',1,{opacity:0},{opacity:1});
    pag4.fromTo('.music-circle2',1,{opacity:0},{opacity:1});
    pag4.fromTo('.music-circle3',1,{opacity:0},{opacity:1});
    pag4.fromTo(artist[0],0.5,{opacity:0},{opacity:1});
    pag4.fromTo(artist[1],0.5,{opacity:0},{opacity:1});
    pag4.fromTo(artist[2],0.5,{opacity:0},{opacity:1});
  }
 }
 

 function scrollChange(e){
  if(e.deltaY>0){
   scrollSlide+=1;
  }
  else{
   scrollSlide-=1;
  }
   
   if(scrollSlide>3){
    scrollSlide=0;
   }
   if(scrollSlide<0){
    scrollSlide=3;
   }
   nextPage(scrollSlide);
   tl2.restart(true,false);
 }
}


function throttle(func,limit){
 let inThrottle;
 return function(){
  const args = arguments;
  const context=this;
  if(!inThrottle){
   func.apply(context,args);
   inThrottle=true;
   setTimeout(()=>(inThrottle=false),limit);
  }
 };

}


init();