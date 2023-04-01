import { useMutation } from "react-query";
import { postLogin } from "./login-api";
import { LoginPayload } from "./login.interface";

export function Login() {
    const signIn = useMutation((login: LoginPayload) => {        
        return postLogin(login)
    }, {
        retry: 5,
        onSuccess: (data) => {
            localStorage.setItem('access_token', data?.access_token as string)
        },
    });

    const { isLoading } = signIn;

    if (isLoading) {
        return (<>Loading innit</>)
    }
    
    const handleLogin = (e: any) => {
        e.preventDefault();
        signIn.mutate({
            [e.target[0].name]: e.target[0].value,
            [e.target[1].name]: e.target[1].value
        } as unknown as LoginPayload);
    }
    
    return (
        <form method="post" onSubmit={handleLogin} className="grid">
            <input type="text" name="email"/>
            <input type="password" name="password"/>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
