 
 
 
 const flashLight = anime({
  targets:'#handboy,#girllight',
  rotate:10,
  duration:1300,
  direction:'alternate',
  loop:true,
  easing:'easeInOutQuad',
 })


 const hairSwing = anime({
  targets:'#hairgirl',
  rotate:10,
  duration:1300,
  direction:'alternate',
  loop:true,
  easing:'easeInOutQuad',
 })


 anime({
  targets: '.row svg',
  translateY: 10,
  autoplay: true,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
});


 anime({
  targets: '#zero',
  translateX: 10,
  autoplay: true,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate',
  scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
});
