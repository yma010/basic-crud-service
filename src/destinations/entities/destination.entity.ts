import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Listing } from 'src/listings/entities/listing.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Destination {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Listing, (listing) => listing.destination)
  listings: Listing[];

  @ManyToOne(() => User, (user) => user.destinations)
  user: User;
}
