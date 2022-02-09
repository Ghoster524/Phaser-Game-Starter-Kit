// import { Game } from './phaser.min.js';
import Intro from './scenes/Intro.js';
import Level1_basic_tiles from './scenes/section3/Level3.js';

var config = {
	type: Phaser.AUTO,
	width: 640,
	height: 360,
	scale: {
		scale: 'SHOW_ALL',
		orientation: 'LANDSCAPE'
	},
	resolution: window.devicePixelRatio,
	pixelArt: true,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: {
				y: 500
			}
		}
	},
	scene: [Level1_basic_tiles]
};

var game = new Phaser.Game(config);
