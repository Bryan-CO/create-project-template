import { createContext, useEffect, useState } from "react";

interface AuthContextType {
    user: string;
    isLogged: boolean;
    login: () => void;
    handleError401: () => void;
}

// Inicialización del contexto con valores predeterminados
export const AuthContext = createContext<AuthContextType>({
    user: '',
    isLogged: false,
    login: () => { },
    handleError401: () => { }
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    const handleError401 = () => {
        setTimeout(() => {
            logout();
        }, 10000);
    };

    // Función para verificar el POS
    const login = async () => {
        try {
            //   const data = await login();
            setIsLogged(true);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message)
            }
        } finally {
            setLoading(false);  // Finalizar la carga independientemente del resultado
        }
    };

    // Función de logout
    const logout = () => {
        setUser('');
        setIsLogged(false);
    };

    useEffect(() => {
        login();
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <p>Cargando...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', textAlign: 'center' }}>
                    <p>{error}</p>
                </div>
            </div>
        )
    }
    if (!isLogged) {
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', textAlign: 'center' }}>
                    <p>USUARIO NO INICIO SESIÓN!, REDIRIGIENDO A LOGIN...</p>
                </div>
            </div>
        )
    }
    return (
        <AuthContext.Provider value={{ user, isLogged, login, handleError401 }}>
            {children}
        </AuthContext.Provider>
    );
};