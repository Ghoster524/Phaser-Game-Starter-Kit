export default class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level4',
        });
    }

    preload() {
        //
        this.load.spritesheet('dude', '/assets/sprites/dude.png', {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        this.dude = this.add.sprite(100, 150, 'dude');
    }

    update(time, delta) {
    }
}
