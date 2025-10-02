export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthUser {
  id: string;
  role: string;
}

export interface IAuthState {
  accessToken?: string;
  user: IAuthUser | null;
}
