//gsap.js + Scroll Magic
var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
var tl1 = new TimelineMax({onComplete: () => document.querySelector('body').classList.remove('is-loading')})

tl1.to('.text',1,{y:'0%',stagger:0.25});
tl1.to('.slider',1.5,{y:'-100%',delay:0.5});
tl1.to('.intro',1,{y:'-100%'},'-=1');


 var section = document.querySelector(".sticky");
 var quote = section.querySelector(".quote");
 const controller = new ScrollMagic.Controller();

tl.from(quote,.5,{x:200,opacity:0});
tl.from('.bordura',1,{width:0},"=-.5");
tl.from('#poza1',1,{x:-200,opacity:0},"=-1");
tl.from('#poza2',1,{x:200,opacity:0},"=-.7");

tl2.from('#box',1,{opacity:0,scale:0});
tl2.to('#box',.5,{
 left:"20%",
 scale: 1.3,
 borderColor:'white',
 borderWidth:12,
 boxShadow:'1px 1px 0px 0px rgba(0,0,0,.09)'
});

const scene = new ScrollMagic.Scene({
 triggerElement:section,
 triggerHook:'onLeave',
 duration:'100%'
})
.setPin(section)
.setTween(tl)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
 triggerElement:quote
})
.setTween(tl2)
.addTo(controller);


function updatePercentage(){
 tl.progress();
//console.log(tl.progress());
}

var tl3 = new TimelineMax({onUpdate:updateAnimation});
var section2 = document.querySelector('.sticky2');
const controller2 = new ScrollMagic.Controller();

tl3.from('#text1',5,{y:-100,opacity:0});
tl3.from('#text2',10,{x:400,opacity:0});
tl3.from('#text3',15,{x:-400,opacity:0});

const scene3 = new ScrollMagic.Scene({
 triggerElement:section2,
 triggerHook:'onLeave',
 duration:"100%"
})
.setPin(section2)
.setTween(tl3)
//.addIndicators()
.addTo(controller2);

function updateAnimation(){
 tl3.progress();
}


var tl4 = new TimelineMax({onUpdate:updateAnimation2});
var section3 = document.querySelector('.sticky3');
const controller3 = new ScrollMagic.Controller();

tl4.from('#box2',1,{opacity:0,scale:0});
tl4.to('#box2',5,{x:-400,scale: 1,ease:Power3.easeIn,borderWidth:12});
tl4.from('#par1',5,{opacity:0});
tl4.to('#par1',10,{y:-60,x:-100});
tl4.from('#box3',1,{opacity:0,scale:0});
tl4.to('#box3',5,{x:400,scale: 1,ease:Power3.easeIn,borderWidth:12});
tl4.from('#par2',5,{opacity:0});
tl4.to('#par2',10,{y:-60,x:100});
tl4.from('#box4',1,{opacity:0,scale:0});
tl4.to('#box4',5,{x:-400,scale: 1,ease:Power3.easeIn,borderWidth:12});
tl4.from('#par3',5,{opacity:0});
tl4.to('#par3',10,{y:-60,x:-100});
tl4.from('#box5',1,{opacity:0,scale:0});
tl4.to('#box5',5,{x:400,scale: 1,ease:Power3.easeIn,borderWidth:12});
tl4.from('#par4',5,{opacity:0});
tl4.to('#par4',10,{y:-60,x:100});

const scene4 = new ScrollMagic.Scene({
 triggerElement:section3,
 triggerHook:'onLeave',
 duration:"100%"
})
.setPin(section3)
.setTween(tl4)
//.addIndicators()
.addTo(controller3);

function updateAnimation2(){
 tl4.progress();
}
