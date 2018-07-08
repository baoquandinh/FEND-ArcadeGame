// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 420;
    }
    handleInput(allowedKeys){
        this.inputKey = allowedKeys;
    }
    update(dt){
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
    render(ctx){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// 420.5 424.5 bottom right
// 420.5 -10 top right
// -7 -8 top left
// -7 424.5 bottom left

// hit y is 122-18