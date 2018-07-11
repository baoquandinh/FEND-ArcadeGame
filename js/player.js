// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 420;
        this.lifeRemaining = parseInt(document.querySelector(".player-life").textContent);
        // this.lifeCounter = parseInt(this.lifeRemaining);
    }
    handleInput(allowedKeys) {
        this.inputKey = allowedKeys;
    }
    update(dt) {
        switch (this.inputKey) {
            case 'up':
                if (this.y < -16) {
                    this.input = null;
                } else {
                    this.y -= dt * 2000;
                    this.inputKey = null;
                    console.log(player.x, player.y);
                }     
                break;
            case 'down':
                if (this.y > 440) {
                    this.input = null;
                } else {
                    this.y += dt * 2000;
                   this.inputKey = null;
                    console.log(player.x, player.y);
                }
                break;
            case 'left':
            if (this.x < -10) {
                this.input = null;
            } else {
                this.x -= dt * 2000;
                this.inputKey = null;
                console.log(player.x, player.y);
            }     
                break;
            case 'right':
                if (this.x > 420) {
                    this.input = null;
                } else {
                    this.x += dt * 2000;
                    this.inputKey = null;
                    console.log(player.x, player.y);    
                }
                break;
            default:
            break;
        }     
        console.log(player.x , player.y);
    }

    loseLife() {
        this.lifeRemaining -= 1;
        document.querySelector(".player-life").textContent = this.lifeRemaining;
        this.x = 200, this.y = 420;
    }

    reset() {
        this.x = 200, this.y = 420;
        this.lifeRemaining = 5;
        document.querySelector(".player-life").textContent = this.lifeRemaining;
    }

    default() {
        this.x = 200, this.y = 420;
    }

    render(ctx) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}