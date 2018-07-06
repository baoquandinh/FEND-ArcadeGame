class Player {
    constructor(startX, startY){
        this.sprite = 'images/char-boy.png';
        this.x = startX,
        this.y = startY;
    }
    update(){
        //console.log("Updating player");
    }
    render(ctx){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    playerInput(){}
}

