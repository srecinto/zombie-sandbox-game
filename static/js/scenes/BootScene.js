export default class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot");
        console.log("BootScene.constructor()");
    }
     
    preload() {
        console.log("BootScene.preload()");
        this.load.image('logo_bbg', '/assets/images/logos/ir_logo_b.png');
    }
     
    create () {
        console.log("BootScene.create()");
        this.scene.start("Preloader");
    }
};