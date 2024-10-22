import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import AuthGuard from "./AuthGuard";
import { privateRoutes } from "./map/privateRoutes";
import { publicRoutes } from "./map/publicRoutes";
import { ROUTES } from "./enum/Routes";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* RUTAS PUBLICAS*/}
                <Route element={<PublicRoute />}>
                    {publicRoutes.map((route, index) => <Route key={index} path={route.path} element={route.component} />)}
                </Route>


                {/* RUTAS PRIVADAS */}
                <Route element={<AuthGuard />}>
                    <Route path={ROUTES.ROOT} element={<h1>LAYOUT</h1>}>
                        {privateRoutes.map((route, index) => <Route key={index} path={route.path} element={route.component} />)}
                    </Route>
                </Route>


                {/* NINGUNA XD */}
                <Route path="*" element={<h1>NOT FOUND</h1>} />
            </Routes>
        </BrowserRouter>
    )
}
