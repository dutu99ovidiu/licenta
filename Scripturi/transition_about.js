// Web animation API
//Transition animation
window.onload=function(){
 var anime=document.querySelector('.transition');
 anime.animate(
     [
     { transform: 'translateY(-100%)' },
     { transform: 'translateY(0%)' }
     ], {
         fill: 'forwards',
         duration:1000,
         easing:"ease-in-out",
});
 anime.addEventListener("click",function(){
 anime.animate(
     [
     { transform: 'translateY(0%)' },
     { transform: 'translateY(-100%)' }
     ], {
         fill: 'forwards',
         duration:1000,
         easing:"ease-in-out",
});
});
};

/*const el = document.querySelector('.transition');
el.addEventListener('mousedown',mousedown);
const max = -780+"px";
console.log(max);
function mousedown(e){

   window.addEventListener('mousemove',mousemove);
   window.addEventListener('mouseup',mouseup);

   let prevX = e.clientX;
   let prevY = e.clientY;

   function mousemove(e){
       let newX=prevX-e.clientX;
       let newY=prevY-e.clientY;
       const rect = el.getBoundingClientRect();
       //console.log(parseInt(el.style.top));
       //if(parseInt(el.style.top)<parseInt(-780)){
       el.style.top=rect.top-newY+"px";

       prevX=e.clientX;
       prevY=e.clientY;
       //}
       //else{
        //mouseup();
       //}
   }

   function mouseup(){
     window.removeEventListener('mousemove',mousemove);
     window.removeEventListener('mouseup',mouseup);
   }
}*/