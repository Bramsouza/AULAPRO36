var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
}

//função windowResized() em p5.js é chamada uma vez sempre que a janela do navegador é redimensionada
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
