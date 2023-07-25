function calcularLeiDosGases(pressao1,volume1,temperatura1,pressao2,volume2,temperatura2){



    if(pressao1<=0 || volume1 <= 0 || temperatura1 <= 0||pressao2<=0 || volume2 <= 0 || temperatura2 <= 0){
        return " OS valorres de pressão, volume e temperatura devem ser positivas"

    }
    let lei = pressao1 * volume1/  temperatura1 ==  pressao2 * volume2/  temperatura2
    return lei 
}
let resultado = calcularLeiDosGases(pressao1,volume1,temperatura1,pressao2,volume2,temperatura2)

function pressaoVolume(pressao1,volume1,volume2,){



    if(pressao1<=0 || volume1 <= 0 || pressao2<=0 || volume2 <= 0 ){
        return " OS valores de pressão e volume  devem ser positivas"

    }
    let pressao2 = pressao1 * volume1 /volume2
    return  pressao2
}

function pressaoTemp(pressao1,temperatura1,temperatura2){



    if(pressao1<=0 ||  pressao2<=0  ){
        return " OS valores de pressão devem ser positivas"

    }
    let pressao2 = pressao1 * temperatura2/ temperatura1 
    return  pressao2
}
function volume(pressao1,temperatura1,temperatura2){



    if(pressao1<=0 ||  pressao2<=0  ){
        return " OS valores de pressão devem ser positivas"

    }
    let volume2 = pressao1 * temperatura1 / temperatura1  
    return  volume2

 function temperatura(temperatura1,volume1,temperatura2,volume2,){



    if(| volume1 <= 0 || volume2 <= 0 ){
        return " OS valores volume  devem ser positivas"

    }
    let temperatura2 =  volume2 * temperatura1 / volume1
    return  temperatura2

}

// script.js
const canvasWidth = 400; // Largura do canvas
const canvasHeight = 300; // Altura do canvas
const particles = [];
const numParticles = 50;
const particleSize = 10;
const maxSpeed = 3;
const minSpeed = 1;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(random(width), random(height), random(minSpeed, maxSpeed), random(minSpeed, maxSpeed)));
  }
}

function draw() {
  background(255);
  for (let i = 0; i < numParticles; i++) {
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
