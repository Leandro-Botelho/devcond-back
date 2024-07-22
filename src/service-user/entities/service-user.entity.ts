import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ServiceUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  readonly title: string;

  @Column()
  readonly date: string;

  @Column()
  readonly status: boolean;

  @Column()
  readonly description: string;
}
