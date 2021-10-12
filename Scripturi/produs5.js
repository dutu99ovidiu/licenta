//gsap.js
function init(){
const tl = new TimelineMax({onComplete:()=>document.querySelector('body').classList.remove('is-loading')});
tl.to('.text',1,{y:'0%',stagger:0.25});
tl.to('.slider',1.5,{y:'-100%',delay:0.5});
tl.to('.intro',1,{y:'-100%'},'-=1');
tl.fromTo('.nav',3.5,{opacity:0,y:-100},{opacity:1,y:0});
tl.fromTo('.title',3,{opacity:0,x:-300},{opacity:1,x:0},'-=4');
tl.fromTo('.description',3,{opacity:0,y:300},{y:0,opacity:1},'-=4');
tl.fromTo('.location',3,{opacity:0,x:-300},{opacity:1,x:0},'-=3.5');
tl.fromTo('.primary-image',2,{opacity:0,x:500},{opacity:1,x:0},'-=2.5');
tl.fromTo('#img1',2,{opacity:0,y:-50},{opacity:1,y:0},'-=1.5');
tl.fromTo('#img2',1,{opacity:0,y:-50},{opacity:1,y:0},'-=1');
tl.fromTo('.btn',2,{opacity:0,y:-50},{opacity:1,y:0},'-=2');
}

init();