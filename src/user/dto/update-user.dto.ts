import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    type: String,
    description: 'Email do usuário',
  })
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty({
    type: String,
    description: 'Nome do usuário',
  })
  @IsOptional()
  @IsString()
  name: string;
}
