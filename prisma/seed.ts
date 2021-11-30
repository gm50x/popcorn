import { PrismaClient } from '@prisma/client';
import { breeds, species, owners, pets } from './seeds';

const prisma = new PrismaClient();

async function main() {
  if (!process.env.DATABASE_URL.includes('localhost')) {
    throw new Error(
      'Applying this seed on a non local database is not allowed',
    );
  }

  for (const data of species) {
    await prisma.specie.create({ data });
  }

  for (const data of breeds) {
    await prisma.breed.create({ data });
  }

  for (const data of owners) {
    await prisma.owner.create({ data });
  }

  for (const data of pets) {
    await prisma.pet.create({ data });
  }
}

main()
  .catch(err => {
    console.log(err.stack);
    console.log(err.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
