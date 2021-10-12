// web animations api
//open nav animations
let counter=1;
var animatie = document.getElementById('meniu');
var open = document.getElementById('open');
var logo=document.getElementById('logo');
 animatie.addEventListener("click",function(){
  if(counter==1){
     animatie.animate(
     [
     { transform: 'rotate(0)' },
     { transform: 'rotate(180deg)' }
     ], {
         fill: 'forwards',
         duration:500,
});
    logo.animate(
     [
      {opacity:1},
      {opacity:0}
     ],{
      fill:'forwards',
      duration:50,
     }
    )
    open.animate(
     [
      {transform:'translateY(-100%)'},
      {transform:'translateY(0%)'}
     ],{
      fill:'forwards',
      duration:500,
      easing:'ease-in-out'
     }
    )
counter=2;
  }
  else{
   animatie.animate(
    [
    { transform: 'rotate(0)' },
    { transform: 'rotate(180deg)' }
    ], {
        fill: 'forwards',
        duration:500,
        direction:"alternate-reverse"
});
      logo.animate(
     [
      {opacity:1},
      {opacity:0}
     ],{
      fill:'forwards',
      duration:1000,
      direction:"alternate-reverse",
      delay:500
     }
    )
     open.animate(
     [
      {transform:'translateY(-100%)'},
      {transform:'translateY(0%)'}
     ],{
      fill:'forwards',
      duration:500,
      direction:"alternate-reverse",
       easing:'ease-in-out'
     }
    )
counter=1;
  }
});
