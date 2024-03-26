import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthSignUpEntity } from '../entity';

@Injectable()
export class AuthSignUpRepository {
  constructor(
    @InjectRepository(AuthSignUpEntity)
    private readonly repository: Repository<AuthSignUpEntity>,
  ) {}

  async existsByEmail(email: string): Promise<boolean> {
    return await this.repository.exists({ where: { email } });
  }

  async existsByName(name: string): Promise<boolean> {
    return await this.repository.exists({ where: { name } });
  }

  async existsByPhone(phone: string): Promise<boolean> {
    return await this.repository.exists({ where: { phone } });
  }

  async save(authSignUpEntity: AuthSignUpEntity): Promise<AuthSignUpEntity> {
    console.log('authSignUpEntity', authSignUpEntity);

    return await this.repository.save(authSignUpEntity);
  }
}
