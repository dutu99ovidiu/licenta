//Web animation Api
//Logo pulsing animation
var logo = document.querySelector(".logo");
logo.animate(
     [
     { textShadow:'0 0 10px #fff, 0 0 20px #fff, 0 0 30px #1c181a, 0 0 40px #1c181a, 0 0 50px #1c181a, 0 0 60px #1c181a, 0 0 70px #1c181a' },
     { textShadow: '0 0 20px #fff, 0 0 30px #2e1723, 0 0 40px #2e1723, 0 0 50px #2e1723, 0 0 60px #2e1723, 0 0 70px #2e1723, 0 0 80px #2e1723' }
     ], {
         fill: 'forwards',
         duration:600,
         iterations:Infinity,
         direction:"alternate-reverse",
         easing:"ease-in-out"
});