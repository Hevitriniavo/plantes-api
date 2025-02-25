import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('plantes')
export class Plante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  addedDate: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  imageUrl: string;
}
