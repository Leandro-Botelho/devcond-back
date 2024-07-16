import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ServiceUser {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column()
  description: string;
}
