$(document).ready(function(){
  
  var ascensor = $('#ascensor').ascensor({
    childType: "section",
    ascensorFloorName: ['left-brain','right-brain', 'hands', 'feet', 'contact'],
    time: 500,
    windowsOn: 0,
    direction: 'x',
    easing: "easeInOutQuart"
  });

  var ascensorInstance = ascensor.data('ascensor');

  var leftBrain = new Vivus('left-brain-img', {type: 'delayed', duration: 220, delay: 180, start: 'autostart'});
  var rightBrain = new Vivus('right-brain-img', {type: 'delayed', duration: 220, delay: 180, start: 'autostart'});
  var leftBrainNarrow = new Vivus('left-brain-img-narrow', {type: 'delayed', duration: 220, delay: 180, start: 'autostart'});
  var rightBrainNarrow = new Vivus('right-brain-img-narrow', {type: 'delayed', duration: 220, delay: 180, start: 'autostart'});
  var coffee = new Vivus('coffee-img', {type: 'oneByOne', duration: 220, start: 'autostart'});
  var shoes = new Vivus('shoes-img', {type: 'oneByOne', duration: 220, start: 'autostart'});

  //icons
  var linkedin = new Vivus('linkedin', {type: 'oneByOne', duration: 100, start: 'autostart'});
  var github = new Vivus('github', {type: 'oneByOne', duration: 100, start: 'autostart'});
  var facebook = new Vivus('facebook', {type: 'oneByOne', duration: 100, start: 'autostart'});
  var instagram = new Vivus('instagram', {type: 'oneByOne', duration: 100, start: 'autostart'});

  var graphics = [leftBrain, leftBrainNarrow, rightBrain, rightBrainNarrow, coffee, shoes, linkedin, github, facebook, instagram];

  ascensor.on("scrollStart", function(e, floor){
    for (var i = 0; i < graphics.length; i++){
      var graphic = graphics[i];
      if (graphic.map) {
        graphic.stop().reset();
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
