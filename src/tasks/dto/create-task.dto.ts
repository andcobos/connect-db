import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Titulo de la tarea', description: 'Detalles de la tarea' })
  titulo: string;

  @ApiProperty({ example: 1, description: 'ID del usuario que crea la tarea' })
  userId: number;
}