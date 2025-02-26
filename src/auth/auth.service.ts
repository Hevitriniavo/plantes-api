import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,

    ) { }

    async signIn(
        username: string,
        pass: string,
    ): Promise<{ accessToken: string }> {
        const user = await this.usersService.signIn(username, pass);
        const payload = { sub: user.id, displayName: user.displayName , roles: user.roles};
        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }
    async register(createUserDto: CreateUserDto) {
        return this.usersService.register(createUserDto);
    }
}
