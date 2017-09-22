import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, frame }) {
    super(game, x, y, asset, frame)
    this.canFart = false;
    this.fartCounts = 1;
    this.sideIndex = 0
    this.sides = ["right", "left"]
  }

  update () {
    const cursors = game.input.keyboard.createCursorKeys();

    this.body.velocity.x = 0;

    if (this.body.onFloor()) {
      this.canFart = false;
      this.fartCounts = 1;
    }

    // Move right
    if (cursors.right.isDown) {
      this.sideIndex = 0
      this.body.velocity.x = 220;
    }

    // Move left
    if (cursors.left.isDown) {
      this.sideIndex = 1
      this.body.velocity.x = -220;
    }

    if (cursors.up.isUp && this.fartCounts > 0)  {
      this.canFart = true;
    }

    // Jump
    if (cursors.up.isDown) {
      if (this.body.onFloor()) {
        this.body.velocity.y = -250;
      } else {
        console.log(this.canFart);
        if (this.canFart) {
          this.body.velocity.y = -300;
          this.canFart = false;
          this.fartCounts--;
        }
      }
    }
  }
}
