export interface UserPayload {
  id: number;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
}
