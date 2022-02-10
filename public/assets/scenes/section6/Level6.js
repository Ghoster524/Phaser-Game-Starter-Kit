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

        this.player1 = this.add
            .sprite(200, 200, 'dude');
        this.player2 = this.add
            .sprite(60, 200, 'dude');

        this.player1AnimationTimeline();
    }

    player1AnimationTimeline() {
        this.player1Timeline = this.tweens.timeline({
            targets: this.player1,
            ease: 'Linear',
            duration: 1000,
            loop: 2,
            tweens: [
                {
                    x: '-=50',
                    y: '-=50',
                },
                {
                    x: '+=50'
                },
                {
                    y: '+=50'
                },
                {
                    x: '-=50'
                },
                {
                    y: '-=50'
                },
            ],
        });
    }

    player2AnimationTween() {
        this.tween = this.tweens.add({
            targets: this.player1,
            x: 400,
            y: 50,
            ease: 'Elastic',
            duration: 1000,
            yoyo: false,
            onStart: () => {
                //this.player1.
            },
            onStop: () => {
            },
        });

        // this.tween.pause();
        // this.tween.resme();
    }

    update(time, delta) {
    }
}
