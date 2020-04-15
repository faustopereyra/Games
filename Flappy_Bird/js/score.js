class Score {
    constructor() {
        this.score = 0
        this.width = canvas.width / 4
        this.height = canvas.height / 15
    }

    show() {
        textFont(font);
        textSize(canvas.width / 10);
        textAlign(CENTER);
        fill(255);
        text(this.score, (canvas.width - this.width) * 0.5, 20, this.width, this.height)
    }

    update() {
        if (count == 54) {
            this.score += 1
            win.play();
            count = 0
        }
    }



}