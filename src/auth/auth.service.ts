import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/entities/admin.entity';
import { comparePassword } from 'src/shared/utils/comparePaassword';
import { UserPayload } from './models/userPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/userToken';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.adminService.findByEmail(email);

    if (user) {
      const isMatch = await comparePassword(password, user.password);

      if (isMatch) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error('Senha ou login incorretos');
  }

  login({ email, id, name }: Admin): UserToken {
    const payload: UserPayload = {
      id,
      email,
      name,
    };

    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      ...payload,
    };
  }
}
