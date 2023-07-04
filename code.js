var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score=0;
var gameState="server";
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="orange";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="lightgreen";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="orange";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="lightgreen";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="orange";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="lightgreen";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="orange";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="lightgreen";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="lightgreen";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="orange";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="lightgreen";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="orange";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="lightgreen";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="orange";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="lightgreen";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="orange";

paddle = createSprite(200,390,120,10);
paddle.shapeColor = "lightblue";
ball=createSprite(200,200,20,20);
ball.shapeColor = "lightblue";


function draw() {
  background("green");

textFont("times Roman");
fill("yellow");
textSize(20);
text("Pontuaction = " +score, 225, 15);

if (gameState == "server") {
  text("Welcome! Click ENTER to start. Good Game!",15,200);
}


  
  if (ball.isTouching(box1)) {
  box1.destroy()
  score=score + 1
}

if (ball.isTouching(box2)) {
  box2.destroy()
  score=score + 1
}

if (ball.isTouching(box3)) {
  box3.destroy()
  score=score + 1
}

if (ball.isTouching(box4)) {
  box4.destroy()
  score=score + 1
}

if (ball.isTouching(box5)) {
  box5.destroy()
  score=score + 1
}

if (ball.isTouching(box6)) {
  box6.destroy()
  score=score + 1
}

if (ball.isTouching(box7)) {
  box7.destroy()
  score=score + 1
}

if (ball.isTouching(box8)) {
  box8.destroy()
  score=score + 1
}

if (ball.isTouching(box9)) {
  box9.destroy()
  score=score + 1
}

if (ball.isTouching(box10)) {
  box10.destroy()
  score=score + 1
}

if (ball.isTouching(box11)) {
  box11.destroy()
  score=score + 1
}

if (ball.isTouching(box12)) {
  box12.destroy()
  score=score + 1
}

if (ball.isTouching(box13)) {
  box13.destroy()
  score=score + 1
}

if (ball.isTouching(box14)) {
  box14.destroy()
  score=score + 1
}

if (ball.isTouching(box15)) {
  box15.destroy()
  score=score + 1
}

if (ball.isTouching(box16)) {
  box16.destroy()
  score=score + 1
}

  drawSprites();
  if (keyDown(ENTER)) {
    ball.velocityX = 2;
    ball.velocityY = 2
    gameState = "play"
  }
  
  if (gameState == "play") {
     paddle.x=World.mouseX;
  
  if (ball.isTouching(bottomEdge) || score == 16){
    gameState="end"
  }
  }
  if (gameState=="end" ) {
    ball.velocityY = 0 
    ball.velocityX = 0
    textSize(25)
    stroke('black')
    text("Finished!",140,200)
  }
  
  
  if (keyDown(RIGHT)) {
    paddle.x = paddle.x +2
  }
  if (keyDown(LEFT)) {
    paddle.x = paddle.x -2
  }
 createEdgeSprites()
  ball.bounceOff(leftEdge)
  ball.bounceOff(rightEdge)
  ball.bounceOff(topEdge)
  ball.bounceOff(paddle)

}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
