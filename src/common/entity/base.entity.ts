import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseCollection extends BaseEntity {
  @ApiProperty({ type: String })
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @ApiProperty({ type: Date })
  @CreateDateColumn({
    type: 'timestamp',
    name: 'createdAt',
  })
  created_at: string;

  @ApiProperty({ type: Date })
  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updatedAt',
    select: false,
  })
  updated_at: string;

  @Column({ type: 'bool', name: 'active', default: true })
  active: boolean;
}
