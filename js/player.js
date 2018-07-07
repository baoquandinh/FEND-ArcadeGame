// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 200;
    }
    handleInput(allowedKeys){
        this.inputKey = allowedKeys;
        console.log(this.inputKey);
    }
    update(){
        console.log("Updating player");
        console.log(this.inputKey);
        switch (this.inputKey) {
            case 'up':
                this.y -=100;
                this.inputKey = null;
                break;
            case 'down':
                this.y += 100;
                this.inputKey = null;
                break;
                case 'left':
                this.x -= 100;
                this.inputKey = null;
                break;
                case 'right':
                this.x += 100;
                this.inputKey = null;
                break;
            default:
            console.log("Not moving");
        }
    }
    render(ctx){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

