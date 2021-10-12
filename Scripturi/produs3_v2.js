// anime.js
//letters animation
function init(){

var indrumare={};
indrumare.opacityIn=[0,1];
indrumare.scaleIn=[0.2,1];
indrumare.scaleOut=3;
indrumare.durationIn=800;
indrumare.durationOut=600;
indrumare.delay=500;

anime.timeline({loop:true})
.add({
 targets:'.indrumare .litere-1',
 opacity:indrumare.opacityIn,
 scale:indrumare.scaleIn,
 duration:indrumare.durationIn
})
.add({
  targets:'.indrumare .litere-1',
  opacity:0,
  scale:indrumare.scaleOut,
  duration:indrumare.durationOut,
  easing:"easeInExpo",
  delay:indrumare.delay
})
.add({
 targets:'.indrumare .litere-2',
 opacity:indrumare.opacityIn,
 scale:indrumare.scaleIn,
 duration:indrumare.durationIn
})
.add({
 targets:'.indrumare .litere-2',
  opacity:0,
  scale:indrumare.scaleOut,
  duration:indrumare.durationOut,
  easing:"easeInExpo",
  delay:indrumare.delay
})
.add({
 targets:'.indrumare .litere-3',
 opacity:indrumare.opacityIn,
 scale:indrumare.scaleIn,
 duration:indrumare.durationIn
})
.add({
  targets:'.indrumare .litere-3',
  opacity:0,
  scale:indrumare.scaleOut,
  duration:indrumare.durationOut,
  easing:"easeInExpo",
  delay:indrumare.delay
})
.add({
 targets:'.indrumare',
 opacity:0,
 duration:500,
 delay:100
});
/*anime.timeline({loop:true})
.add({
  targets:'.svg-icon',
  translateY:[0,100],
  easing:'easeInExpo',
  duration:500,
  delay:100
})
.add({
  targets:'.svg-icon',
  translateY:[100,0],
  easing:'easeOutExpo',
  duration:500,
  delay:200
})*/
}

init();