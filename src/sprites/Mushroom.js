import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
  }

  update () {
    const cursors = game.input.keyboard.createCursorKeys();
    if (cursors.right.isDown) {
      this.angle += 0.5
    }
    if (cursors.left.isDown) {
      this.angle -= 0.5
    }
  }
}
