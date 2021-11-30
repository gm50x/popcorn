import { Prisma } from '@prisma/client';

import { ids as speciesIds } from './species.seed';

export const ids = {
  yorkshireTerrier: '8ed2d002-98ef-424b-9b60-b695f5327d45',
  rottweiler: '22b40c18-a452-4c85-bab2-fa83934bc0af',
  goldenRetriever: 'f64174d1-c940-4467-b0a5-7e0de383f258',
  maineKoon: 'c21b819d-fdbf-4ab5-bff1-62944d653c52',
};

export const breeds: Array<Prisma.BreedCreateInput> = [
  {
    id: ids.yorkshireTerrier,
    name: 'Yorkshire Terrier',
    specie: {
      connect: {
        id: speciesIds.dog,
      },
    },
  },
  {
    id: ids.rottweiler,
    name: 'Rottweiler',
    specie: {
      connect: {
        id: speciesIds.dog,
      },
    },
  },
  {
    id: ids.goldenRetriever,
    name: 'Golden Retriever',
    specie: {
      connect: {
        id: speciesIds.dog,
      },
    },
  },
  {
    id: ids.maineKoon,
    name: 'Maine Koon',
    specie: {
      connect: {
        id: speciesIds.cat,
      },
    },
  },
];
