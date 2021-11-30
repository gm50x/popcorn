import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

type PetGetManyParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.PetWhereUniqueInput;
  where?: Prisma.PetWhereInput;
  orderBy?: Prisma.PetOrderByWithRelationInput;
};

@Injectable()
export class PetsService {
  constructor(private readonly prisma: PrismaService) {}

  async getMany(params: PetGetManyParams = {}) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.pet.findMany({ skip, take, cursor, where, orderBy });
  }

  async get(whereUnique: Prisma.PetWhereUniqueInput) {
    return this.prisma.pet.findUnique({ where: whereUnique });
  }

  async create(data: Prisma.PetCreateInput) {
    return this.prisma.pet.create({ data });
  }

  async update(params: {
    data: Prisma.PetUpdateInput;
    where: Prisma.PetWhereUniqueInput;
  }) {
    const { data, where } = params;
    return this.prisma.pet.update({ data, where });
  }

  async delete(whereUnique: Prisma.PetWhereUniqueInput) {
    return this.prisma.pet.delete({ where: whereUnique });
  }

  async count(where: Prisma.PetWhereInput = {}) {
    return this.prisma.pet.count({ where });
  }
}
