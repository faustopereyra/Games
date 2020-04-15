class Tube {
    constructor() {
        this.void = windowHeight * 0.24
        this.width = windowHeight * 0.09
        this.x = canvas.width
        this.y = 0
        this.height = (Math.floor(Math.random() * 5) * 80) + (40)
        this.y2 = this.height + this.void
        this.height2 = canvas.height - this.y2
        this.vel = windowHeight * 0.004
    }

    show() {

        //fill(255, 204, 0);
        //rect(this.x, this.y, this.width, this.height);
        if (this.height < 500) {
            image(sprite.get(100, 0, 101, 500), this.x, this.height, this.width, -500)
        } else {
            image(sprite.get(0, 0, 101, 500), this.x, this.y2, this.width, 500);
            image(sprite.get(0, 100, 101, this.height), this.x, this.y2, this.width, 500)
        }

        if (this.height < 500) {
            image(sprite.get(0, 0, 101, 500), this.x, this.y2, this.width, 500)
        } else {
            image(sprite.get(0, 0, 101, 500), this.x, this.y2, this.width, 500);
            image(sprite.get(0, 100, 101, this.height), this.x, this.y2, this.width, 500)
        }

        //fill(255, 204, 0);
        // rect(this.x, this.y2, this.width, this.height2);
    }

    update() {
        if (controler == 0) {
            this.x -= this.vel

            if (dist(player.x, player.y, this.x, player.y) > this.width * 1.2) {

            } else {
                count++

            }
        }

    }

    setx(newX) {
        this.x = newX;
    }

    tubeOfScreen() {
        if (this.x < 0 - this.width * 2) { return true }
    }

    onPoint() {
        if ((player.x < this.x + this.width &&
            player.x + player.size > this.x &&
            player.y < this.y + this.height &&
            player.size + player.y > this.y) ||


            (player.x < this.x + this.width &&
                player.x + player.size > this.x &&
                player.y < this.y2 + this.height2 &&
                player.size + player.y > this.y2)) {
            return true
        }


    }
}