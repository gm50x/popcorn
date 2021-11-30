import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

type BreedGetManyParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.BreedWhereUniqueInput;
  where?: Prisma.BreedWhereInput;
  orderBy?: Prisma.BreedOrderByWithRelationInput;
};

@Injectable()
export class BreedsService {
  constructor(private readonly prisma: PrismaService) {}

  async getMany(params: BreedGetManyParams = {}) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.breed.findMany({ skip, take, cursor, where, orderBy });
  }

  async get(whereUnique: Prisma.BreedWhereUniqueInput) {
    return this.prisma.breed.findUnique({ where: whereUnique });
  }

  async create(data: Prisma.BreedCreateInput) {
    return this.prisma.breed.create({ data });
  }

  async update(params: {
    data: Prisma.BreedUpdateInput;
    where: Prisma.BreedWhereUniqueInput;
  }) {
    const { data, where } = params;
    return this.prisma.breed.update({ data, where });
  }

  async delete(whereUnique: Prisma.BreedWhereUniqueInput) {
    return this.prisma.breed.delete({ where: whereUnique });
  }

  async count(where: Prisma.BreedWhereInput = {}) {
    return this.prisma.breed.count({ where });
  }
}
