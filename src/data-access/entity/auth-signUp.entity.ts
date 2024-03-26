import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user' })
export class AuthSignUpEntity {
  @PrimaryColumn({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'zipcode' })
  zipcode: string | null;

  @Column({ name: 'address' })
  address: string | null;

  @Column({ name: 'addressDetail' })
  addressDetail: string | null;
}
