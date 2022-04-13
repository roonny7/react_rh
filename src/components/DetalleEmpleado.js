import React from "react";

export const DetalleEmpleado = ( props ) => {

    console.log("vale", props);
    const noEmpleado = props.noEmpleado;
    return (
        <>
            <h1>soy el componente de detalle</h1>
            <h2>{ noEmpleado}</h2>

        </>
    )



}
