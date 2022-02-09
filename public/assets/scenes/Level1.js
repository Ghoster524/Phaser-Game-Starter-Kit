export default class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level1',
        });
    }

    preload() {
        this.load.image('star', '/assets/img/star.png');

        this.load.script(
            'myfont',
            'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
        );
    }

    create() {
        // Display different kinds of shapes
        this.square = this.add.rectangle(200, 200, 200, 150, 0xff0000); // fill color is red
        this.square.setStrokeStyle(1, 0x0000ff, 1); // border color is blue

        this.circle = this.add.circle(200, 200, 50, 0xffff00);
        this.circle.setStrokeStyle(1, 0x00ff00, 1);

        // Game title
        this.gameTitle = this.add.text(50, 50, 'This is my title', {
            fontSize: 20,
        });

        // Another game title, but loaded with font
        WebFont.load({
            google: {
                families: ['Fredericka the Great'],
            },
            active: () => {
                this.myWeirdTitle = this.add
                    .text(275, 35, `Weird`, {
                        fontFamily: 'Fredericka the Great',
                        fontSize: 50,
                        color: '#ffffff',
                    })
                    .setShadow(2, 2, '#333333', 2, false, true);
            },
        });

        this.number = 0;

        // Create group of stars
        this.stars = this.add.group({
            key: 'star',
            frame: [0, 0, 0, 0, 0], // in case of a sprite
            setXY: {
                x: 100,
                y: 100,
                stepX: 30, // offset of each star
                stepY: 0,
            },
            setAlpha: {
                value: 1,
                step: -0.2,
            },
        });
    }

    update(time, delta) {
        this.myWeirdTitle?.setText(`Weird: ${this.number++}`); // using ?, because font is still loading and then variable won't exists
    }
}
