export default class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level1_container',
        });
    }

    preload() {
        this.load.image('star', '/assets/sprites/star.png');
    }

    create() {
        const starName = 'star';
        this.stars = this.add.container(35, 35);

        let star1 = this.add.sprite(0, 0, starName);
        let star2 = this.add.sprite(30, 0, starName);
        let star3 = this.add.sprite(60, 0, starName);

        this.stars.add([star1, star2, star3]);

        // zone
        this.endZone = this.add.zone(200, 200, 50 , 50);
        this.physics.world.enable(this.endZone);
        this.endZone.body.setAllowGravity(false);
    }

    update(time, delta) {
    }
}
