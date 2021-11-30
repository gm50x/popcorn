import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

type SpecieGetManyParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.SpecieWhereUniqueInput;
  where?: Prisma.SpecieWhereInput;
  orderBy?: Prisma.SpecieOrderByWithRelationInput;
};

@Injectable()
export class SpeciesService {
  constructor(private readonly prisma: PrismaService) {}

  async getMany(params: SpecieGetManyParams = {}) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.specie.findMany({ skip, take, cursor, where, orderBy });
  }

  async get(whereUnique: Prisma.SpecieWhereUniqueInput) {
    return this.prisma.specie.findUnique({ where: whereUnique });
  }

  async create(data: Prisma.SpecieCreateInput) {
    return this.prisma.specie.create({ data });
  }

  async update(params: {
    data: Prisma.SpecieUpdateInput;
    where: Prisma.SpecieWhereUniqueInput;
  }) {
    const { data, where } = params;
    return this.prisma.specie.update({ data, where });
  }

  async delete(whereUnique: Prisma.SpecieWhereUniqueInput) {
    return this.prisma.specie.delete({ where: whereUnique });
  }

  async count(where: Prisma.SpecieWhereInput = {}) {
    return this.prisma.specie.count({ where });
  }
}
