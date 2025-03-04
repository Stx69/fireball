// @ts-nocheck
import Phaser from 'phaser';

import { COLORS, DISTRICTS } from 'data/citadel.data';
import { CITADEL_HEIGHT, CITADEL_WIDTH } from 'data/citadel.data';

export class DistrictsGrid extends Phaser.GameObjects.Graphics {
  constructor(scene) {
    super(scene);
    scene.add.existing(this);

    this.setPosition(-CITADEL_WIDTH / 2, -CITADEL_HEIGHT / 2);

    this.createLines();

    scene.on('zoom', () => this.createLines());
  }

  createLines() {
    const { w, h } = DISTRICTS;

    this.clear();

    this.lineStyle(3 / this.scene.cameras.main.zoom, COLORS.grid, 0.5);

    for (const line of DISTRICTS.lineMap) {
      this.beginPath();

      this.moveTo(line[0] * w, line[1] * h);
      this.lineTo(line[2] * w, line[3] * h);

      this.closePath();
      this.strokePath();
    }
  }
}
