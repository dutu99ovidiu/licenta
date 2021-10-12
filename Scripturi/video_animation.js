//gsap.js + Scroll Magic
// IN caz ca vreau sa fac ceva cu un video 
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('.pen');
const end = section.querySelector('.ceva');
const photo1= section.querySelector('.poza1');
const photo2=section.querySelector('.poza2');

const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
 duration:4000,
 triggerElement:intro,
 triggerHook:0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

const textAnim1 = TweenMax.fromTo(text,3,{opacity:1},{opacity:0});
//const textAnim2 = TweenMax.fromTo(end,3,{opacity:1},{opacity:0});

let scene2 = new ScrollMagic.Scene({
 duration:1000,
 triggerElement:intro,
 triggerHook:0
})
.setTween(textAnim1)
.addTo(controller);

let accelAmount = 0.1;
let scrollPos=0;
let delay=0;

scene.on('update',e=>{
 scrollPos=e.scrollPos/1000;
 console.log(scrollPos);
});

setInterval(()=>{
 delay+=(scrollPos-delay)*accelAmount;
video.currentTime=delay;
},33.3);

/*let scene3 = new ScrollMagic.Scene({
 duration:500,
 triggerElement:end,
 triggerHook:0
})
.setTween(textAnim2)
.setPin(end)
.addIndicators()
.addTo(controller2);*/
