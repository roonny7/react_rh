import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import { buscarEmpleadosId } from "../helpers/buscarempleados";

export const DetalleEmpleado = ( props ) => {
    const location = useLocation();
    let { noempleado='', seleccionar=''} = queryString.parse(location.search);
    const [empleado, setEmpleados] = useState([]);
    let datosEmpleado = '';
    
    if (seleccionar)
        localStorage.setItem("noempleado", noempleado);
    

    
    useEffect( () => {
        datosEmpleado = await buscarEmpleadosId(noempleado)
        .then(empleado  => {
            setEmpleados(empleado);
        });
    }, [empleado]);


    
    
    console.log(empleado);
    return (
        <>
            <h1>Datos del empleado<br/><br/></h1>
            
            <div className="row">
                <div className="col-md-5">
                    <div className="card" style={{width: "18rem;"}}>
                        <div align="center">
                            <img src="/empleado.png" className="card-img-top" alt="..."  style={{width : "205px"}}/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Roonny Cristhoper Ruiz Ramirez</h4>
                            <h5 className="card-title">Secretaría de finanzas y planeacion</h5>
                            <p className="card-text">Analista Profesional</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Nivel 700</li>
                            <li className="list-group-item">RURR8012 - RUURR8012HQRZM</li>
                            <li className="list-group-item">CONFIANZA</li>
                        </ul>
                        <div className="card-body">
                            <a href="/historial" className="card-link">Historial </a>
                            <a href="/movimientos" className="card-link">Movimientos</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}
