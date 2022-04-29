import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import { buscarEmpleadosId } from "../helpers/buscarempleados";

export const DetalleEmpleado = ( props ) => {
    const location = useLocation();
    let { noempleado='', seleccionar=''} = queryString.parse(location.search);
    const [empleado, setEmpleados] = useState([]);
    
    if (seleccionar)
        localStorage.setItem("noempleado", noempleado);
    

    
    useEffect( () => {
       buscarEmpleadosId(noempleado)
       .then(empleado  => {
            //console.log(empleado);
            setEmpleados(empleado)
       });
    }, [noempleado]);


    console.log("empleados tiene", empleado);
    let datosEmpleado = empleado.empleados; 
    let rowEmpleado='', descripcion='', tipoEmpleado;
    


    if (datosEmpleado)
    {
        rowEmpleado=datosEmpleado[0];
        
    }
    else    
      {  rowEmpleado = { APaterno : '', AMaterno : ''}
      }
    
    let { APaterno='', AMaterno='', Nombre='' , Dependencia='', Puesto='', CURP='', RFC='', Nivele:Nivel, TiposEmpleado='' } = rowEmpleado;
    (Dependencia) ? descripcion = Dependencia.Descripcion : descripcion='-';
    (Nivel) ? Nivel = Nivel.Nivel : Nivel='-';
    (TiposEmpleado) ? tipoEmpleado=TiposEmpleado.Descripcion : tipoEmpleado='';

    let foto = "/"+noempleado+".jpg";
    console.log(foto);
    
    
    
    return (
        <>
            <h1>Datos del empleado<br/><br/></h1>
            
            <div className="row">
                <div className="col-md-7">
                    <div className="card" style={{width: "18rem"}}>
                        <div align="center">
                            <img src={foto} alt="Foto" onError={({ currentTarget}) => {
                                currentTarget.onerror=null;
                                currentTarget.src="/empleado.png";

                            }} style={{width: "200px"}}
                            />

                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{APaterno} {AMaterno} {Nombre}</h4>
                            <h5 className="card-title">{descripcion}</h5>
                            <p className="card-text">{ Puesto }</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Nivel { Nivel }</li>
                            <li className="list-group-item">{RFC} - {CURP}</li>
                            <li className="list-group-item">{ tipoEmpleado }</li>
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
