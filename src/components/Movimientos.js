import React, { useEffect, useState } from "react";
import { buscarEmpleadosId,  buscarMovimientos } from "../helpers/buscarempleados";
import { IncludeEmpleado } from "./IncludeEmpleado";

export const Movimientos = ( props ) => {

    //obtenemos el número de empleado que está en el localStorage
    const noEmpleado = localStorage.getItem("noempleado");
    
    ///////////////////////////////////////////////////////////////////////////////
    const [empleado, setEmpleados] = useState([]);
    let [movimientos, setMovimientos] = useState([]);
    
    useEffect( () => {
        buscarEmpleadosId(noEmpleado)
        .then(empleado  => {
             //console.log(empleado);
             setEmpleados(empleado)
        });
     }, [noEmpleado]);

     let datosEmpleado = empleado.empleados; 
     let rowEmpleado;     
     console.log(rowEmpleado);
     

     if (datosEmpleado) rowEmpleado=datosEmpleado[0];
     else {  rowEmpleado = { APaterno : '', AMaterno : ''} }
     
 

     //////////////////////////////////////////////////////////////////////////////////


     //buscamos el historial de ese empleado
     useEffect( () => {
        buscarMovimientos(noEmpleado)
        .then(resMovimientos  => {
             //console.log(empleado);
             setMovimientos(resMovimientos)
        });
     }, [noEmpleado]);

     let posiciones = movimientos.length;
     let movimientosmenos1=movimientos.slice(0,(posiciones-1))
     
     
     
    
   return (
        <>
            <h2> Movimientos </h2>
            <IncludeEmpleado />
            <br></br>
            <table width="100%" className="table table-bordered table-hover table-stripped">
                <thead>
                    <tr>
                        <td>Número</td>
                        <td>Alta</td>
                        <td>Baja</td>
                        <td>Dependencia</td>
                        <td>Tipo de empleado</td>
                        <td>Antiguedad</td>                    
                    </tr>
                </thead>
                <tbody>
                
            {  
                    (movimientosmenos1)
                    ? 
                    movimientosmenos1.map(
                                ({alta, baja, Dependencia, Tipo, antiguedad}, i) => 
                            

                                <tr key={Math.random()}>                            
                                    <td> {(i+1) } </td>
                                    <td> {alta } </td>
                                    <td> { baja }</td>
                                    <td> { Dependencia }</td>
                                    <td>{ Tipo }</td>
                                    <td > {antiguedad} </td>                                    
                                </tr>
                            )
                    
                    : <tr>
                    <td>sin datos</td>
                    </tr>
                    


                }
            </tbody>
            </table>
           {   
               (movimientos[movimientos.length-1])
               ? <h3> Antigüedad total : {movimientos[movimientos.length-1].antiguedadTotal}</h3>
               : <h3>null</h3>

           } 
        </>



    )



}
