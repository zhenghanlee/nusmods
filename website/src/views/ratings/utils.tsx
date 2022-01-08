export const semCodeToText = (code: string) => {
  const vals = code.split('-');
  return `Semester ${vals[3]} - AY${vals[1]}/${vals[2]}`;
};

const animals = [
  'Antelope',
  'Baboon',
  'Catfish',
  'Dolphin',
  'Eagle',
  'Falcon',
  'Giraffe',
  'Hamster',
  'Iguana',
  'Jaguar',
  'Kangaroo',
  'Lionfish',
  'Maltipoo',
  'Narwhal',
  'Ocelot',
  'Peacock',
  'Quail',
  'Rabbit',
  'Seal',
  'Tiger',
  'Uakari',
  'Vulture',
  'Walrus',
  'Xerus',
  'Yak',
  'Zebra',
];

export const randomAnimal = () => animals[Math.floor(Math.random() * animals.length - 1)];
