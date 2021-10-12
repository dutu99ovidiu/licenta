const tl1 = new TimelineMax({onComplete: () => document.querySelector('body').classList.remove('is-loading')});
tl1.to('.text',1,{y:'0%',stagger:0.25});
tl1.to('.slider',1.5,{y:'-100%',delay:0.5});
tl1.to('.intro',1,{y:'-100%'},'-=1');



const menu = document.querySelector('.hamburger-menu');
const closed = document.querySelector('.closed');
const opened = document.querySelector('.open');

const mobileMenu = document.querySelector('.mobile-menu');

let counter = 0;


menu.addEventListener('click',function(){
 if(counter==0){
 closed.style.opacity=1;
 opened.style.opacity=0;
 mobileMenu.style.visibility="visible";
 document.querySelector('body').classList.add('is-loading');
 counter=1;
 }
 else{
 closed.style.opacity=0;
 opened.style.opacity=1;
 mobileMenu.style.visibility='hidden';
 document.querySelector('body').classList.remove('is-loading');
 counter=0;
 }
})


const tl2 = new TimelineMax({delay:3.5});
tl2.fromTo('#title',2,{opacity:0},{opacity:1});
tl2.fromTo('#description',2,{opacity:0,x:'-100%'},{opacity:1,x:'0%'},'-=1.5');
tl2.fromTo('.btn1',1,{opacity:0},{opacity:1});


const controller = new ScrollMagic.Controller();

const tl3 = new TimelineMax();
tl3.from('#card1',1,{opacity:0,x:'-100%'});
tl3.from('#card2',1,{opacity:0,y:'100%'});
tl3.from('#card3',1,{opacity:0,x:'100%'});

const scene = new ScrollMagic.Scene({
 triggerElement:'.main-section',
 triggerHook:'onLeave',
 duration:2000
})
.setPin('.main-section')
.setTween(tl3)
.addTo(controller);


const btn = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');


btn.addEventListener('mouseover',function(){
  document.getElementById('btn1').style.color='hsl(273, 4%, 51%)';
})

btn.addEventListener('mouseout',function(){
 document.getElementById('btn1').style.color='hsl(0, 0%, 98%)';
})


btn2.addEventListener('mouseover',function(){
  document.getElementById('btn2').style.color='hsl(273, 4%, 51%)';
})

btn2.addEventListener('mouseout',function(){
 document.getElementById('btn2').style.color='hsl(0, 0%, 98%)';
})