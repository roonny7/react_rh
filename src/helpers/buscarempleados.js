export const buscarEmpleados = async( nombre ) => {

    const url = `http://localho.st:4000/api/empleados?nombre=${ encodeURI( nombre ) }`;
    const resp = await fetch( url );
    const  data  = await resp.json();
    console.log("buscarempleados => tiene valor de : ", data);

    /*const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })*/

    return data;


}