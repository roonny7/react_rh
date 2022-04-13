import { useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../hooks/useForm';
import { buscarEmpleados } from '../helpers/buscarempleados';

export const Busquedas = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let { q = '', buscar='' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({
        searchText: q,
        
    });

    const { searchText } = formValues;

    //const heroesFileted = useMemo( () => getHeroesByName(q), [q] );


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }&buscar=buscar`)
    }

    let empleados = [];
    let resultado = [];
    if (q && buscar)
    {   
        if (q.length > 4)
        {
            empleados = buscarEmpleados(q)
            .then(empleados  => {
                console.log(empleados);
                //console.log(`Obtenido el resultado final: ${empleados}`);
            });

            
            buscar='';
        }

    }


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
                        (empleados)
                        ?  `tiene el valor de ${empleados.length} `
                        : `sin datos`


                    }


                    


                </div>

            </div>

        </>
    )
}