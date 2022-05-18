import React, { useEffect, useState } from "react";
import { buscarEmpleadosId } from "../helpers/buscarempleados";


export const IncludeEmpleado = ( props ) => {

    //obtenemos el número de empleado que está en el localStorage
    const noEmpleado = localStorage.getItem("noempleado");
    
    ///////////////////////////////////////////////////////////////////////////////
    const [empleado, setEmpleados] = useState([]);
        
    useEffect( () => {
        buscarEmpleadosId(noEmpleado)
        .then(empleado  => {
             //console.log(empleado);
             setEmpleados(empleado)
        });
     }, [noEmpleado]);

     let datosEmpleado = empleado.empleados; 
     let rowEmpleado='';     
     

     if (datosEmpleado) rowEmpleado=datosEmpleado[0];
     else {  rowEmpleado = { APaterno : '', AMaterno : ''} }
     
     let { APaterno='', AMaterno='', Nombre=''  } = rowEmpleado;

     //////////////////////////////////////////////////////////////////////////////////


     

   return (
        <h3>Componente : { noEmpleado} - { APaterno } { AMaterno}  {Nombre}</h3>
    )



}
