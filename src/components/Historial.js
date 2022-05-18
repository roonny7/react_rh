import React, { useEffect, useState } from "react";
import {  buscarHistorial } from "../helpers/buscarempleados";
import { IncludeEmpleado } from "./IncludeEmpleado";


export const Historial = ( props ) => {

    //obtenemos el número de empleado que está en el localStorage
    const noEmpleado = localStorage.getItem("noempleado");
    
    ///////////////////////////////////////////////////////////////////////////////
    const [empleado] = useState([]);
    let [historial, setHistorial] = useState([]);
    
    
     let datosEmpleado = empleado.empleados; 
     let rowEmpleado=''; 
     console.log(rowEmpleado);    
     

     if (datosEmpleado) rowEmpleado=datosEmpleado[0];
     else {  rowEmpleado = { APaterno : '', AMaterno : ''} }
          

     //////////////////////////////////////////////////////////////////////////////////


     //buscamos el historial de ese empleado
     useEffect( () => {
        buscarHistorial(noEmpleado)
        .then(resHistorial  => {
             //console.log(empleado);
             setHistorial(resHistorial)
        });
     }, [noEmpleado]);

     //let resHistorialSpread = ...resHistorial;
    //(historial)  ? resHistorial = historial : resHistorial = initialState;

    console.log("historial tiene ", historial);
    if (historial)
    {
        rowEmpleado=historial[0];
        
    }
    
    let resHistorial_Array = [];
    resHistorial_Array = [];    
    
    let i, y;
    for(i in historial){
            for (y in historial[i]){
                resHistorial_Array.push(historial[i][y]);
            }
       }
    
   return (
        <>
            <h2> Historial </h2>
            <IncludeEmpleado />                        
            <table width="100%" className="table table-bordered table-hover table-stripped">
                <thead>
                    <tr>
                        <td>Número</td>
                        <td>Fecha</td>
                        <td>Dependencia</td>
                        <td>Tipo movimiento</td>
                        <td>Tipo de empleado</td>
                        <td>Nivel</td>
                        <td>Puesto</td>
                    </tr>
                </thead>
                <tbody>
                
                {
                    resHistorial_Array.map(
                        ({Fecha, Dependencia, TipoMovimiento, TiposEmpleado, Nivele, Puesto}, i) => 
                    

                        <tr key={Math.random()}>                            
                            <td> {(i+1) } </td>
                            <td> {Fecha } </td>
                            <td> { Dependencia.Descripcion }</td>
                            <td> { TipoMovimiento.Descripcion }</td>
                            <td>{ TiposEmpleado.Descripcion }</td>
                            <td > {Nivele.Nivel} </td>
                            <td > {Puesto.Descripcion} </td>
                        </tr>
                    )
                    


                }
            </tbody>
            </table>
            
        </>



    )



}
