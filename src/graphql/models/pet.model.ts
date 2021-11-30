import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Breed } from './breed.model';
import { Owner } from './owner.model';

@ObjectType()
export class Pet {
  @Field(type => String)
  id: String;
  @Field(type => String)
  name: String;

  @Field(type => Breed, { nullable: true }) // DEBIT:has some complexity
  breed: Breed;

  @Field(type => Owner, { nullable: true }) // DEBIT:has some complexity
  owner: Owner;

  @Field(type => Int)
  count: number;
}
