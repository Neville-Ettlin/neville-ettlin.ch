//Slider JS
(function () {
  var controller = new ScrollMagic.Controller();
  var wipeAnimation = new TimelineMax()
    // animate to second
    .to("#slideContainer", 1, { x: "-25%" })
    // animate to third
    .to("#slideContainer", 1, { x: "-50%" })
  var scene = new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "500%"
  })
    //Halts downwards Scrolling while Sliding
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addTo(controller);
}())
//Delay Title Animation
//hides: welcome_items_name till animation
setTimeout(() => {
  const one = document.getElementById('animation_down');
  //hides welcome_items_welcome in 0ms
  one.style.visibility = 'hidden';
}, 0);
//Makes welcome_items_name appear again 
setTimeout(() => {
  const two = document.getElementById('animation_down');
  //shows welcome_items_welcome after 1000ms
  two.style.visibility = 'visible';
}, 1000);



