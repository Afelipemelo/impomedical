import React,{Fragment} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import silla1 from '../img/silla1.webp'
import silla2 from '../img/silla2.webp'
import silla3 from '../img/silla3.webp'
import silla4 from '../img/silla4.webp'
import Button from '@mui/material/Button'
const NuevaColeccion = () => {
    return ( 
        <Fragment>
       
        <Grid container  style={{display:'flex', justifyContent:'center'}}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box className='titulo'> 
                        <h1>
                         NUEVA COLECCIÓN
                        </h1>
                    </Box>
            </Grid>
            <Box className='containerNuevaColeccion' >
            <Grid container xs={10} sm={10} md={10} lg={10} spacing={2}>
                <Grid item xs={3} sm={3} md={3} lg={3} >
                    <Box className='sillas'>
                    <img src={silla1} width={250} height={280} style={{borderRadius:'20px'}}/>
                    <p>Silla de Ruedas Motorizada gris metalizada abastible M200</p>
                    </Box>
                     <Button variant='contained' size='small' fullWidth>AÑADIR AL CARRITO</Button>
                    
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} >
                    <Box className='sillas'>
                    <img src={silla4} width={250} height={280} style={{borderRadius:'20px'}}/>
                    <p>Silla de Ruedas Motorizada gris metalizada abastible M200</p>
                    </Box>
                 </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    <Box className='sillas'>
                    <img src={silla3} width={250} height={280} style={{borderRadius:'20px'}}/>
                    <p>Silla de Ruedas Motorizada gris metalizada abastible M200</p>
                    </Box>
                    
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} >
                    <Box className='sillas'>
                    <img src={silla1} width={250} height={280} style={{borderRadius:'20px'}}/>
                    <p>Silla de Ruedas Motorizada gris metalizada abastible M200</p>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </Grid>
            
        </Fragment>
     );
}
 
export default NuevaColeccion;