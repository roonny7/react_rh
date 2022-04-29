import { Routes, Route } from 'react-router-dom';
import { MenuChingadaMadre } from '../components/menu';
import { DetalleEmpleado } from '../components/DetalleEmpleado'
import { PaginaPrincipal } from '../components/PaginaPrincipal';
import { Busquedas } from '../components/buscar';
import { Historial } from '../components/Historial';


export const DashboardRoutes = () => {
    return (
        <>
            <MenuChingadaMadre />

            <div className="container">
                <Routes>
                    <Route path="/buscar" element={<Busquedas />} />
                    <Route path="/empleado" element={<DetalleEmpleado />} />
                    <Route path="/historial" element={<Historial />} />
                    <Route path="/" element={<PaginaPrincipal />} />

                </Routes>
            </div>
        </>
    )
}