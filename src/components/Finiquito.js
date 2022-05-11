import React, { useEffect, useState } from "react";
import { buscarEmpleadosId,  buscarMovimientos } from "../helpers/buscarempleados";


export const Finiquito = ( props ) => {

    //obtenemos el número de empleado que está en el localStorage
    const noEmpleado = localStorage.getItem("noempleado");
    
    ///////////////////////////////////////////////////////////////////////////////
    const [empleado, setEmpleados] = useState([]);
    let [movimientos, setMovimientos] = useState([]);
    
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
        buscarMovimientos(noEmpleado)
        .then(resMovimientos  => {
             //console.log(empleado);
             setMovimientos(resMovimientos)
        });
     }, [noEmpleado]);

     
     
    
   return (
        <>
            <h2> Finiquito </h2>
            <h3>{ noEmpleado} - { APaterno } { AMaterno}  {Nombre}</h3>
            <br></br>
            

        <div className="row">
        <div className="col-lg-4">
		   <div id="panel-1" className="panel">
			 <div className="panel-hdr bg-primary-600 bg-primary-gradient" style={{"backgroundColor"  : "#0d8cee", "border-radius": "22px"}}><h2>&nbsp;&nbsp;Quincenales</h2></div>
				<div className="panel-container show">
				   <div className="panel-content">
						<div className="form-group row">
						   <label className="col-lg-6 form-label" style={{"textAlign":"center"}}><strong>CONCEPTOS</strong></label>
						   <label className="col-lg-6 form-label" style={{"textAlign":"center"}}><strong>ACTIVOS</strong></label>
						</div>
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>SUELDO : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="Sueldo"  size="10" maxLength="20" /></div>							   
						</div>
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>RESP. DE MANDO : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="Consifid"  size="10" maxLength="20" /></div>							   
						</div>
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>APOYO VIVIENDA : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="ApoyoVivienda"  size="10" maxLength="20" /></div>							   
						</div>
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>CAN BASICA : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="CanastaBasica"  size="10" maxLength="20" /></div>							   
						</div>
						
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>VIDA CARA CAN BASICA : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="VCCanastaBasica"  size="10" maxLength="20" /></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>AYU DESP : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="AyudaDespensa"  size="10" maxLength="20" /></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>AYU TRANSP : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="AyudaTransporte"  size="10" maxLength="20" /></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>QUINQUENIO : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="Quinquenio"  size="10" maxLength="20" /></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>COMP X SERV ESP : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="CompServicio"  size="10" maxLength="20" /></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>COMPE BASE : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="CompBase"  size="10" maxLength="20" /></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>VIDA CARA : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="VidaCara"  size="10" maxLength="20" /></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>RIESGO POR DESEMPEÑO : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="RiesgoDes"  size="10" maxLength="20" /></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>ESTIMULO ESPECIAL : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="EstimuloEspecial"  size="10" maxLength="20" /></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>COMPE HACIENDA : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="Compensacion"  size="10" maxLength="20" /></div>							   
						</div>					
												
					 </div>
				</div>
		        </div>
		  </div>


            <div className="col-lg-4">
                <div id="panel-1" className="panel" >
                    <div className="panel-hdr bg-primary-600 bg-primary-gradient" style={{"backgroundColor"  : "#0d8cee", "border-radius": "22px"}}><h2>&nbsp;&nbsp;Días trabajados</h2></div>
                        <div className="panel-container show">
                            <div className="panel-content">
                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>ENE : </strong></span></label>
                                    <div className="col-lg-3" style={{"display" : "flex"}}><input className="form-controlopcional"  type="text" name="DiasEne" size="2" maxLength="3" /></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>JUL : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="DiasJul" size="2" maxLength="3" /></div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>FEB : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasFeb"  size="2" maxLength="3"/></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>AGO : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasAgo"  size="2" maxLength="3"/></div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>MAR : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasMar"  size="2" maxLength="3"/></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>SEP : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasSep"  size="2" maxLength="3"/></div>
                                </div>                                

                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>ABR : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasAbr"  size="2" maxLength="3"/></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>OCT : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasOct"  size="2" maxLength="3"/></div>
                                </div>                                                    

                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>MAY : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasMay"  size="2" maxLength="3"/></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>NOV : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasNov"  size="2" maxLength="3"/></div>
                                </div>                                                                                

                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>JUN : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasJun"  size="2" maxLength="3"/></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>DIC : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasDic"  size="2" maxLength="3"/></div>
                                </div>                                                                                
                            
                            </div>
                        </div>
                </div>
            </div>


        <div className="col-lg-4">
		   <div id="panel-1" className="panel">
			 <div className="panel-hdr bg-primary-600 bg-primary-gradient" style={{"backgroundColor"  : "#0d8cee", "border-radius": "22px"}}><h2> &nbsp;&nbsp;Resultado</h2></div>
				<div className="panel-container show">
				   <div className="panel-content">
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>Sueldo diario integrado  : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}>???????????.??</div>							   
						</div>
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>Sueldo diario aguinaldo : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}>??.??</div>							   
						</div>
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>Total : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}>????.??</div>							   
						</div>
	

												
					 </div>
				</div>
		        </div>
		  </div>



        </div>
        </>



    )



}
