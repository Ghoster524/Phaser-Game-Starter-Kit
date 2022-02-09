export default class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level1-basic-animation',
        });
    }

    preload() {
        this.load.image('star', '/assets/sprites/star.png'); // load image

        this.load.spritesheet('dude', '/assets/sprites/dude.png', {
            frameWidth: 32,
            frameHeight: 48,
        });

        this.load.atlas({
            key: 'character_sprites',
            textureURL: '/assets/atlas/sprites.png',
            atlasURL: '/assets/atlas/sprites.json',
        });
    }

    create() {
        this.star = this.add.image(600, 30, 'star'); // create image, create star property in scene class

        this.dude = this.add.sprite(200, 150, 'dude', 4).setScale(2, 2); // sprite, frame 4

        // create animation
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', {
                start: 0,
                end: 3,
            }),
            frameRate: 5,
            repeat: -1,
        });

        this.dude.anims.play('left', true); // add animation to dude

        this.boy = this.add
            .sprite(100, 25, 'character_sprites', 'jacen1.png')
            .setFlip(true, false); // create boy image, from atlas resource, mirror it on x-as

        const frameNames = [
            {key: 'character_sprites', frame: 'jacen2.png'},
            {key: 'character_sprites', frame: 'jacen3.png'},
            {key: 'character_sprites', frame: 'jacen4.png'},
            {key: 'character_sprites', frame: 'jacen5.png'},
        ];

        this.anims.create({
            key: 'right',
            frames: frameNames,
            frameRate: 5,
            repeat: -1,
        });

        this.boy.anims.play('right', true);
    }

    update(time, delta) {
    }
}
