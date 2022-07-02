import React,{Fragment} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const Slider = () => {
    
    return ( 
        <Fragment>
            <Box className='containerSlider'  >
                <Grid container  >
                    <Box className='contenedorTexto' >
                    <Grid item  xs={3} sm={3} md={3} lg={3}  >
                        <h1 className='texto'>
                            <samp style={{color:'#095BD2'}}> MÁS</samp> <samp style={{color:'#B2BABB'}}>DE 800 MIL FAMILIAS HABILITADAS</samp>
                        </h1>
                        <Button variant='contained' size='large'> VER PRODUCTOS</Button>
                    </Grid>
                    </Box>
                </Grid>
            </Box>

        </Fragment>
    );
}


export default Slider;