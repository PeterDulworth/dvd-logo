// https://www.youtube.com/watch?v=0j86zuqqTlQ

let x;
let y;
let xspeed;
let yspeed;
let dvdWidth = 80;
let dvdHeight = 60;
let dvd;
let r, g, b;

function preload() {
  dvd = loadImage("dvd_logo.png");
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function setup() {
  createCanvas(800, 500);
  x = random(width);
  y = random(height);
  frameRate(10000);
  xspeed = 10;
  yspeed = 10;
}

function draw() {
  background(0);
  tint(r, g, b);
  image(dvd, x, y);

  x += xspeed;
  y += yspeed;

  if ((x <= 0 && y <= 0) || 
      (x >= width - dvd.width && y >= height - dvd.height) || 
      (x >= width - dvd.width && y <= 0) || 
      (x <= 0 && y >= height - dvd.height)) {
    console.log("CORNER!");
  }

  // hits right side or left side
  if (x >= width - dvd.width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    pickColor();
  } else if (x < 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  // hits bottom or top
  if (y >= height - dvd.height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    pickColor();
  } else if (y < 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}