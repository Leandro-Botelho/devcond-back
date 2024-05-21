export interface IUserResponse {
  access_token: string;
  user: {
    name: string;
    id: number;
    email: string;
  };
}
