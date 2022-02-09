export default class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level5',
        });
    }

    preload() {
        this.load.image('star', '/assets/sprites/star.png');
        this.load.spritesheet('dude', '/assets/sprites/dude.png', {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        this.dude = this.add.sprite(50, 150, 'dude', 4)
            .setDepth(2);
        this.star = this.add.image(300, 200, 'star')
            .setDepth(1);

        this.physics.add.existing(this.dude, false); // add physics to dude

        this.player2 = this.physics.add
            .staticSprite(60, 200, 'dude')
            .setOrigin(0, 0)
            .setOffset(17, 31);
        this.player2.setSize(this.player2.body.width, this.player2.body.height - 8, false);

        // set world bounds
        this.physics.world.setBoundsCollision();

        //this.physics.world.debugGraphic.setVisible(true);
        //this.physics.world.defaults.velocityDebugColor = 0xff0000;
        //this.physics.world.setBounds(50, 50, 300, 250);

        this.dude.body.setCollideWorldBounds(true);
        this.player2.setCollideWorldBounds(true);

        /** colliding, hitting (touching, blocking) **/
        this.physics.add.collider(this.dude, this.player2);

        /** overlapping, triggering **/
        this.physics.add.overlap(this.dude, this.player2, () => {
            console.log("Player has earned a coin!");
        });

        this.player2.setImmovable();
    }

    update(time, delta) {
    }
}
