import { Request } from 'express';
import { Admin } from 'src/admin/entities/admin.entity';

export interface AuthRequest extends Request {
  user: Admin;
}
