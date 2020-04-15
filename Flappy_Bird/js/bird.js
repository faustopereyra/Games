class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vel = g
        this.size = windowHeight * 0.053
    }


    show() {

        push(this.x, this.y, this.size, this.size);
        translate(this.width / 2, this.height / 2)
        if (this.vel < 1) {
            //rotate(-PI / 6, [this.x, this.y, 0]);
        }
        image(bird, this.x, this.y, this.size, this.size);
        pop();
    }

    update() {
        if (controler == 0) {

            this.vel += g
            this.y += this.vel
            if (!this.isDead()) {

            } else {

                stop()
            }
        } else if (controler == 1) {
            controler++
            hit.play()
            die.play()
            //this.fall()
        } else {
            this.y += g * 15
        }
    }

    isDead() {
        if (this.y > ground.y) controler++;
        if (tub.onPoint() || tub2.onPoint()) controler++;
    }


};