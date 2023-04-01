import { LoginPayload, LoginResponse } from './login.interface';

export function postLogin(body: LoginPayload): Promise<LoginResponse> {
  return fetch('http://localhost:3333/api/auth/sign-in', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: [['Content-Type', 'application/json']],
  }).then((response) => response.json() as unknown as LoginResponse);
}
