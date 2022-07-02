import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import  visa from '../img/visa.png'
import mercado from '../img/mercadoPago.png'
import master from '../img/am.png'
const Footer = () => {
    return (
    <div className="main-footer">
        <Grid container>
            <Grid item  xs={3} sm={3} md={3} lg={3} className='primeraSeccion'>
                <h3>SOBRE NOSOTROS</h3>
                <ul>
                    <li>¿Quienes somos</li>
                    <br/>
                    <li>Nuestra historia</li>
                    <br/>
                    <li>Nuestra informacion</li>
                </ul>
            </Grid>
            <Grid item  xs={3} sm={3} md={3} lg={3} className='primeraSeccion'>
                <h3>CATEGORIAS DESTACADAS</h3>
                <ul>
                    <li>Profesionales de la salud</li>
                    <br/>
                    <li>Proteccion e higiene</li>
                    <br/>
                    <li>Control y prevencion</li>
                    <br/>
                    <li>Movilidad</li>
                    <br/>
                    <li>Independencia y cuidado en el hogar</li>
                    <br/>
                    <li>Terapia respiratoria</li>
                    <br/>
                    <li>Confort</li>
                </ul>
            </Grid>
            <Grid item  xs={3} sm={3} md={3} lg={3} className='primeraSeccion'>
            <h3>SERVICO AL CLIETNE</h3>
                <ul>
                    <li>Politicas de entregas</li>
                    <br/>
                    <li>Politica de devaluaciones</li>
                    <br/>
                    <li>Politica de garantías</li>
                    <br/>
                    <li>Politica de cancelación</li>
                    <li>Whatsapp 123 123 3434</li>
                    <br/>
                    <li>PBX 01 8000 123 345</li>
                    <br/>
                    <li>e-Mail: info@impormedical.com</li>
                </ul>
            </Grid>
            <Grid item  xs={3} sm={3} md={3} lg={3} className='primeraSeccion'>
                <h3>SUSCRÍBASE A NUESTRO NEWSLETTER</h3>
                    <br/>
                <span></span>
                    <br/>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Aceptacion de terminos y condiciones de manejo de datos" />
                    <br/>
                <p>Nuestros metodos de pago</p>
                    <br/>
                <span> <img src={visa}/></span>
                <span> <img src={mercado}/></span>
                <span> <img src={master}/></span>
            </Grid>
        </Grid>
    </div>  
      );
}
 
export default Footer;