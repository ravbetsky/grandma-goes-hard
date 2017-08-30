/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {

    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'player'
    })

    this.game.add.existing(this.player)

    game.physics.enable(this.player, Phaser.Physics.ARCADE);

    this.player.fartTween = game.add.tween(this.player).to( { angle: 360 }, 800, "Quart.easeOut");
    this.player.fartTween.target.pivot.x = 12
    this.player.fartTween.target.pivot.y = 17

    this.player.body.gravity.y = 760;

    this.player.body.collideWorldBounds = true;
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.player, 24, 34)
    }
  }
}
