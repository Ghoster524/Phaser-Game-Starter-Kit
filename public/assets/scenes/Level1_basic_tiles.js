export default class Level1_basic_tiles extends Phaser.Scene {
    constructor() {
        super({
            key: 'LevelX_template',
        });
    }

    preload() {
        this.load.image('platform_tiles', '/assets/tiles/arcade_platformerV2-transparent.png');
        this.load.tilemapTiledJSON('map', '/assets/tiles/platformTiled.json');
    }

    create() {
        const map = this.make.tilemap({
            key: 'map',
            tileWidth: 16,
            tileHeight: 16,
        });
        const tileset = map.addTilesetImage('arcade_platformerV2', 'platform_tiles');

        const backgroundLayer = map.createStaticLayer('background', tileset, 0, 0);
        const treeLayer = map.createStaticLayer('trees', tileset, 0, 0);
        const terrainLayer = map.createStaticLayer('Terrain', tileset, 0, 0);

        terrainLayer.setCollisionByProperty({
            collides: true,
        });
    }

    update(time, delta) {
    }
}
