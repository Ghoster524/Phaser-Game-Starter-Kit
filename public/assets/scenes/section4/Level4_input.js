export default class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level4_input',
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

        this.input.enabled = true; // enable input, is necessary

        /** input keys **/
        this.dKey = this.input.keyboard.addKey('D'); // all keys are capatilized, see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/keyboardevents/#key-map
        this.aKey = this.input.keyboard.addKey('A');
        this.wKey = this.input.keyboard.addKey('W');
        this.sKey = this.input.keyboard.addKey('S');

        this.cursorKeys = this.input.keyboard.createCursorKeys(); // use arrow keys

        this.input.mouse.disableContextMenu(); // disable default menu

        /** pointer events **/
        this.input.on('pointerdown', pointer => {
            console.log(`left mouse button pressed: ${pointer.leftButtonDown()}`);
        });

        /** pointer events on dude **/
        // pointerdown, pointerover, pointerout
        this.dude.on('pointerover', pointer => {
            this.dude.setX(this.dude.x + (this.dude.x > 250 ?  -50 : 50));
            this.dude.setY(this.dude.y + (this.dude.y > 250 ?  -50 : 50));
        });
    }

    update(time, delta) {
        if (this.dKey.isDown || this.cursorKeys.right.isDown) this.dude.setX(this.dude.x + 1);
        else if (this.aKey.isDown || this.cursorKeys.left.isDown) this.dude.setX(this.dude.x - 1);

        if (this.wKey.isDown || this.cursorKeys.up.isDown) this.dude.setY(this.dude.y - 1);
        else if (this.sKey.isDown || this.cursorKeys.down.isDown) this.dude.setY(this.dude.y + 1);

        if (Phaser.Input.Keyboard.JustDown(this.dKey)) {
            console.log('D key has been pressed');
        }
    }
}
