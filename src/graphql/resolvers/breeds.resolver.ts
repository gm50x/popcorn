import { Args, Resolver, Query, ResolveField, Parent, Int } from '@nestjs/graphql';
import { Breed as BreedModel } from '@prisma/client';
import { Breed, Pet, Specie } from '@popcorn/graphql/models';
import { PetsService, BreedsService, SpeciesService } from '@popcorn/services';

@Resolver(of => Breed)
export class BreedsResolver {
  constructor(
    private readonly breedsService: BreedsService,
    private readonly speciesService: SpeciesService,
    private readonly petsService: PetsService,
  ) {}

  @Query(returns => Breed, { name: 'breed', nullable: true })
  async getBreed(@Args('id') id: string) {
    return this.breedsService.get({ id });
  }

  @Query(returns => [Breed], { name: 'breeds', nullable: true })
  async getBreeds() {
    return this.breedsService.getMany();
  }

  @ResolveField(of => Int, {name: 'count'})
  async getCount() {
    return this.breedsService.count()
  }

  @ResolveField(of => Specie, { name: 'specie', nullable: true })
  async getSpecieOfBreed(@Parent() parent: BreedModel) {
    const { specieId: id } = parent;
    return this.speciesService.get({ id });
  }

  @ResolveField(of => [Pet], { name: 'pets', nullable: true })
  async getPetsOfBreed(@Parent() parent: BreedModel) {
    const { id } = parent;
    return this.petsService.getMany({ where: { breedId: id } });
  }
}
