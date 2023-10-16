import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { Listing } from '../../listings/entities/listing.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Collection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.collections)
  user: User;

  @ManyToMany(() => Listing, (listing) => listing.collections)
  @JoinTable() // Needed for the owning side of many-to-many relationship
  listings: Listing[];
}
