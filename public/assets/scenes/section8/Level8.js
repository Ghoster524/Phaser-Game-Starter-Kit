const musicKey = 'bgmusic';

export default class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level8',
        });
    }

    preload() {
        this.load.audio(musicKey, ['/assets/audio/first-audio.ogg']);
    }

    create() {
        console.log(1);
        this.bgmusic = this.sound.add(musicKey, {
            mute: false,
            volume: 0.5,
        });
        this.bgmusic.play();

        // basic methodes
        this.bgmusic.setVolume(0.25);
        // this.bgmusic.pause();
        // this.bgmusic.resume();
        // this.bgmusic.setMute(true or false);
        // this.bgmusic.setDetune(-500);
        // this.bgmusic.setLoop(true or false);
    }

    update(time, delta) {
    }
}
