import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

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
  formatError,
} from './graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      sortSchema: true,
      autoSchemaFile: 'schema.graphql',
      formatError,
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
