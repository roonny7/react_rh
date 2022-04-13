import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DashboardRoutes } from './DashBoardRoutes'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                
                <Route path="/*" element={ <DashboardRoutes />  } />

            </Routes>
        </BrowserRouter>
    )
}