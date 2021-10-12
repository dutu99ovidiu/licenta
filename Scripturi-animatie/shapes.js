
//Anime.js
const btn = document.getElementById('cta');
var btn2 = document.getElementById('cta2');

btn.onclick = function(){
 const morphing = anime({
   targets:'.polymorph',
   points:[
    {value:'215,110 0,110 0,0 47.7,0 67,76'},
    {value:'215,110 0,110 0,0 0,0 67,76'},
   ],
   easing:'easeOutQuad',
   duration:1200,
   loop:false
  });

   const click =anime({
   targets:'#blip',
   opacity:1,
   duration:2600,
   translateY:250
  })

  const promise = morphing.finished.then(()=>{
   btn2.onclick = function(){
   const morphing = anime({
   targets:'.polymorph',
   points:[
    {value:'215,110 0,110 0,0 47.7,0 67,76'},
    {value:'215,110 0,110 0,0 47.7,0 215,0'},
   ],
   easing:'easeOutQuad',
   duration:1200,
   loop:false
  });

  const reverse = anime({
   targets:'#blip',
   opacity:1,
   duration:1500,
   translateY:-250,
   easing: 'spring(1, 80, 10, 0)'
  })
 }
  })
}

