import { Prisma } from '@prisma/client';

export const ids = {
  jackSparrow: '7b77eda6-7039-489f-9e91-6f94b9eaf0d3',
  blackBeard: '22a117ab-6603-462d-8265-2983cdfc35b9',
  davyJones: 'cf38df86-7922-4485-b3ba-de64f09575ec',
  barbossa: 'c5ecf031-2d4d-42b8-bf7a-8e8ea21b3994',
};

export const owners: Array<Prisma.OwnerCreateInput> = [
  {
    id: ids.jackSparrow,
    name: 'Jack Sparrow',
    birthdate: new Date(2000, 0, 1),
  },
  {
    id: ids.blackBeard,
    name: 'Black Beard',
    birthdate: new Date(2000, 0, 1),
  },
  {
    id: ids.davyJones,
    name: 'Davy Jones',
    birthdate: new Date(2000, 0, 1),
  },
  {
    id: ids.barbossa,
    name: 'Barbossa',
    birthdate: new Date(2000, 0, 1),
  },
];
