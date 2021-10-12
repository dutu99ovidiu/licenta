//gsap.js + ScrollMagic

//header animation


var tl1 = new TimelineMax({onComplete: () => document.querySelector('body').classList.remove('is-loading')});
tl1.to('.text',1,{y:'0%',stagger:0.25});
tl1.to('.slider',1.5,{y:'-100%',delay:0.5});
tl1.to('.intro-animation',1,{y:'-100%'},'-=1');

const tl = new TimelineMax({delay:3.25});
tl.fromTo('#logo',1,{opacity:0},{opacity:1});
tl.fromTo('.nav-links',1,{opacity:0},{opacity:1});
tl.fromTo('#intro-image',1,{opacity:0,y:'-100%'},{opacity:1,y:'0%'});
tl.fromTo('#intro-h1',1,{opacity:0,x:'-100%'},{opacity:1,x:'0%'});
tl.fromTo('#intro-p',1,{opacity:0,x:'100%'},{opacity:1,x:'0%'});

//Features section animation
const controller = new ScrollMagic.Controller();


tl2 = new TimelineMax({onUpdate:updateAnimation});
tl2.from('#first-h2',2,{x:'-100%'});
tl2.from('#second-h2',2,{x:'100%'});
tl2.from('#third-h2',2,{x:'-100%'});
tl2.from('#fourth-h2',2,{x:'100%'});
tl2.from('#first-p',2,{opacity:0});
tl2.from('#second-p',2,{opacity:0});
tl2.from('#third-p',2,{opacity:0});
tl2.from('#fourth-p',2,{opacity:0});


const scene = new ScrollMagic.Scene({
 triggerElement:".features-section",
 triggerHook:'onLeave',
 duration:2000
})
.setPin('.features-section')
.setTween(tl2)
.addTo(controller);


 function updateAnimation(){
  tl2.progress();
 }


 //Stay Productive animation

 tl3 = new TimelineMax({onUpdate:updateStayProductive});

 const controller2 = new ScrollMagic.Controller();

 tl3.from('.stay-productive-text',2,{x:"120%"});


 const scene2 = new ScrollMagic.Scene({
 triggerElement:".stay-productive",
 triggerHook:'onLeave',
 duration:'100%'
})
.setPin('.stay-productive')
.setTween(tl3)
.addTo(controller2);


function updateStayProductive(){
 tl3.progress();
}


//Testimonials animation

tl4 = new TimelineMax({onUpdate:updateTestimonials});

 const controller3 = new ScrollMagic.Controller();

 tl4.from('#card-1',2,{opacity:0,y:"120%"});
 tl4.from('#card-2',2,{opacity:0,y:"120%"});
 tl4.from('#card-3',2,{opacity:0,y:"120%"});


 const scene3 = new ScrollMagic.Scene({
 triggerElement:".testimonials",
 triggerHook:'onLeave',
 duration:'100%'
})
.setPin('.testimonials')
.setTween(tl4)
.addTo(controller3);


function updateTestimonials(){
 tl4.progress();
}











