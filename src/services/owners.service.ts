import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

type OwnerGetManyParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.OwnerWhereUniqueInput;
  where?: Prisma.OwnerWhereInput;
  orderBy?: Prisma.OwnerOrderByWithRelationInput;
};

@Injectable()
export class OwnersService {
  constructor(private readonly prisma: PrismaService) {}

  async getMany(params: OwnerGetManyParams = {}) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.owner.findMany({ skip, take, cursor, where, orderBy });
  }

  async get(whereUnique: Prisma.OwnerWhereUniqueInput) {
    return this.prisma.owner.findUnique({ where: whereUnique });
  }

  async create(data: Prisma.OwnerCreateInput) {
    return this.prisma.owner.create({ data });
  }

  async update(params: {
    data: Prisma.OwnerUpdateInput;
    where: Prisma.OwnerWhereUniqueInput;
  }) {
    const { data, where } = params;
    return this.prisma.owner.update({ data, where });
  }

  async delete(whereUnique: Prisma.OwnerWhereUniqueInput) {
    return this.prisma.owner.delete({ where: whereUnique });
  }

  async count(where: Prisma.OwnerWhereInput = {}) {
    return this.prisma.owner.count({ where });
  }
}
