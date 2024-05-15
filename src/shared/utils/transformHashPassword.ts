import * as bcrypt from 'bcrypt';

export const transformHasPassword = (password: string) =>
  bcrypt.hash(password, 10);
