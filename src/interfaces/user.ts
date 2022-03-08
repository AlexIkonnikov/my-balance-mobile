export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  surname: string;
  patronymic?: string;
}

export interface UserCreateRequest extends UserLoginRequest {
  name: string;
  surname: string;
  patronymic?: string;
}

export interface UserCreateResponce {
  user: User;
  token: string;
}
