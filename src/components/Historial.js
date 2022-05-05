import React, { useEffect, useState } from "react";
import { buscarEmpleadosId, buscarHistorial } from "../helpers/buscarempleados";

export const Historial = ( props ) => {

    //obtenemos el número de empleado que está en el localStorage
    const noEmpleado = localStorage.getItem("noempleado");
    
    ///////////////////////////////////////////////////////////////////////////////
    const [empleado, setEmpleados] = useState([]);
    let [historial, setHistorial] = useState([]);
    
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
    resHistorial_Array = []
    //historial  = JSON.stringify(historial);
     
    
    console.log("historial vale: ", historial);
    let esArreglo = Array.isArray(historial);
    console.log("¿es arreglo ? ", esArreglo);
    console.log(typeof historial);

    let i, y;
    for(i in historial){
            for (y in historial[i]){
                resHistorial_Array.push(historial[i][y]);
            }
       }
    
     console.log("al final", resHistorial_Array, "¿y es un array? ", Array.isArray(resHistorial_Array));  





     //console.log("row empleado",rowEmpleado); 
     //console.log("antes ", resHistorial);
     //resHistorial = Object.entries(resHistorial);
     //console.log("despues", resHistorial[0]);
     //let rowHistorial = resHistorial[0];
     //rowHistorial = rowHistorial;
    // console.log(rowHistorial);


   return (
        <>
            <h2> Historial </h2>
            <h3>{ noEmpleado} - { APaterno } { AMaterno}  {Nombre}</h3>
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
