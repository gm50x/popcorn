import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Pet } from './pet.model';

@ObjectType()
export class Owner {
  @Field(type => String)
  id: String;

  @Field(type => String)
  name: String;

  @Field(type => Date)
  birthdate: Date;

  @Field(type => [Pet], { nullable: true }) // DEBIT: Has complexity
  pets: Array<Pet>;

  @Field(type => Int)
  count: number;
}
