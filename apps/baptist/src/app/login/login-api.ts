import { LoginPayload, LoginResponse } from './login.interface';

export function postLogin(body: LoginPayload): Promise<LoginResponse> {
  return fetch('localhost:3333/api/auth/sign-in', {
    method: 'POST',
    body: JSON.stringify(body),
  }).then((response) => response.json() as unknown as LoginResponse);
}
