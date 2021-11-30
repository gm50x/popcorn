import { Prisma } from '@prisma/client';

import { ids as ownersIds } from './owners.seed';
import { ids as breedsIds } from './breeds.seed';

export const pets: Array<Prisma.PetCreateInput> = [
  {
    name: 'Bob',
    owner: {
      connect: {
        id: ownersIds.jackSparrow,
      },
    },
    breed: {
      connect: {
        id: breedsIds.yorkshireTerrier,
      },
    },
  },
  {
    name: 'Rex',
    owner: {
      connect: {
        id: ownersIds.barbossa,
      },
    },
    breed: {
      connect: {
        id: breedsIds.rottweiler,
      },
    },
  },
  {
    name: 'Melon',
    owner: {
      connect: {
        id: ownersIds.jackSparrow,
      },
    },
    breed: {
      connect: {
        id: breedsIds.goldenRetriever,
      },
    },
  },
  {
    name: 'Yoshi',
    owner: {
      connect: {
        id: ownersIds.davyJones,
      },
    },
    breed: {
      connect: {
        id: breedsIds.maineKoon,
      },
    },
  },
  {
    name: 'Bob',
    owner: {
      connect: {
        id: ownersIds.jackSparrow,
      },
    },
    breed: {
      connect: {
        id: breedsIds.yorkshireTerrier,
      },
    },
  },
];
