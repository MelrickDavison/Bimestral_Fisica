var buttonParticles = document.getElementById("getParticles")
var volume = document.getElementById("volume")
var um = 0;
var pressao = document.getElementById("pressão")
var temp = document.getElementById("temp")
var valueRange = document.getElementById("range")
var pressaoInicial = 1
let tempInicial = 0;
const volumeInicial = 200;
let intervalo;
let i = 0;

function incrementarTemp() {

  let pressaoFinal = Number(calcularLeiDosGases(tempInicial, Number(temp.value) + 1, particles.length, Number(volume.value)))
  // console.log(pressaoTemp(pressaoInicial, tempInicial, Number(temp.value) + 1))

  console.log(pressaoFinal)
  temp.value = Number(temp.value) + 1
  valueRange.value = pressaoFinal
  pressao.textContent = pressaoFinal + " atm"
}

function decrementarTemp() {
  if (Number(temp.value) - 1 >= 0) {
    temp.value = Number(temp.value) - 1
    let pressaoFinal = Number(calcularLeiDosGases(tempInicial, Number(temp.value) + 1, particles.length, Number(volume.value)))
    valueRange.value = pressaoFinal
    pressao.textContent = pressaoFinal + " atm"
  } else {
    pararTemp()
  }

}

function aumentarTemperatura() {
  intervalo = setInterval(incrementarTemp, 200)

}

function pararTemp() {
  clearInterval(intervalo);
  i = 0;
}

function diminuirTemperatura() {

  intervalo = setInterval(decrementarTemp, 200)

}


valueRange.addEventListener("input", () => {
  document.getElementById("pressão").textContent = valueRange.value + " atm"
})



function calcularLeiDosGases(tempInicial, tempFinal, numMol, volume) {
  let pressaoFinal = (numMol * 0.082 * tempFinal) / volume
  return pressaoFinal.toFixed(2)
}
//let resultado = calcularLeiDosGases(pressaoInicial,volumeInicial,temperaturaInicial,pressaoFinal,volumeFinal,temperaturaFinal)

function pressaoVolume(pressaoInicial, volumeInicial, volumeFinal,) {



  if (pressaoInicial <= 0 || volumeInicial <= 0 || pressaoFinal <= 0 || volumeFinal <= 0) {
    return " OS valores de pressão e volume  devem ser positivas"

  }
  let pressaoFinal = pressaoInicial * volumeInicial / volumeFinal
  return pressaoFinal
}

function pressaoTemp(pressaoInicial, temperaturaInicial, temperaturaFinal) {

  let pressaoFinal = pressaoInicial * temperaturaFinal / temperaturaInicial
  pressaoInicial = pressaoFinal
  return pressaoFinal.toFixed(2)
}
function volume(pressaoInicial, temperaturaInicial, temperaturaFinal) {



  let volumeFinal = pressaoInicial * temperaturaInicial / temperaturaFinal
  return volumeFinal
}


// script.js
var canvasWidth = 400; // Largura do canvas
var canvasHeight = 300; // Altura do canvas
var particles = [];
var numParticles = 0;
var particleSize = 10;
var maxSpeed = 2;
var minSpeed = 1;
var intervaloParticle = 20;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(10, 300, random(minSpeed, maxSpeed), random(minSpeed, maxSpeed)));
  }
}

function draw() {
  background(80);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
    particles[i].checkCollision(particles.slice(i + 1));
  }
}

class Particle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Borda da tela: fazer a partícula voltar para o outro lado da tela
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, particleSize);
  }

  checkCollision(otherParticles) {
    for (let particle of otherParticles) {
      let dx = this.x - particle.x;
      let dy = this.y - particle.y;
      let distance = sqrt(dx * dx + dy * dy);
      if (distance < particleSize) {
        this.vx *= -1;
        this.vy *= -1;
        particle.vx *= -1;
        particle.vy *= -1;
      }
    }
  }
}

function getParticles(num) {

}



volume.addEventListener("input", () => {
  let pressaoFinal = Number(calcularLeiDosGases(tempInicial, Number(temp.value) + 1, particles.length, Number(volume.value)))
  valueRange.value = pressaoFinal
  pressao.textContent = pressaoFinal + " atm"
})

buttonParticles.addEventListener("click", () => {



  numParticles = 1
  setup();
  console.log(numParticles)
  document.getElementById("mais").disabled = false
  document.getElementById("menos").disabled = false
  volume.disabled = false
  um++
  if (um == 1) {
    temp.value = 300
    valueRange.value = pressaoInicial
    pressao.textContent = (Number(valueRange.value)).toFixed(2) + " atm"
    volume.value = 200
  }
  let pressaoFinal = Number(calcularLeiDosGases(tempInicial, Number(temp.value) + 1, particles.length, Number(volume.value)))
  valueRange.value = pressaoFinal
  pressao.textContent = pressaoFinal + " atm"




  //  for (let i = 0; i < numParticles; i++) {

  //   particles[i].display();

  // }
})

// function moverMolecula(){
//   console.log("click")
//   for (let i = 0; i < numParticles; i++) {
//     particles[i].update();
//   }
// }
