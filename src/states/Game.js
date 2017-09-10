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
      asset: 'player',
      frame: 3
    })

    let bg = game.add.tileSprite(0, 0, 512, 384, 'bg');
    bg.fixedToCamera = true;

    this.map = this.game.add.tilemap('map')

    this.map.addTilesetImage('ground')

    this.layer = this.map.createLayer('platforms')

    this.layer.resizeWorld()

    this.map.setCollisionBetween(1, 12)

    this.layer.debug = true;

    this.game.add.existing(this.player)

    this.game.camera.follow(this.player);

    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

    this.player.fartTween = game.add.tween(this.player).to( { angle: 360 }, 800, "Quart.easeOut");
    this.player.fartTween.target.pivot.x = 12
    this.player.fartTween.target.pivot.y = 17

    this.player.body.gravity.y = 760;

  }

  update() {
    this.game.physics.arcade.collide(this.player, this.layer)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.player, 36, 36)
    }
  }
}
