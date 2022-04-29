export const buscarEmpleados = async( nombre ) => {

    const url = `http://10.9.15.20:4000/api/empleados?nombre=${ encodeURI( nombre ) }`;
    const resp = await fetch( url );
    const  data  = await resp.json();
    //console.log("buscarempleados => tiene valor de : ", data);

    /*const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })*/

    return data;


}

export const buscarEmpleadosId = async( NoEmpleado ) => {

    const url = `http://10.9.15.20:4000/api/empleados/${NoEmpleado}`;
    const resp = await fetch( url );
    const  data  = await resp.json();
    console.log("buscarempleados => tiene valor de : ", data);

    return data;


}

export const buscarHistorial = async( NoEmpleado ) => {

    const url = `http://10.9.15.20:4000/api/historial/`;
    const resp = await fetch( url );
    const  data  = await resp.json();
    //console.log("buscarempleados => tiene valor de : ", data);
    return data;
}