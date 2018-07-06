// Enemies our player must avoid
class Enemy {
    constructor(startX, startY){
        this.sprite = 'images/enemy-bug.png';
        this.x = startX;
        this.y = startY;
    }
    // Update the enemy's position
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    };

    // Draw the enemy on the screen
    render(ctx) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
};

