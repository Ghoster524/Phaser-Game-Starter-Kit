export default class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level6',
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
        this.star = this.add.image(300, 200, 'star')
            .setDepth(1);

        this.player1 = this.physics.add
            .sprite(120, 200, 'dude');
        this.player2 = this.physics.add
            .sprite(60, 200, 'dude')

        // set world bounds
        this.physics.world.setBoundsCollision();

        this.player1.setCollideWorldBounds(true);
        this.player2.setCollideWorldBounds(true);

        /** colliding, hitting (touching, blocking) **/
        this.physics.add.collider(this.player1, this.player2);

        /** overlapping, triggering **/
        /*this.physics.add.overlap(this.player1, this.player2, () => {
            console.log('Player has earned a coin!');
        });*/
    }

    update(time, delta) {
    }
}
