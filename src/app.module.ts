import { Module } from '@nestjs/common';

import {
  PrismaService,
  OwnersService,
  PetsService,
  BreedsService,
  SpeciesService,
} from './services';

import {
  PetsResolver,
  BreedsResolver,
  OwnersResolver,
  SpeciesResolver,
  ComplexityPlugin,
} from './graphql';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      sortSchema: true,
      autoSchemaFile: 'schema.graphql',
    }),
  ],
  providers: [
    PrismaService,
    OwnersService,
    PetsService,
    BreedsService,
    SpeciesService,
    PetsResolver,
    BreedsResolver,
    OwnersResolver,
    SpeciesResolver,
    ComplexityPlugin,
  ],
})
export class AppModule {}
