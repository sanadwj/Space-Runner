import Phaser from 'phaser';
import TitleScene from '../scenes/TitleScene';
import 'jest-expect-subclass';

test('TitleScene should be a subclass of Phaser.Scene', () => {
  expect(TitleScene).toBeSubclassOf(Phaser.Scene);
});