$(document).ready(function(){
  var ascensor = $('#ascensor').ascensor({
    childType: "section",
    ascensorFloorName: ['left-brain','right-brain', 'hands'],
    time: 500,
    windowsOn: 0,
    direction: 'x',
    easing: "easeInOutQuart"
  });

  var leftBrain = new Vivus('left-brain-img', {type: 'delayed', duration: 220, delay: 180, start: 'autostart'});
  var rightBrain = new Vivus('right-brain-img', {type: 'delayed', duration: 220, delay: 180, start: 'autostart'});
  var leftBrainNarrow = new Vivus('left-brain-img-narrow', {type: 'delayed', duration: 220, delay: 180, start: 'autostart'});
  var rightBrainNarrow = new Vivus('right-brain-img-narrow', {type: 'delayed', duration: 220, delay: 180, start: 'autostart'});
  var coffee = new Vivus('coffee-img', {type: 'oneByOne', duration: 220, start: 'autostart'});

  var graphics = [leftBrain, leftBrainNarrow, rightBrain, rightBrainNarrow, coffee];

  // var ascensorInstance = ascensor.data('ascensor');
  ascensor.on("scrollStart", function(e, floor){
    for (var i = 0; i < graphics.length; i++){
      var graphic = graphics[i];
      if (graphic.map) {
        graphic.stop().reset();
        console.log("logging");
      }
    }
  });

  ascensor.on("scrollEnd", function(e, floor){
    for (var i = 0; i < graphics.length; i++){
      var graphic = graphics[i];
      if (graphic.map) {
        graphic.play();
      }
    }
  });
});
