let mySound;
var slider;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('sounds/569496__migfus20__lo-fi-music-guitar-short-version.mp3');
}

function setup() {
  let cnv = createCanvas(300, 300);
  cnv.mousePressed(canvasPressed);
  slider = createSlider (0, 1, 0.5, 0.01);
}

function canvasPressed() {
  mySound.play();
}

function draw () {
    background(100, 150, 20);
    text('TAP HERE TO PLAY', 10, 20);
    text('Set Volume', 120, 290);
    mySound.setVolume(slider.value());
}
