import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TaskStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

}