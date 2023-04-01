import { useState } from "react";
import { postLogin } from "./login-api";
import { LoginState } from "./login.interface";

const initialState: LoginState = {
  email: '',
  password: '',
};

export function Login() {
    const [login, setLogin] = useState(initialState);
    const [jwt, setJwt] = useState('');

    const updateLogin = (e: { target: { name: any; value: any; }; }) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    
    const handleLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        postLogin(login).then(({ access_token }) => setJwt(access_token))
    }

    
    return (
        <form method="post" onSubmit={handleLogin} className="grid">
            <input type="text" name="email" onChange={updateLogin}/>
            <input type="password" name="password" onChange={updateLogin}/>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
