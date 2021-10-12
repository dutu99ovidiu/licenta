//gsap.js +Scroll Magic
const flightPath={
  curviness:1.25,
  autoRotate:true,
  values:[
    {x:100,y:-20},
    {x:300,y:10},
    {x:500,y:100},
    {x:750,y:-100},
    {x:350,y:-50},
    {x:window.innerWidth+10,y:-150}
  ]
};

const tl2 = new TimelineMax({onComplete: () => document.querySelector('body').classList.remove('is-loading')});
tl2.to('.text',1,{y:'0%',stagger:0.25});
tl2.to('.slider',1.5,{y:'-100%',delay:0.5});
tl2.to('.intro',1,{y:'-100%'},'-=1');

const tween = new TimelineMax({onUpdate:updateAnimation});
const tl = new TimelineMax();

tween.fromTo('.plane',0.2,{opacity:0},{opacity:1});
tween.to('.plane',2,{bezier:flightPath,ease:Power1.easeInOut});
tl.from('.quote',1,{opacity:0,delay:1});

const controller= new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement:'.animation',
  duration:'100%',
  triggerHook:'onLeave'
})
.setTween(tween)
//.addIndicators()
.setPin('.animation')
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement:'.animation',
  triggerHook:'onLeave',
  duration:'100%'
})
.setTween(tl)
//.addIndicators()
.addTo(controller);


 function updateAnimation(){
   tween.progress();
 }

const tl1 = new TimelineMax();
tl1.from('.img1',2,{opacity:0,y:'-100%'});
tl1.from('.img2',2,{opacity:0,y:'-100%'});
tl1.from('.img3',2,{opacity:0,y:'-100%'});
tl1.from('.img4',2,{opacity:0,y:'-100%'});
tl1.from('.img5',2,{opacity:0,y:'-100%'});
tl1.from('.img6',2,{opacity:0,y:'-100%'});
tl1.from('.img7',2,{opacity:0,y:'-100%'});
tl1.from('.img8',2,{opacity:0,y:'-100%'});
tl1.from('.img9',2,{opacity:0,y:'-100%'});

const controller2= new ScrollMagic.Controller();
const scene3 = new ScrollMagic.Scene({
 triggerElement:'.animation2',
 triggerHook:'onLeave',
 duration:"100%"
})
.setPin('.animation2')
.setTween(tl1)
.addTo(controller2)
