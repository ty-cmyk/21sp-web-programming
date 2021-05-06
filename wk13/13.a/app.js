let mySound;
let valueA = 0;
let valueB = 0;
let valueC = 0;
var sliderA;
var sliderB;
var sliderC;
var waveA;
var waveB;
var waveC;
var playing;
var envA;
var envB;
var envC;
var amp;
var buttonA;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('sounds/569496__migfus20__lo-fi-music-guitar-short-version.mp3');
}

function setup() {
  let cnv = createCanvas(800, 800);
  amp = new p5.Amplitude();

  // SOUND A
  envA = new p5.Envelope();
  envA.setADSR(0.05, 0.1, 0.5, 1);
  envA.setRange(1.2, 0);
  
  waveA = new p5.Oscillator ();
  waveA.setType('sine');
  waveA.start();
  waveA.amp(envA);
  waveA.freq(440);

  sliderA = createSlider (100, 1200, 440)


  // SOUND B
  envB = new p5.Envelope();
  envB.setADSR(0.05, 0.1, 0.5, 1);
  envB.setRange(1.2, 0);
  
  waveB = new p5.Oscillator ();
  waveB.setType('sine');
  waveB.start();
  waveB.amp(envB);
  waveB.freq(640);

  sliderB = createSlider (100, 1200, 640)

  // SOUND C
  envC = new p5.Envelope();
  envC.setADSR(0.05, 0.1, 0.5, 1);
  envC.setRange(1.2, 0);
  
  waveC = new p5.Oscillator ();
  waveC.setType('sine');
  waveC.start();
  waveC.amp(envC);
  waveC.freq(840);

  sliderC = createSlider (100, 1200, 840)

}


function draw () {
// freq sliders
  waveA.freq(sliderA.value());
  waveB.freq(sliderB.value());
  waveC.freq(sliderC.value());

// EYE AMPLIFIER
    var vol = amp.getLevel();
    stroke(100, 50, 50, 50);
    strokeWeight(4);
    fill(255);
    ellipse (200, 200, 100, vol * 200);

    stroke(100, 50, 50, 50);
    strokeWeight(4);
    fill(255);
    ellipse (600, 200, 100, vol * 200);

// SOUND A
    stroke(100);
    strokeWeight(2);
    fill(valueA);
    ellipse (100, 620, 70);

// SOUND B
    stroke(100);
    strokeWeight(2);
    fill(valueB);
    ellipse (400, 620, 70);  
    

// SOUND C
    stroke(100);
    strokeWeight(2);
    fill(valueC);
    ellipse (700, 620, 70);
    
    


// Nostrils start/stop
    stroke(100);
    strokeWeight(2);
    fill(0);
    ellipse (300, 400, 50);
    
    stroke(100);
    strokeWeight(2);
    fill(0);
    circle (500, 400, 50);
}

function mousePressed() {
  let start = dist(mouseX, mouseY, 300, 400);
  if (start < 100) {
    mySound.play(); 
  } 
  let stop = dist(mouseX, mouseY, 500, 400);
  if (stop < 100) {
    mySound.stop(); 
  } 

  } 

function keyPressed() {
  if (key === 'z') {
    envA.play();
    valueC = 0
    valueB = 0
    valueA = '#00BCE8'
  } else if (key === 'x') {
    envB.play();
    valueA = 0
    valueC = 0
    valueB = '#00E5AE'
  } else if (key === 'c') {
    envC.play();
    valueA = 0
    valueB = 0
    valueC = '#E59E00' 
  }
}
