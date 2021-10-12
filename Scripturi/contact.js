 const tl = new TimelineMax();
 tl.to('.text',1,{y:'0%',stagger:0.25});
 tl.to('.slider',1.5,{y:'-100%',delay:0.5});
 tl.to('.intro',1,{y:'-100%'},'-=1');
 tl.fromTo('nav',1,{opacity:0},{opacity:1});
 tl.fromTo('.form',1,{opacity:0},{opacity:1},'=-0.5');
 tl.fromTo('.container',1,{opacity:0,y:'100%'},{opacity:1,y:"0%"},'=-1');
 tl.fromTo('.container-form',1,{opacity:0,x:'100%'},{opacity:1,x:'0%'});
 