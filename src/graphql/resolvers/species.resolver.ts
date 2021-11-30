import {
  Args,
  Resolver,
  Query,
  ResolveField,
  Parent,
  Int,
} from '@nestjs/graphql';
import { Specie as SpecieModel } from '@prisma/client';
import { Breed, Specie } from '@popcorn/graphql/models';
import { BreedsService, SpeciesService } from '@popcorn/services';

@Resolver(of => Specie)
export class SpeciesResolver {
  constructor(
    private readonly speciesService: SpeciesService,
    private readonly breedsService: BreedsService,
  ) {}

  @Query(returns => Specie, { name: 'specie', nullable: true })
  async getSpecie(@Args('id') id: string) {
    return this.speciesService.get({ id });
  }

  @Query(returns => [Specie], { name: 'species', nullable: true })
  async getSpecies() {
    return this.speciesService.getMany();
  }

  @ResolveField(of => [Breed], { name: 'breeds', nullable: true })
  async getBreedsOfSpecie(@Parent() parent: SpecieModel) {
    const { id } = parent;
    return this.breedsService.getMany({ where: { specieId: id } });
  }

  @ResolveField(of => Int, { name: 'count' })
  async getCount() {
    return this.speciesService.count();
  }
}
