//gsap.js


function init(){
const tl = new TimelineMax({onComplete:()=>document.querySelector('body').classList.remove('is-loading')});
tl.to('.text',1,{y:'0%',stagger:0.25});
tl.to('.slider',1.5,{y:'-100%',delay:0.5});
tl.to('.intro',1,{y:'-100%'},'-=1');
tl.fromTo('.title',3,{y:-500,opacity:0},{y:0,opacity:1,ease:Power4.easeOut});
tl.fromTo('.circle',2,{opacity:0},{opacity:1,ease:Power4.easeOut},'-=0.5');
tl.fromTo('.lead',2,{opacity:0,x:-500},{opacity:1,x:0,ease:Bounce.easeOut},'-=1');
tl.fromTo('.first-rating',2,{opacity:0,x:-400},{opacity:1,x:-50,ease:Bounce.easeOut},'-=1.5');
tl.fromTo('.second-rating',2,{opacity:0,x:-400},{opacity:1,x:0,ease:Bounce.easeOut},'-=1');
tl.fromTo('.third-rating',2,{opacity:0,x:-400},{opacity:1,x:50,ease:Bounce.easeOut},'-=0.5');
tl.fromTo('.first-card',2,{opacity:0,y:500},{opacity:1,y:0,ease:Elastic.easeOut.config(1,0.3)},'-=4');
tl.fromTo('.second-card',2,{opacity:0,y:500},{opacity:1,y:0,ease:Elastic.easeOut.config(1,0.3)},'-=3');
tl.fromTo('.third-card',2,{opacity:0,y:500},{opacity:1,y:0,ease:Elastic.easeOut.config(1,0.3)},'-=1.75');

}


init();