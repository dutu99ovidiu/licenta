function init(){

//Anime.js
var indrumare={};
indrumare.opacityIn=[0,1];
indrumare.scaleIn=[0.2,1];
indrumare.scaleOut=3;
indrumare.durationIn=800;
indrumare.durationOut=600;
indrumare.delay=500;

anime.timeline({loop:true})
.add({
 targets:'.indrumare .litere-1',
 opacity:indrumare.opacityIn,
 scale:indrumare.scaleIn,
 duration:indrumare.durationIn
})
.add({
  targets:'.indrumare .litere-1',
  opacity:0,
  scale:indrumare.scaleOut,
  duration:indrumare.durationOut,
  easing:"easeInExpo",
  delay:indrumare.delay
})
.add({
 targets:'.indrumare .litere-2',
 opacity:indrumare.opacityIn,
 scale:indrumare.scaleIn,
 duration:indrumare.durationIn
})
.add({
 targets:'.indrumare .litere-2',
  opacity:0,
  scale:indrumare.scaleOut,
  duration:indrumare.durationOut,
  easing:"easeInExpo",
  delay:indrumare.delay
})
.add({
 targets:'.indrumare .litere-3',
 opacity:indrumare.opacityIn,
 scale:indrumare.scaleIn,
 duration:indrumare.durationIn
})
.add({
  targets:'.indrumare .litere-3',
  opacity:0,
  scale:indrumare.scaleOut,
  duration:indrumare.durationOut,
  easing:"easeInExpo",
  delay:indrumare.delay
})
.add({
 targets:'.indrumare',
 opacity:0,
 duration:500,
 delay:100
});

//Gsap.js
var tl1 = new TimelineMax({onComplete: () => document.querySelector('body').classList.remove('is-loading')});

tl1.to('.text',1,{y:'0%',stagger:0.25});
tl1.to('.slider',1.5,{y:'-100%',delay:0.5});
tl1.to('.intro',1,{y:'-100%'},'-=1');

//Web animations API
var sageataSus = document.querySelector('.arrow-down');
var sageataJos = document.querySelector('.arrow-up');
var sageataContent = document.querySelector('.arrow-down-content');

sageataSus.animate([
  {transform:'translateY(0%)'},
  {transform:'translateY(50%)'}
],{duration:500,fill:'forwards',iterations:Infinity,direction:'alternate-reverse',easing:'ease-in-out'});


sageataContent.animate([
  {transform:'translateY(0%)'},
  {transform:'translateY(50%)'}
],{duration:500,fill:'forwards',iterations:Infinity,direction:'alternate-reverse',easing:'ease-in-out'});


sageataJos.animate([
  {transform:'translateY(50%)'},
  {transform:'translateY(0%)'}
],{duration:500,fill:'forwards',iterations:Infinity,direction:'alternate-reverse',easing:'ease-in-out'});

 const tl4 = new TimelineMax({onStart:onStart,onComplete:onComplete});
    tl4.pause();
    tl4.to('.slider2',1.5,{y:'-100%'});
    tl4.to('.container-slide',1,{y:'-100%'},'-=1.5');

const header = document.querySelector('.header');
const main = document.querySelector('.main-content');
header.addEventListener('wheel',scroll);
 function scroll(e){
    if (e.wheelDelta >= 0) {
        console.log('Scroll up'); //your scroll data here
    }
    else{
    tl4.restart(true, false);
    tl3.restart(true,false);
    window.scroll({top:main.clientHeight+100});
    console.log('Scroll down');
    }
  }

  function onStart(){
    document.querySelector('body').classList.add('is-loading');
    header.style.opacity=0;
    header.removeEventListener('wheel',scroll);
  }

  function onComplete(){
    document.querySelector('body').classList.remove('is-loading');
    header.style.opacity=1;
    header.addEventListener('wheel',scroll);
  }

const tl2 = new TimelineMax({onUpdate:updateAnimation,delay:2});
const tl3 = new TimelineMax({onUpdate:()=>tl3.progress()});

tl3.to('.q1',1,{opacity:1});
tl3.to('.q1',1,{opacity:0});
tl3.to('.q2',1,{opacity:1});
tl3.to('.q2',1,{opacity:0});
tl3.to('.q3',1,{opacity:1});
tl3.to('.q3',1,{opacity:0});
tl3.to('.q4',1,{opacity:1});
//tl3.to('.q4',1,{opacity:0});

tl2.fromTo('.text-container',20,{x:'-100%'},{x:'10%'});
tl2.from('.text-container4',20,{height:'100vh',delay:1,stagger:5,ease: Sine.easeOut});
tl2.to('.text-container4',20,{height:'0vh',delay:1,stagger:5,ease: Sine.easeOut});
tl2.from('.text-container3',20,{height:'100vh',delay:1,stagger:5,ease: Sine.easeOut});
tl2.to('.text-container3',20,{height:'0vh',delay:1,stagger:5,ease: Sine.easeOut});
tl2.from('.text-container2',20,{height:'100vh',delay:2,stagger:5,ease: Sine.easeOut});
tl2.to('.text-container2',20,{height:'0vh',delay:2,stagger:5,ease: Sine.easeOut});
tl2.from('.text-container',20,{height:'100vh',ease: Sine.easeOut});
//tl2.to('.text-container2',20,{height:'0vh',delay:2,stagger:5,ease: Sine.easeOut});

 
const controller = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
  triggerElement:'main',
  triggerHook:'onLeave',
  duration:7000
})
.setTween(tl3)
.addIndicators()
.addTo(controller);



const scene = new ScrollMagic.Scene({
  triggerElement:'main',
  triggerHook:'onLeave',
  duration:7000,
})
.setPin('main')
.setTween(tl2)
.reverse(true)
//.addIndicators()
.addTo(controller);

function updateAnimation(){
  tl2.progress();
}

}

init();