import { ApiProperty } from '@nestjs/swagger';

export class GetAllResponseDto<T> {
  @ApiProperty()
  total: number;

  @ApiProperty()
  skip: number;

  @ApiProperty({
    description: 'Lista de itens',
  })
  items: T[];
}
