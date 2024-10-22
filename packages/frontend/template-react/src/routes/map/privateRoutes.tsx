import { PathRoutes } from "../../types/RoutePath";
import { ROUTES } from "../enum/Routes";

export const privateRoutes: PathRoutes[] = [
    {
        path: ROUTES.ROOT,
        component: <h1>INTRANET</h1>
    },
    {
        path: ROUTES.PRODUCTS,
        component: <h1>PRODUCTOS</h1>
    },
    {
        path: ROUTES.CLIENTS,
        component: <h1>CLIENTES</h1>
    }
]