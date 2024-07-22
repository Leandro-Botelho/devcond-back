import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  contact: string;

  @Column()
  condominium: string;

  @Column()
  apartment: string;

  @Column()
  town: string;

  @Column()
  created_at: Date;
}
