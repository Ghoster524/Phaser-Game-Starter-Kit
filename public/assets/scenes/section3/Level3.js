export default class Level3 extends Phaser.Scene {
    constructor() {
        super({
            key: 'LevelX_template',
        });
    }

    preload() {
        this.load.image('platform_tiles', '/assets/tiles/arcade_platformerV2-transparent.png');
        this.load.tilemapTiledJSON('map', '/assets/tiles/2dgame/2dgame.json');
    }

    create() {
        const map = this.make.tilemap({
            key: 'map',
            tileWidth: 16,
            tileHeight: 16,
        });
        const tileset = map.addTilesetImage('2dgame_tileset', 'platform_tiles');

        const backgroundLayer = map.createStaticLayer('background', tileset, 0, 0);
        const treeLayer = map.createStaticLayer('trees', tileset, 0, 0);
        const grassLayer = map.createStaticLayer('grass', tileset, 0, 0);
        const terrainLayer = map.createStaticLayer('terrain', tileset, 0, 0);
    }

    update(time, delta) {
    }
}
