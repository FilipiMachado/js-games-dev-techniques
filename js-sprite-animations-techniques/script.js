const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "assets/dog_sprites.png";
//const spriteWidth = 53;
//const spriteHeight = 58;
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 6;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.fillRect(50, 50, 100, 100);
  //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  if (frameX < 6) {
    frameX++;
  } else {
    frameX = 0;
  }
  requestAnimationFrame(animate);
}
animate();

//console.log(CANVAS_WIDTH);
//console.log(CANVAS_HEIGHT);
