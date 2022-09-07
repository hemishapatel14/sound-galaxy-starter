let fft

let Particle = function(position) {
  this.position = position
  this.speed = createVector(1,0.5)
  this.color = [random(0,255),0,random(0,255)]

  this.draw = function() {
    circle(this.position.x, this.position.y, this.diameter)
    fill(this.color)
  }

  this.update =function(energy) {
    this.diameter = random(1,0) + energy * 50
    this.position.y += this.speed.y * energy * 20
    if (this.position.y > height) {
      this.position.y = 0;
    }
    
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()

  let mic = new p5.AudioIn()
  mic.start()

  fft = new p5.FFT()
  fft.setInput(mic)

  positionParticles()
}

function draw() {
  background(0,0,0)
  let spectrum = fft.analyze()
  updateParticles(spectrum)
  //drawParticles()
}