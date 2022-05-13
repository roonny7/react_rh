import React, { useEffect, useState } from "react";
import { buscarEmpleadosId,  buscarMovimientos, generarFiniquito } from "../helpers/buscarempleados";

//////////form 
const initEvent = {
	Sueldo: '0.00',		
	Consifid : '0.00', 
	ApoyoVivienda : '0.00',
	CanastaBasica : '0.00',
	CompServicio : '0.00',
	CompBase : '0.00',
	VidaCara : '0.00',
	RiesgoDes: '0.00',
	EstimuloEspecial: '0.00',
	VCCanastaBasica : '0.00',
	AyudaDespensa: '0.00',
	AyudaTransporte: '0.00',
	Quinquenio: '0.00',
	Compensacion: '0.00',
	DiasEne : 0, DiasFeb : 0, DiasMar : 0, DiasAbr : 0, DiasMay: 0, DiasJun: 0, DiasJul : 0, DiasAgo: 0, DiasSep: 0, DiasOct : 0, DiasNov : 0, DiasDic : 0



}

const datosCalulados = {
	TotalQuincenal : 0.00,
	SueldoDiario : 0.00,
	SueldoDiarioAgui : 0.00,
	DiasPrima1 : 0,
	DiasPrima2 : 0,
	DiasAguinaldo : 0,
	AguinaldoAnual : 0,
    PrimaAnual : 0,
	FactorAguinaldo : 0,
    ImporteAguinaldo : 0

}


export const Finiquito = ( props ) => {

    //obtenemos el número de empleado que está en el localStorage
    const noEmpleado = localStorage.getItem("noempleado");
    
    ///////////////////////////////////////////////////////////////////////////////
    const [empleado, setEmpleados] = useState([]);
    let [ datosFiniquito, setDatosFiniquito] = useState(datosCalulados);
    



	//////////////form
	const [formValues, setFormValues] = useState( initEvent );

	const { Sueldo, Consifid, ApoyoVivienda, CanastaBasica, CompServicio, CompBase, VidaCara, RiesgoDes, EstimuloEspecial, VCCanastaBasica, AyudaDespensa, AyudaTransporte, Quinquenio, Compensacion,
		DiasEne, DiasFeb, DiasMar, DiasAbr, DiasMay, DiasJun, DiasJul, DiasAgo, DiasSep, DiasOct, DiasNov, DiasDic } = formValues;
/////////////form cierra

	const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

	///////////
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


    
    

    let Resultado='';

	 const handleSearch = (e) => {
        e.preventDefault();

		generarFiniquito(formValues)
		.then(resResultado  => {
			console.log(resResultado);
			setDatosFiniquito(resResultado)
	   });
		
		//console.log(datosFiniquito);
        
    } 
     
    console.log(datosFiniquito);
   return (
        <>
            <h2> Finiquito </h2>
            <h3>{ noEmpleado} - { APaterno } { AMaterno}  {Nombre}</h3>
            <br></br>
            
	<form onSubmit={ handleSearch }>
        <div className="row">
        <div className="col-lg-3">
		   <div id="panel-1" className="panel">
			 <div className="panel-hdr bg-primary-600 bg-primary-gradient" style={{"backgroundColor"  : "#0d8cee", "borderRadius": "22px"}}><h2>&nbsp;&nbsp;Quincenales</h2></div>
				<div className="panel-container show">
				   <div className="panel-content">
						<div className="form-group row">
						   <label className="col-lg-6 form-label" style={{"textAlign":"center"}}><strong>CONCEPTOS</strong></label>
						   <label className="col-lg-6 form-label" style={{"textAlign":"center"}}><strong>ACTIVOS</strong></label>
						</div>
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>SUELDO : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="Sueldo"  size="10" maxLength="20" value={ Sueldo } onChange={ handleInputChange } /></div>							   
						</div>
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>RESP. DE MANDO : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="Consifid"  size="10" maxLength="20" value={ Consifid } onChange={ handleInputChange }/></div>							   
						</div>
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>APOYO VIVIENDA : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="ApoyoVivienda"  size="10" maxLength="20" value={ ApoyoVivienda } onChange={ handleInputChange }/></div>							   
						</div>
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>CAN BASICA : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="CanastaBasica"  size="10" maxLength="20" value={ CanastaBasica } onChange={ handleInputChange }/></div>							   
						</div>
						
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>VIDA CARA CAN BASICA : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="VCCanastaBasica"  size="10" maxLength="20" value={ VCCanastaBasica } onChange={ handleInputChange }/></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>AYU DESP : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="AyudaDespensa"  size="10" maxLength="20" value={ AyudaDespensa } onChange={ handleInputChange }/></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>AYU TRANSP : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="AyudaTransporte"  size="10" maxLength="20" value={ AyudaTransporte } onChange={ handleInputChange }/></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>QUINQUENIO : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="Quinquenio"  size="10" maxLength="20" value={ Quinquenio } onChange={ handleInputChange }/></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>COMP X SERV ESP : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="CompServicio"  size="10" maxLength="20" value={ CompServicio } onChange={ handleInputChange }/></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>COMPE BASE : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="CompBase"  size="10" maxLength="20" value={ CompBase } onChange={ handleInputChange }/></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>VIDA CARA : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="VidaCara"  size="10" maxLength="20" value={ VidaCara } onChange={ handleInputChange }/></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>RIESGO POR DESEMPEÑO : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="RiesgoDes"  size="10" maxLength="20" value={ RiesgoDes } onChange={ handleInputChange }/></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>ESTIMULO ESPECIAL : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="EstimuloEspecial"  size="10" maxLength="20" value={ EstimuloEspecial } onChange={ handleInputChange }/></div>							   
						</div>					
	
						<div className="form-group row">
						   <label className="col-lg-5 form-label"><span className="leyendaopcional"><strong>COMPE HACIENDA : </strong></span></label>
						   <div className="col-lg-7" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="Compensacion"  size="10" maxLength="20" value={ Compensacion } onChange={ handleInputChange }/></div>							   
						</div>					
												
					 </div>
				</div>
		        </div>
		  </div>


            <div className="col-lg-3">
                <div id="panel-1" className="panel" >
                    <div className="panel-hdr bg-primary-600 bg-primary-gradient" style={{"backgroundColor"  : "#0d8cee", "borderRadius": "22px"}}><h2>&nbsp;&nbsp;Días trabajados</h2></div>
                        <div className="panel-container show">
                            <div className="panel-content">
                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>ENE : </strong></span></label>
                                    <div className="col-lg-3" style={{"display" : "flex"}}><input className="form-controlopcional"  type="text" name="DiasEne" size="2" maxLength="3" value={ DiasEne } onChange={ handleInputChange }/></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>JUL : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional"  type="text" name="DiasJul" size="2" maxLength="3" value={ DiasJul } onChange={ handleInputChange }/></div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>FEB : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasFeb"  size="2" maxLength="3" value={ DiasFeb } onChange={ handleInputChange }/></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>AGO : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasAgo"  size="2" maxLength="3" value={ DiasAgo } onChange={ handleInputChange }/></div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>MAR : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasMar"  size="2" maxLength="3" value={ DiasMar } onChange={ handleInputChange }/></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>SEP : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasSep"  size="2" maxLength="3" value={ DiasSep } onChange={ handleInputChange }/></div>
                                </div>                                

                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>ABR : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasAbr"  size="2" maxLength="3" value={ DiasAbr } onChange={ handleInputChange }/></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>OCT : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasOct"  size="2" maxLength="3" value={ DiasOct } onChange={ handleInputChange }/></div>
                                </div>                                                    

                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>MAY : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasMay"  size="2" maxLength="3" value={ DiasMay } onChange={ handleInputChange }/></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>NOV : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasNov"  size="2" maxLength="3" value={ DiasNov } onChange={ handleInputChange }/></div>
                                </div>                                                                                

                                <div className="form-group row">
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>JUN : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasJun"  size="2" maxLength="3" value={ DiasJun } onChange={ handleInputChange }/></div>
                                    <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>DIC : </strong></span></label>
                                    <div className="col-lg-3" style={{"display": "flex"}}><input className="form-controlopcional" type="text" name="DiasDic"  size="2" maxLength="3" value={ DiasDic } onChange={ handleInputChange }/></div>
                                </div>                                                                                
                            
                            </div>
                        </div>
                </div>
				<br />
				<div align="center">
					<button type="submit" className="btn m-1 btn-block btn-outline-primary">Generar Finiquito</button>
				</div>
            </div>


        <div className="col-lg-6">
		   <div id="panel-1" className="panel">
			 <div className="panel-hdr bg-primary-600 bg-primary-gradient" style={{"backgroundColor"  : "#0d8cee", "borderRadius": "22px"}}><h2> &nbsp;&nbsp;Resultado</h2></div>
				<div className="panel-container show">
				   <div className="panel-content">

				   		<div className="form-group row">
						   <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>Total quincenal  : </strong></span></label>
						   <div className="col-lg-3" style={{"display": "flex"}}>{ datosFiniquito.TotalQuincenal   }</div>							   
						   <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>Prima anual  : </strong></span></label>
						   <div className="col-lg-3" style={{"display": "flex"}}>{ datosFiniquito.PrimaAnual   }</div>							   
						</div>

						<div className="form-group row">
						   <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>Sueldo diario   : </strong></span></label>
						   <div className="col-lg-3" style={{"display": "flex"}}>{ datosFiniquito.SueldoDiario   }</div>							   
						   <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>Sueldo diario aguinaldo : </strong></span></label>
						   <div className="col-lg-3" style={{"display": "flex"}}>{ datosFiniquito.SueldoDiarioAgui   }</div>							   
						</div>
	

						<div className="form-group row">
						   <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>Prima 1  : </strong></span></label>
						   <div className="col-lg-3" style={{"display": "flex"}}>{ datosFiniquito.DiasPrima1   }</div>							   
						   <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>Prima 2 : </strong></span></label>
						   <div className="col-lg-3" style={{"display": "flex"}}>{ datosFiniquito.DiasPrima2   }</div>							   
						</div>

						<div className="form-group row">
						   <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>Días aguinaldo : </strong></span></label>
						   <div className="col-lg-3" style={{"display": "flex"}}>{ datosFiniquito.DiasAguinaldo   }</div>							   
						   <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>Aguinaldo anual : </strong></span></label>
						   <div className="col-lg-3" style={{"display": "flex"}}>{ datosFiniquito.AguinaldoAnual   }</div>							   
						</div>

						<div className="form-group row">
						   <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>Factor aguinaldo  : </strong></span></label>
						   <div className="col-lg-3" style={{"display": "flex"}}>{ datosFiniquito.FactorAguinaldo   }</div>							   
						   <label className="col-lg-3 form-label"><span className="leyendaopcional"><strong>ImporteAguinaldo  : </strong></span></label>
						   <div className="col-lg-3" style={{"display": "flex"}}>{ datosFiniquito.ImporteAguinaldo   }</div>							   
						</div>

						<div className="form-group row">
							&nbsp;
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

		
	</form>
        </>



    )



}
