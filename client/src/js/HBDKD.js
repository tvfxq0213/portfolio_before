var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
    heartContainer = select('.heartContainer'),
    heartContainerInv = select('.heartContainerInv'),
    scPlayer, trackEnded = false


TweenMax.set('svg', {
  visibility: 'visible'
})
var mainTl = new TimelineMax();

function makeHearts(){
  
  var h, destContainer;
  for(var i = 0; i < 100; i++){
    h = select('#lantern').cloneNode(true);
    destContainer = heartContainer;
    if(i % 2){
      destContainer = heartContainerInv;
    }
    destContainer.appendChild(h);
    var speed = randomBetween(10, 20);
    TweenMax.set(h, {
      x:randomBetween(0, 800),
      scale:(destContainer == heartContainerInv) ? 1- (speed*0.05) : randomBetween(6, 15)/10,
      //alpha:(destContainer == heartContainerInv) ?3/speed  : 1,
      filter:(destContainer == heartContainerInv) ? 'url(#brightness)' : 'none',
      //filter:'brightness(-20%)',
      //backgroundColor:'hsl(150, +=0, 100%)',
      transformOrigin:'50% 0%'
    })
    var t = TweenMax.fromTo(h, speed, {      
      y:randomBetween(610, 650),
    },{
      y:randomBetween(-140, -180),
      delay:randomBetween(0, 10),
      repeat:-1,
      onRepeat:checkTrack,
      repeatDelay:randomBetween(0, 10),
      ease:Linear.easeNone
    } )
    
    sway(h);
    t.timeScale(0.24)
  }
}

function sway(l){
  var val = randomBetween(1, 30);
  var rand = Math.random() - 0.5;
  TweenMax.fromTo(l, randomBetween(6, 20), {
    rotation:val,
  },{
    rotation:-val,
    repeat:-1,
    yoyo:true,
    ease:Sine.easeInOut
  })
  TweenMax.to(l, randomBetween(10, 30),{
    repeat:-1,
    x:l._gsTransform.x + (rand * (300)),
    yoyo:true,
    ease:Sine.easeInOut
  })
  
  
  
}



function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}                  

TweenMax.staggerTo('.flicker', 2.8, {
    stopColor:'#BF3A0B',
    repeat:-1,
    ease:RoughEase.ease.config({ template: Power0.easeNone, strength: 3, points: 10, taper: "none", randomize: true, clamp: false}),
    yoyo:true
  },0.1)
  
  TweenMax.to('.lanternTop', 0.6, {
    stopColor:'#000',
    repeat:-1,
    ease:RoughEase.ease.config({ template: Power0.easeNone, strength: 3, points: 10, taper: "none", randomize: true, clamp: false}),
    yoyo:true
  })
 TweenMax.to('.lanternMid', 0.6, {
    stopColor:'#FD9E2E',
    repeat:-1,
    ease:RoughEase.ease.config({ template: Power0.easeNone, strength: 3, points: 10, taper: "none", randomize: true, clamp: false}),
    yoyo:true
  })

 
 function streamTrack(){
  
  SC.stream('/tracks/99339136').then(function(player){
    scPlayer = player;
    player.on('finish', function (){
        trackEnded = true;
    })
  });  

   
}

SC.initialize({
    client_id: '516b790a82b7c6d89856376fa4ced361',
    redirect_uri: 'http://gannon.tv/soundcloud'
  });


function checkTrack(){
  
  if(trackEnded){
    
    TweenMax.killTweensOf(this.target)
  }
}

 streamTrack();

select('body').onclick =  function(){
  scPlayer.play();
  makeHearts();
  
  TweenMax.to('.release', 13, {
    y:'-=400',
    alpha:0,
    ease:Sine.easeIn
  })
  
  select('body').ontouchstart = select('body').onclick = null;
  
}

select('body').ontouchstart = select('body').onclick;
