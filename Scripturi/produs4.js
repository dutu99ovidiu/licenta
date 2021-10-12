

const tl1 = new TimelineMax({onComplete: () => document.querySelector('body').classList.remove('is-loading')});

tl1.to('.text',1,{y:'0%',stagger:0.25});
tl1.to('.slider',1.5,{y:'-100%',delay:0.5});
tl1.to('.intro',1,{y:'-100%'},'-=1');

const tl2 = new TimelineMax({delay:3.5});

tl2.fromTo('#logo',1,{opacity:0},{opacity:1});
tl2.fromTo('.btn',1,{opacity:0,x:'100%'},{opacity:1,x:'0%'});
tl2.fromTo('#title',1,{opacity:0,y:'-100%'},{opacity:1,y:'0%'});
tl2.fromTo('#desciption',1,{opacity:0,x:'-100%'},{opacity:1,x:'0%'},'-=1');


const controller = new ScrollMagic.Controller();

const tl3 = new TimelineMax();

tl3.from('#numbers-h1',1,{opacity:0});
tl3.from('#numbers-h2',1,{opacity:0});
tl3.from('#message-h1',1,{opacity:0});
tl3.from('#message-h2',1,{opacity:0});

const scene = new ScrollMagic.Scene({
 triggerElement:".numbers",
 triggerHook:'onLeave',
 duration:'100%'
})
.setPin('.numbers')
.setTween(tl3)
.addTo(controller);


const controller2 = new ScrollMagic.Controller();

const tl4 = new TimelineMax();
tl4.from('.grow-together-text',1,{opacity:0,x:'-100%'},{opacity:1,x:'0%'});


const scene2 = new ScrollMagic.Scene({
 triggerElement:'.grow-together',
 triggerHook:'onLeave',
 duration:'100%'
})
.setPin('.grow-together')
.setTween(tl4)
.addTo(controller2);


const controller3 = new ScrollMagic.Controller();

const tl5 = new TimelineMax();
tl5.from('.conversation-text',1,{opacity:0,x:'100%'},{opacity:1,x:'0%'});


const scene3 = new ScrollMagic.Scene({
 triggerElement:'.conversation',
 triggerHook:'onLeave',
 duration:'100%'
})
.setPin('.conversation')
.setTween(tl5)
.addTo(controller3);


const controller4 = new ScrollMagic.Controller();

const tl6 = new TimelineMax();
tl6.from('.users-text',1,{opacity:0,x:'-100%'},{opacity:1,x:'0%'});


const scene4 = new ScrollMagic.Scene({
 triggerElement:'.users',
 triggerHook:'onLeave',
 duration:'100%'
})
.setPin('.users')
.setTween(tl6)
.addTo(controller4);