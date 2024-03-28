import { ApiProperty } from '@nestjs/swagger';
import { BaseCollection } from '../../common/entity/base.entity';
import { Column, Entity } from 'typeorm';
import { BlockType } from 'src/common/enum/block-type.enum';

@Entity('block')
export class Block extends BaseCollection {
  @ApiProperty({
    description: 'Nome da quadra',
    type: String,
  })
  @Column({ type: 'varchar', length: 150 })
  blockName: string;

  @ApiProperty({
    description: 'Nome do responsável pela quadra',
    type: String,
  })
  @Column({ type: 'varchar', length: 150 })
  responsibleName: string;

  @ApiProperty({
    description: 'Telefone do responsável pela quadra',
    type: String,
  })
  @Column({ type: 'varchar', length: 15 })
  responsiblePhone: string;

  @ApiProperty({
    description: 'Tipo de quadra',
    type: 'Enum',
  })
  @Column({ type: 'enum', enum: BlockType, default: BlockType.FUTSAL })
  type: BlockType;

  @ApiProperty({
    description: 'Rua da quadra',
    type: String,
  })
  @Column({ type: 'varchar', length: 150 })
  road: string;

  @ApiProperty({
    description: 'Bairro da quadra',
    type: String,
  })
  @Column({ type: 'varchar', length: 25 })
  neighborhood: string;

  @ApiProperty({
    description: 'Número da quadra',
    type: Number,
  })
  @Column({ type: 'int' })
  number: number;

  @ApiProperty({
    description: 'CEP da quadra',
    type: String,
  })
  @Column({ type: 'varchar', length: 10 })
  zipCode: string;

  @ApiProperty({
    description: 'Cidade da quadra',
    type: String,
  })
  @Column({ type: 'varchar', length: 50 })
  city: string;

  @ApiProperty({
    description: 'Estado da quadra',
    type: String,
  })
  @Column({ type: 'varchar', length: 2 })
  state: string;

  @ApiProperty({
    description: 'Horário de funcionamento da quadra',
    type: String,
  })
  @Column({ type: 'varchar', length: 50 })
  time: string;

  @ApiProperty({
    description: 'Dias de funcionamento da quadra',
    type: String,
  })
  @Column({ type: 'varchar', length: 50 })
  day: string;
}
