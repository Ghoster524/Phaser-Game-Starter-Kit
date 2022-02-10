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
            .sprite(200, 50, 'dude');
        this.player2 = this.add
            .sprite(60, 200, 'dude');

        this.player1AnimationTimeline();
    }

    player1AnimationTimeline() {
        this.player1Timeline = this.tweens.timeline({
            targets: this.player1,
            ease: 'Power2',
            duration: 2000,
            loop: 2,
            x: this.player1.x,
            y: this.player1.y,
            onLoop: () => {
            },
            tweens: [
                {
                    y: this.player1.y + 60,
                    x: this.player1.x + 60,
                },
                {
                    x: this.player1.x,
                    y: this.player1.y + 120,
                },
                {
                    x: this.player1.x - 60,
                    y: this.player1.y + 60,
                },
                {
                    y: this.player1.y,
                    x: this.player1.x,
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
