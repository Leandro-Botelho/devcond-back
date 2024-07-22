import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class FindItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  readonly title: string;

  @Column()
  readonly location: string;

  @Column()
  readonly nameFind: string;

  @Column()
  readonly contact: string;

  @Column()
  readonly description: string;
}
