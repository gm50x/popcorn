import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Breed } from './breed.model';

@ObjectType()
export class Specie {
  @Field(type => String)
  id: String;

  @Field(type => String)
  name: String;

  @Field(type => [Breed], { nullable: true }) // DEBIT:Has complexity
  breeds: Array<Breed>;

  @Field(type => Int)
  count: number;
}
