class Ground {
    constructor() {
        this.x = 0;
        this.y = canvas.height * (12 / 13);
        this.width = canvas.width;
        this.height = canvas.height - this.y;
    }

    show() {
        if (controler == 0) {
            for (let i = 0; this.x + i <= canvas.width + 30; i += 30) {
                image(sprite.get(200, 60, 30, 100), this.x + i, this.y, 30, this.height)
            }
        } else {
            for (let i = 0; i <= canvas.width + 30; i += 30) {
                image(sprite.get(200, 60, 30, 100), i, this.y, 30, this.height)
            }

        }
    }
    update() {
        this.x -= tub.vel
    }
}