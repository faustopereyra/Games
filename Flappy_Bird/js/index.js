let g = .7  // Gravity
let bird;
let bg;
let swoosh;
let controler = 0
let count = 0
let t = 0
let player, tub, tub2, ground, score

function preload() {
    bird = loadImage("../img/bird.png");
    bg = loadImage("../img/bg.png");
    sprite = loadImage("../img/sprite.png");
    font = loadFont("../img/FlappyBirdy.ttf")
    swoosh = loadSound("../sounds/sfx_swooshing.wav")
    die = loadSound("../sounds/sfx_die.wav")
    wing = loadSound("../sounds/sfx_wing.wav")
    hit = loadSound("../sounds/sfx_hit.wav")
    win = loadSound("../sounds/sfx_point.wav")
}


function setup() {
    window.canvas = createCanvas(windowHeight * 0.47, windowHeight)
    menu()
    start();
}

function draw() {
    image(bg, 0, 0, windowHeight * 0.47, windowHeight)
    noStroke()
    player.show();
    player.update();
    if (tub.tubeOfScreen()) {
        tub = new Tube()
    }

    if (tub2.tubeOfScreen()) {
        tub2 = new Tube()
    }
    tub.show();
    tub.update();
    tub2.show();
    tub2.update();
    ground.show();
    ground.update();
    score.show();
    score.update();
    console.log(controler)
    if (controler == 2) {
        t++
        if (t == 35) {
            menu()
        }

    }

}

addEventListener("keypress", up)
addEventListener("click", up)

function up() {
    if (controler == 0) {
        wing.play()
        player.vel = -windowHeight * 0.017

    }
}


function menu() {

    button = createButton("Play");
    button.position(windowWidth / 2, windowHeight / 2, "fixed");
    button.mousePressed(start)
}

function start() {
    //clear();
    //hideButtons();
    controler = 0
    count = 0
    t = 0
    button.hide()

    player = new Player(canvas.width / 3, canvas.height / 2)
    tub2 = new Tube()
    tub = new Tube()
    tub2.setx(canvas.width * 1.5 + tub.width)
    ground = new Ground()
    score = new Score()
}
























