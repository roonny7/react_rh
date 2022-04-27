
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../hooks/useForm';
import { buscarEmpleados } from '../helpers/buscarempleados';
import {  useState } from 'react';
import { Link } from 'react-router-dom';


export const Busquedas = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let { q = '',  } = queryString.parse(location.search);
    
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
        //console.log("q vale : ", q);

        buscarEmpleados(searchText)
        .then(empleado  => {
            //console.log("empleado => ",empleado);                
            setDatos(empleado);
        });

    }

    /*useEffect( () => {
        let empleados = buscarEmpleados(q)
        .then(empleado  => {
            console.log("empleado => ",empleado);                
            setDatos(empleado);
        });

       }, []);
      */     
           
            

          //  const empleados2 = await buscarEmpleados(q);
            
       

    
    //console.log("esto vale del set state", datos);
    let arrayempleados = [];
    if (datos){
        arrayempleados=datos.empleados; 
       
    }

       // console.log("array empleados = ", arrayempleados);
    //let {empleados : arregloEmpleados} = datos;
    //console.log("esto vale ahora",arregloEmpleados);
    
       
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
                        
                        (!arrayempleados)                        
                            ? <div className="alert alert-danger"> Buscar </div>
                            : <div className="alert alert-danger"> Hay en total { arrayempleados.length} </div>
                    }

                    {
                        (arrayempleados)
                        ?  arrayempleados.map( empleado =>(
                             
                             
                             <li key={empleado.NoEmpleado}>
                                 <Link className="link-primary" to={`/empleado/?noempleado=${empleado.NoEmpleado}&seleccionar=1`}>
                                     seleccionar 
                                </Link> =&gt;
                                 {empleado.Nombre} {empleado.APaterno} {empleado.AMaterno}</li>                             
                           
                             
                        ))
                        : `sin datos`


                    }


                    


                </div>

            </div>

        </>
    )
}