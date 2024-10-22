import { Navigate, Outlet } from "react-router-dom"
import { ROUTES } from "./enum/Routes"

export default function PublicRoute(){
    const isLogged = true
    return isLogged ? <Navigate to={ROUTES.ROOT}/> : <Outlet />
}