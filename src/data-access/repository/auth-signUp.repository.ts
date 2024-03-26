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

  async save(authSignUpEntity: AuthSignUpEntity): Promise<AuthSignUpEntity> {
    return await this.repository.save(authSignUpEntity);
  }
}
