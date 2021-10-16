import { getRandomArrayElement } from './util.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Валентин',
];
const SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
  'Петухов',
];
const COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
const EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];
const SIMILAR_WIZARD_COUNT = 4;

const createWizard = () => ({
  name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`,
  coatColor: getRandomArrayElement(COAT_COLORS),
  eyesColor: getRandomArrayElement(EYES_COLORS),
});

const createWizards = () => new Array(SIMILAR_WIZARD_COUNT).fill(null).map(() => createWizard());

export { createWizards };
