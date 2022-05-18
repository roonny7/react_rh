import React, { useEffect, useState } from "react";
import {   buscarExpedientes } from "../helpers/buscarempleados";
import { IncludeEmpleado } from "./IncludeEmpleado";

export const Expedientes = ( {tipo} ) => {
   
    //console.log(tipo);
    //obtenemos el número de empleado que está en el localStorage
    const noEmpleado = localStorage.getItem("noempleado");
    
    ///////////////////////////////////////////////////////////////////////////////
    
    let [expedientes, setExpedientes] = useState([]);
    
    
    

     //////////////////////////////////////////////////////////////////////////////////


     //buscamos el historial de ese empleado
     useEffect( () => {
        buscarExpedientes(noEmpleado, tipo)
        .then(resExpedientes  => {
             //console.log(empleado);
             setExpedientes(resExpedientes)
        });
     }, [noEmpleado, tipo]);

          
     console.log(expedientes);
         
   return (
        <>
            <h2> Expediente { (tipo === 2 ) ? "personal" : "laboral" }</h2>
            <IncludeEmpleado />
            <br></br>
            <table width="100%" className="table table-bordered table-hover table-stripped">
                <thead>
                    <tr>
                        <th width="5%">Número</th>
                        <th width="30%">Descripción</th>
                        <th width="30%">Observación</th>
                        <th width="15%">Vigencia</th>
                        <th width="10%">Vínculo</th>                        
                    </tr>
                </thead>
                <tbody>
                
            {  
                    (expedientes)
                    ? 
                    expedientes.map(
                                ({Descripcion, observacion, url, fechadocumento}, i) => 
                            
                                
                                <tr key={Math.random()}>                            
                                    <td> {(i+1) } </td>
                                    <td> { Descripcion } </td>
                                    <td> { observacion }</td>
                                    <td><div align="center"> { fechadocumento } </div></td>
                                    <td><a href={url} target="_blank" rel="noreferrer">ver archivo</a> </td>                                    
                                </tr>
                            )
                    
                    : <tr>
                    <td>sin datos</td>
                    </tr>
                    


                }
            </tbody>
            </table>
            <hr/>
        </>



    )



}
