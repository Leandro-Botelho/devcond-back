import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly description: string;

  @Column()
  readonly title: string;

  @Column()
  readonly date: string;

  @Column()
  readonly location: string;
}
