import { PrismaService } from '@itaquera/prisma';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prismaService.user.create({ data });

    return new UserEntity(createdUser);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const foundUser = await this.prismaService.user.findUnique({
      where: { email },
    });

    return new UserEntity(foundUser);
  }
}
