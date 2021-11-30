import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Specie } from './specie.model';
import { Pet } from './pet.model';

@ObjectType()
export class Breed {
  @Field(type => String)
  id: String;

  @Field(type => String)
  name: String;

  @Field(type => Specie, { nullable: true }) // DEBIT: Has Complexity
  specie: Specie;

  @Field(type => [Pet], { nullable: true }) // DEBIT: Has Complexity
  pets: Array<Pet>;

  @Field(type => Int)
  count: number;
}
