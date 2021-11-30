import {
  Args,
  Resolver,
  Query,
  ResolveField,
  Parent,
  Int,
} from '@nestjs/graphql';
import { Owner as OwnerModel } from '@prisma/client';
import { Owner, Pet } from '@popcorn/graphql/models';
import { OwnersService, PetsService } from '@popcorn/services';

@Resolver(of => Owner)
export class OwnersResolver {
  constructor(
    private readonly ownersService: OwnersService,
    private readonly petsService: PetsService,
  ) {}

  @Query(returns => Owner, { name: 'owner', nullable: true })
  async getOwner(@Args('id') id: string) {
    return this.ownersService.get({ id });
  }

  @Query(returns => [Owner], { name: 'owners', nullable: true })
  async getOwners() {
    return this.ownersService.getMany();
  }

  @ResolveField(of => Int, { name: 'count' })
  async getCount() {
    return this.ownersService.count();
  }

  @ResolveField(of => [Pet], { name: 'pets', nullable: true })
  async getPetsOfOwner(@Parent() parent: OwnerModel) {
    const { id } = parent;
    return this.petsService.getMany({
      where: { owner: { id } },
    });
  }
}
