import { ApiProperty } from '@nestjs/swagger';
import { BaseCollection } from '../../common/entity/base.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('user')
@Unique(['email'])
export class User extends BaseCollection {
  @ApiProperty({
    type: String,
    description: 'Email do usuário',
  })
  @Column({ type: 'varchar' })
  email: string;

  @ApiProperty({
    type: String,
    description: 'Senha do usuário',
  })
  @Column({ default: null, select: false })
  password: string;

  @ApiProperty({
    type: String,
    description: 'Nome do usuário',
  })
  @Column({ type: 'varchar', length: 150 })
  name: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (
      this.password &&
      this.password !== undefined &&
      this.password !== null
    ) {
      this.password = bcrypt.hashSync(this.password, 10);
    }
  }

  checkPassword = (attempt: string) => {
    if (!this.password) return false;
    return bcrypt.compareSync(attempt, this.password);
  };
}
