import { Prisma } from '@prisma/client';

export const ids = {
  dog: 'f1db5deb-dec7-4a6d-9fad-58965d17baef',
  cat: '7319e65b-d47e-4b07-9387-543b369a34dc',
};
export const species: Array<Prisma.SpecieCreateInput> = [
  { id: ids.dog, name: 'Dog' },
  { id: ids.cat, name: 'Cat' },
];
