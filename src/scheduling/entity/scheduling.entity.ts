import { ApiProperty } from '@nestjs/swagger';
import { BaseCollection } from '../../common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('scheduling')
export class Scheduling extends BaseCollection {
  @ApiProperty({
    description: 'Data do agendamento',
    type: Date,
  })
  @Column({ type: 'date' })
  date: Date;

  @ApiProperty({
    description: 'Horário do agendamento',
    type: String,
  })
  @Column({ type: 'timestamp' })
  time: string;

  // Add Block ID
  // Add User ID
}
