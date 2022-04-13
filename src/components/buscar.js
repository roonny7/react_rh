
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../hooks/useForm';
import { buscarEmpleados } from '../helpers/buscarempleados';
import { useEffect, useState } from 'react';

export const Busquedas = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let { q = '', buscar='' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({
        searchText: q,
        
    });

    const [datos, setDatos] = useState([]);
    
    const { searchText } = formValues;

    //const heroesFileted = useMemo( () => getHeroesByName(q), [q] );


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }&buscar=buscar`)
        setDatos(null);
    }

       
           useEffect( () => {
            let empleados = buscarEmpleados(q)
            .then(empleado  => {
                //console.log("empleado => ",empleado);                
                setDatos(empleado);
            });

           }, []);
           
            

          //  const empleados2 = await buscarEmpleados(q);
            buscar='';
       

    
    //console.log("esto vale chingados", datos);
    let {empleados : arregloEmpleados} = datos;
    console.log("esto vale ahora",arregloEmpleados);
    

    return (
        <>
            <h1>Búsquedas</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Buscar por número de empleado"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />


                        <button 
                            className="btn btn-outline-primary mt-1"
                            type="submit">
                            Buscar...
                        </button>

                    </form>


                </div>
                
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />


                    {
                        
                        (q === '')                        
                            ? <div className="alert alert-danger"> Buscar </div>
                            : <div className="alert alert-danger"> No hay resultados: { q } </div>
                    }

                    {
                        (arregloEmpleados)
                        ?  `tiene el valor de ${arregloEmpleados.length} `
                        : `sin datos`


                    }


                    


                </div>

            </div>

        </>
    )
}