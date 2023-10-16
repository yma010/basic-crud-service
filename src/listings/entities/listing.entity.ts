import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Destination } from '../../destinations/entities/destination.entity';
import { Collection } from '../../collections/entities/collection.entity';

@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Destination, (destination) => destination.listings)
  destination: Destination;

  @ManyToMany(() => Collection, (collection) => collection.listings)
  collections: Collection[];
}
