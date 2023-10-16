import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
} from 'typeorm';

import { Destination } from '../../destinations/entities/destination.entity';
import { Collection } from '../../collections/entities/collection.entity';
@Entity()
@Unique(['email']) // ensures that the email is unique in the database
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ select: false }) // `select: false` ensures the password isn't returned in normal queries
  password: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  profilePicture?: string;

  @Column({ default: 'user' })
  role: string; // default role is 'user'

  @Column({ type: 'date', nullable: true })
  dateOfBirth?: Date;

  @OneToMany(() => Destination, (destination) => destination.user)
  destinations: Destination[];

  @OneToMany(() => Collection, (collection) => collection.user)
  collections: Collection[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // ... add other fields as required
}
