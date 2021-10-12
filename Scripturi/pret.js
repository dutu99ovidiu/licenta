

const tl = new TimelineMax();

tl.to('.text',1,{y:'0%',stagger:0.25});
tl.to('.slider',1.5,{y:'-100%',delay:0.5});
tl.to('.intro',1,{y:'-100%'},'-=1');