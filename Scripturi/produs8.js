const tl = new TimelineMax({onComplete: () => document.querySelector('body').classList.remove('is-loading')});
tl.to('.text',1,{y:'0%',stagger:0.25});
tl.to('.slider',1.5,{y:'-110%',delay:0.5});
tl.to('.intro',1,{y:'-110%'},'-=1');


const controller = new ScrollMagic.Controller();

const tl2 = new TimelineMax();
tl2.from('#title-1',1,{opacity:0,x:"-100%"});
tl2.from('#p-1',1,{opacity:0,x:"-100%"});
tl2.from('#title-2',1,{opacity:0,x:"-100%"});
tl2.from('#p-2',1,{opacity:0,x:"-100%"});


const scene = new ScrollMagic.Scene({
 triggerElement:'.first-section',
 triggerHook:'onLeave',
 duration:2000
})
.setPin('.first-section')
.setTween(tl2)
.addTo(controller);



const controller2 = new ScrollMagic.Controller();

const tl3 = new TimelineMax();
tl3.from('#second-title',1,{opacity:0,x:"100%"});
tl3.from('#second-p',1,{opacity:0,x:"100%"});



const scene2 = new ScrollMagic.Scene({
 triggerElement:'.second-section',
 triggerHook:'onLeave',
 duration:2000
})
.setPin('.second-section')
.setTween(tl3)
.addTo(controller2);



const controller3 = new ScrollMagic.Controller();

const tl4 = new TimelineMax();
tl4.from('#title-3',1,{opacity:0,x:"100%"});
tl4.from('#p-3',1,{opacity:0,x:"100%"});
tl4.from('#title-4',1,{opacity:0,x:"100%"});
tl4.from('#p-4',1,{opacity:0,x:"100%"});


const scene3 = new ScrollMagic.Scene({
 triggerElement:'.laptop',
 triggerHook:'onLeave',
 duration:2000
})
.setPin('.laptop')
.setTween(tl4)
.addTo(controller3);

 
