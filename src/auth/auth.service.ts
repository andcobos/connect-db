//auth.service.ts
import { Injectable } from '@nestjs/common'; 
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
	export class AuthService {
		constructor(
			private jwtService: JwtService,
			private usersService: UsersService
		) {}
		
		async validateUser(email: string, password: string) {
			const user = await this.usersService.findByEmail(email);
			if (user && user.password === password) {
				return { id: user.id, email: user.email };
			}
			return null;
		}
		
		login(user: any) {
			const payload = { email: user.email, sub: user.id };
			return {
				acces_token: this.jwtService.sign(payload),
			};
		}
	}