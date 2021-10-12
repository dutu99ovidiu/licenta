anime({
  targets: '#text,path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1200,
  delay: function(el, i) { return i * 80 },
  direction: 'alternate',
  loop: true
});