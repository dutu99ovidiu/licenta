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
 mobileMenu.style.opacity=1;
 document.querySelector('body').classList.add('is-loading');
 counter=1;
 }
 else{
 closed.style.opacity=0;
 opened.style.opacity=1;
 mobileMenu.style.opacity=0;
 document.querySelector('body').classList.remove('is-loading');
 counter=0;
 }
})

const controller = new ScrollMagic.Controller();
const tl2 = new TimelineMax();

tl2.from('.container-description',1,{opacity:0});



const scene = new ScrollMagic.Scene({
 triggerElement:'header',
 triggerHook:'onLeave',
 duration:'100%'
})
.setPin('header')
.setTween(tl2)
.addTo(controller);



const controller2 = new ScrollMagic.Controller();
const tl3 = new TimelineMax();

tl3.from('.section-card',1,{opacity:0,x:'100%'});



const scen2 = new ScrollMagic.Scene({
 triggerElement:'.first-section',
 triggerHook:'onLeave',
 duration:'100%'
})
.setPin('.first-section')
.setTween(tl3)
.addTo(controller2);












