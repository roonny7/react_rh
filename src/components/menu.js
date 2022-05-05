import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'


export const MenuChingadaMadre = () => {

    const noEmpleado = localStorage.getItem("noempleado");
    const Nombre = localStorage.getItem("nombre");
    const navigate = useNavigate();

    const handleBuscar = () => {
      navigate('/buscar', {
          replace: true
      });
  }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            
            <Link className="navbar-brand" to="/" >
                Inicio
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') } to="/empleado" >
                        Datos Generales
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/historial"
                    >
                        Historial laboral
                    </NavLink>

                    <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') } to="/movimientos" >
                        Movimientos
                    </NavLink>

                    <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') } to="/exppersonal" >
                        Expediente personal
                    </NavLink>

                    <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') } to="/explaboral" >
                        Expediente laboral
                    </NavLink>

                    <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') } to="/explaboral" >
                        Finiquito
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        Empleado actual : { noEmpleado} - { Nombre}
                    </span>
                    
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={ handleBuscar }
                    >
                        Buscar otro 
                    </button>                    
                    
                    
                </ul>
            </div>
        </nav>
    )
}