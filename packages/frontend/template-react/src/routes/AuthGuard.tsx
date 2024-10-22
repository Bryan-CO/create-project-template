import { Outlet } from "react-router-dom";

export default function AuthGuard(){
    const isLogged = true
    return isLogged ? <Outlet /> : <h1>LOGIN</h1>
}