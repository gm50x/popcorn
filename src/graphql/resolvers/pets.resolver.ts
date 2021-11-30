import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Int,
} from '@nestjs/graphql';

import { Pet as PetModel } from '@prisma/client';
import { Pet, Owner, Breed } from '@popcorn/graphql/models';
import { OwnersService, PetsService, BreedsService } from '@popcorn/services';

@Resolver(of => Pet)
export class PetsResolver {
  constructor(
    private readonly petsService: PetsService,
    private readonly ownersService: OwnersService,
    private readonly breedsService: BreedsService,
  ) {}

  @Query(returns => Pet, { name: 'pet', nullable: true })
  async getPet(@Args('id') id: string) {
    return this.petsService.get({ id });
  }

  @Query(returns => [Pet], { name: 'pets', nullable: true })
  async getPets() {
    return this.petsService.getMany();
  }

  @ResolveField(of => Owner, { name: 'owner', nullable: true })
  async getOwerOfPet(@Parent() parent: PetModel) {
    const { ownerId: id } = parent;
    return this.ownersService.get({ id });
  }

  @ResolveField(of => Breed, { name: 'breed', nullable: true })
  async getBreed(@Parent() parent: PetModel) {
    const { breedId: id } = parent;
    return this.breedsService.get({ id });
  }

  @ResolveField(of => Int, { name: 'count' })
  async getCount() {
    return this.petsService.count();
  }
}
