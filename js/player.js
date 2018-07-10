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
                this.y -= dt * 2000;
                this.inputKey = null;
                console.log(player.x, player.y);
                break;
            case 'down':
                this.y += dt * 2000;
                this.inputKey = null;
                console.log(player.x, player.y);
                break;
                case 'left':
                this.x -= dt * 2000;
                this.inputKey = null;
                console.log(player.x, player.y);
                break;
                case 'right':
                this.x += dt * 2000;
                this.inputKey = null;
                console.log(player.x, player.y);
                break;
            default:
        }     
    }

    loseLife() {
        this.lifeRemaining -= 1;
        document.querySelector(".player-life").textContent = this.lifeRemaining;
    }

    render(ctx) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}