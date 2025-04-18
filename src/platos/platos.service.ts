import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PlatosService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }
  create(createPlatoDto: CreatePlatoDto) {
    return 'This action adds a new plato';
  }

  findAll() {
    return `This action returns all platos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plato`;
  }

  update(id: number, updatePlatoDto: UpdatePlatoDto) {
    return `This action updates a #${id} plato`;
  }

  remove(id: number) {
    return `This action removes a #${id} plato`;
  }
}
