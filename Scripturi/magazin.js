//gsap.js + Web Animations API

//Main Animations
const tl = new TimelineMax();

tl.to('.text',1,{y:'0%',stagger:0.25});
tl.to('.slider',1.5,{y:'-100%',delay:0.5});
tl.to('.intro',1,{y:'-100%'},'-=1');
tl.fromTo('.skew',1,{width:'0%',height:'0%',opacity:0},{width:'100%',height:'100%',opacity:1});
tl.fromTo('.title',1,{opacity:0,y:'-200%'},{opacity:1,y:'0%',ease:Bounce.easeOut});
tl.fromTo('.descriere',1,{opacity:0},{opacity:1});
tl.fromTo('.question',1.5,{opacity:0,x:'-200%'},{opacity:1,x:'0%',ease:Bounce.easeOut});
tl.fromTo('.indrumare',1,{opacity:0},{opacity:1});
tl.fromTo('.img-wrapper',1.5,{opacity:0},{opacity:1});
