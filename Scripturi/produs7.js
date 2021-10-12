const tl = new TimelineMax({onComplete: () => document.querySelector('body').classList.remove('is-loading')});
tl.to('.text',1,{y:'0%',stagger:0.25});
tl.to('.slider',1.5,{y:'-110%',delay:0.5});
tl.to('.intro',1,{y:'-110%'},'-=1');



const tl1 = new TimelineMax({delay:3.2});

tl1.fromTo('#logo',1,{opacity:0,y:'-100%'},{opacity:1,y:'0%',ease:Power3.easeOut});
tl1.fromTo('#title',1,{opacity:0},{opacity:1});
tl1.fromTo('#description',1,{opacity:0,x:'-100%'},{opacity:1,x:"0%",ease:Power4.easeOut});
tl1.fromTo('#btn1',1,{opacity:0},{opacity:1});
tl1.fromTo('#btn2',1,{opacity:0},{opacity:1});

//button:Hover
const btn = document.querySelectorAll('.btn');

btn.forEach(function(currentBtn){
 currentBtn.addEventListener('mouseover',function(){
  currentBtn.style.opacity=0.5;
  currentBtn.style.transition='all 0.5s';
 })
 currentBtn.addEventListener('mouseout',function(){
  currentBtn.style.opacity=1;
  currentBtn.transition='all 0.5s';
 })
})
//end button:Hover

//Snippets Scroll Animation
const controller = new ScrollMagic.Controller();

const tl2 = new TimelineMax();
tl2.from('#snippets-p',1,{opacity:0,x:'-100%'});


const scene = new ScrollMagic.Scene({
 triggerElement:'.snippets',
 triggerHook:'onLeave',
 duration:'100%'
})
.setPin('.snippets')
.setTween(tl2)
.addTo(controller);
//

//Hero-1 Scroll Animation

const controller2 = new ScrollMagic.Controller();

const tl3 = new TimelineMax();
tl3.from('#block1',1,{opacity:0,y:'-100%'});
tl3.from('#block2',1,{opacity:0,x:'100%'});
tl3.from('#block3',1,{opacity:0,y:'100%'});


const scene2 = new ScrollMagic.Scene({
 triggerElement:'.hero-1',
 triggerHook:'onLeave',
 duration:2200
})
.setPin('.hero-1')
.setTween(tl3)
.addTo(controller2);

//


//Clipboard Scroll Animation
const controller3 = new ScrollMagic.Controller();

const tl4 = new TimelineMax();
tl4.from('#clipboard-p',1,{opacity:0,x:'100%'});


const scene3 = new ScrollMagic.Scene({
 triggerElement:'.clipboard',
 triggerHook:'onLeave',
 duration:2000
})
.setPin('.clipboard')
.setTween(tl4)
.addTo(controller3);

//


//WorkFlow Scroll Animation

const controller4 = new ScrollMagic.Controller();

const tl5 = new TimelineMax();
tl5.from('#workflow-p',1,{opacity:0,y:'100%'});


const scene4 = new ScrollMagic.Scene({
 triggerElement:'.workflow',
 triggerHook:'onLeave',
 duration:1000
})
.setPin('.workflow')
.setTween(tl5)
.addTo(controller4);

//


//Features Scroll Animation

const controller5 = new ScrollMagic.Controller();

const tl6 = new TimelineMax();

tl6.from('#card1',1,{opacity:0,x:'-100%'});
tl6.from('#card2',1,{opacity:0,y:'100%'});
tl6.from('#card3',1,{opacity:0,x:'100%'});


const scene5 = new ScrollMagic.Scene({
 triggerElement:'.features',
 triggerHook:'onLeave',
 duration:2000
})
.setPin('.features')
.setTween(tl6)
.addTo(controller5);

//