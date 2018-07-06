class Player {
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.x = 0;
        this.y = 0;
    }
    update(){
        //console.log("Updating player");
    }
    render(ctx){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    playerInput(){}
}

