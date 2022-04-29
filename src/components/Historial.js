import React, { useEffect, useState } from "react";
import { buscarEmpleadosId, buscarHistorial } from "../helpers/buscarempleados";

export const Historial = ( props ) => {

    //obtenemos el número de empleado que está en el localStorage
    const noEmpleado = localStorage.getItem("noempleado");
    
    ///////////////////////////////////////////////////////////////////////////////
    const [empleado, setEmpleados] = useState([]);
    const [historial, setHistorial] = useState([]);
    let resHistorial= [];

    useEffect( () => {
        buscarEmpleadosId(noEmpleado)
        .then(empleado  => {
             //console.log(empleado);
             setEmpleados(empleado)
        });
     }, [noEmpleado]);

     let datosEmpleado = empleado.empleados; 
     let rowEmpleado='';     
     let initialState= {
         usuarios : []
     }

     if (datosEmpleado) rowEmpleado=datosEmpleado[0];
     else {  rowEmpleado = { APaterno : '', AMaterno : ''} }
     
     let { APaterno='', AMaterno='', Nombre=''  } = rowEmpleado;

     //////////////////////////////////////////////////////////////////////////////////


     //buscamos el historial de ese empleado
     useEffect( () => {
        buscarHistorial(noEmpleado)
        .then(resHistorial  => {
             //console.log(empleado);
             setHistorial({resHistorial})
        });
     }, [noEmpleado]);

    (historial)  ? resHistorial = historial : resHistorial = initialState;

     
     //console.log("antes ", resHistorial);
     resHistorial = Object.entries(resHistorial);
     //console.log("despues", resHistorial[0]);
     let rowHistorial = resHistorial[0];
     //rowHistorial = rowHistorial;
     console.log(rowHistorial);


   return (
        <>
            <h2> Historial </h2>
            <h3>{ noEmpleado} - { APaterno } { AMaterno}  {Nombre}</h3>
            {
                rowHistorial.map(
                    (rowHistorial) => <li key={Math.random()}> 11111</li>

                )
                


            }
            
        </>



    )



}
