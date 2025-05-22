//users/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
	@ApiProperty ({ example: 'Juan Perez', description: 'Nombre completo'})
	nombre: string;
	
	@ApiProperty({ example: 'juan@example.com', description: 'Correo electronico'})
	email: string;
}