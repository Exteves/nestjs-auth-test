import { PrismaService } from '@church/prisma';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

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

  findByEmail(email: string): Promise<UserEntity> {
    return this.prismaService.user.findUnique({
      where: { email },
    });
  }
}
