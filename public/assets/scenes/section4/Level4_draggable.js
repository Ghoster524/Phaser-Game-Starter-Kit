export default class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level4_draggable',
        });
    }

    preload() {
        this.load.spritesheet('dude', '/assets/sprites/dude.png', {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        this.square = this.add.rectangle(450, 150, 60, 60, 0, 0)
            .setStrokeStyle(1, 0xffffff)
            .setInteractive({
                dropZone: true,
            })
            .setName('zone')
            .setDepth(1);

        this.dude = this.add.sprite(100, 150, 'dude')
            .setInteractive({
                draggable: true,
            })
            .setName('dude')
            .setDepth(2);

        /** drag events on dude **/
        this.dude.on('dragstart', (pointer, dragX, dragY) => {
        });

        this.dude.on('drag', (pointer, dragX, dragY) => {
            //
            console.log('is dragging');
            this.dude.setX(dragX);
            this.dude.setY(dragY);
        });

        this.dude.on('dragend', (pointer, dragX, dragY) => {
        });

        this.input.on('drop', (pointer, gameObject, dropZone) => {
            if (gameObject.name === 'dude' && dropZone.name === 'zone') {
                this.dude.setX(dropZone.x);
                this.dude.setY(dropZone.y - 5);
            }
        });
    }

    update(time, delta) {
    }
}
