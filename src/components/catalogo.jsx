import React,{Fragment} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import silla1 from '../img/silla1.webp'
import silla2 from '../img/silla2.webp'
import silla3 from '../img/silla3.webp'
import silla4 from '../img/silla4.webp'
const Catalogo = () => {
    return (
        <Fragment>
            <Box className='opcionesCatalogo' >
                <Grid container   style={{diplay:'flex', justifyContent:'center'}}>
                    <Grid item  xs={3} sm={3} md={3} lg={3} className='opcionesCata'>
                        <h3>
                        SILLAS DE RUEDAS
                        </h3>
                    </Grid>
                    <Grid item  xs={3} sm={3} md={3} lg={3} className='opcionesCata' style={{marginTop:'10px', marginLeft:'10px', marginRight:'10px'}}>
                        <h3>
                        TERAPIA EN EL HOGAR
                        </h3>
                        </Grid>
                    <Grid item  xs={3} sm={3} md={3} lg={3} className='opcionesCata' style={{marginTop:'10px'}}>
                        <h3>
                        MOVILIDAD
                        </h3>
                        </Grid>
                </Grid>
                <Box className='containerCatalogo' > 
                <Grid container xs={10} sm={10} md={10} lg={10}>
                <Box className='productoCatalogoGris' >
                <Box className='productoCatalogo' ></Box>
                    <h1>
                    SILLA DE RUEDAS
                    </h1>
                </Box>
                <Box className='containerNuevaColeccionCatalogo' >
                    <Grid container xs={10} sm={10} md={10} lg={10} spacing={2}>
                        <Grid item xs={3} sm={3} md={3} lg={3} >
                            <Box className='sillasCatalogo'>
                            <img src={silla1}  height={280} style={{borderRadius:'8px'}}/>
                            <p>Silla de Ruedas Motorizada gris metalizada abastible M200</p>
                            <h4>$1.110.000</h4>
                            <h2>$1.110.000</h2>
                            </Box>
                            <Box className='botonCatalogo'>
                            <Button variant='contained' size='small' fullWidth>AÑADIR AL CARRITO</Button>
                            </Box>
                            
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} >
                            <Box className='sillasCatalogootro'>
                            <img src={silla4}  height={280} style={{borderRadius:'8px'}}/>
                            <p>Silla de Ruedas Motorizada gris metalizada abastible M200</p>
                            </Box>
                            <Box className='botonCatalogo'>
                            <Button variant='contained' size='small' fullWidth>AÑADIR AL CARRITO</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                            <Box className='sillasCatalogootro'>
                            <img src={silla3} height={280} style={{borderRadius:'8px'}}/>
                            <p>Silla de Ruedas Motorizada gris metalizada abastible M200</p>
                            </Box>
                            <Box className='botonCatalogo'>
                            <Button variant='contained' size='small' fullWidth>AÑADIR AL CARRITO</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} >
                            <Box className='sillasCatalogootro'>
                            <img src={silla1}  height={280} style={{borderRadius:'8px'}}/>
                            <p>Silla de Ruedas Motorizada gris metalizada abastible M200</p>
                            </Box>
                            <Box className='botonCatalogo'>
                            <Button variant='contained' size='small' fullWidth>AÑADIR AL CARRITO</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                </Grid>
                </Box>
            </Box>
        </Fragment>
      );
}
 
export default Catalogo;