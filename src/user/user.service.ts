import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`El usuario con el ID ${id} no se encontró`);
    }
    // Actualiza las propiedades del usuario según el DTO de actualización
    Object.assign(user, updateUserDto);
    await this.usersRepository.save(user); // Guarda los cambios en la base de datos
    return user; // Retorna el usuario actualizado
  }

  async remove(id: number): Promise<string> {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`El usuario con el ID ${id} no se encontró`);
    }
    return `El usuario con el ID ${id} ha sido borrado exitosamente`;
  }
}
