import React,{Fragment} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import info1 from '../img/info1.webp'

const Info = () => {
    return ( 
        <Fragment>
            <Box className='containerInfo'>
            <Grid container xs={10} sm={10} md={10} lg={10} spacing={2}>
                <Grid  container item  xs={8} sm={8} md={8} lg={8} spacing={2}>
                    <Grid item  xs={7} sm={7} md={7} lg={7} style={{display:'flex',justifyContent:'center'}} >
                        <Box className='info'>
                        <h1>
                            ¿Porque eleginos?
                        </h1>
                        <div style={{display:'flex', justifyContent:'center'}}>
                        <Button variant='contained' size='small' color="success" >Conoce mas de nosotros</Button>
                        </div>
                        </Box>  
                    </Grid>
                    <Grid item  xs={5} sm={5} md={5} lg={5} style={{display:'flex',justifyContent:'center'}}>
                        <Box className='tienda'>
                            <h1>
                                Tienda surtida
                            </h1>
                        </Box>
                    </Grid>
                    <Grid item  xs={5} sm={5} md={5} lg={5} style={{display:'flex',justifyContent:'center'}}>
                        <Box className= 'usuario'>
                        <h1>
                        Usuario interezado
                        </h1>
                        </Box>
                    </Grid>
                    <Grid item  xs={7} sm={7} md={7} lg={7} style={{display:'flex',justifyContent:'center'}}>
                    <Box className= 'servicio'>
                        <h1>
                        Servicio integral
                        </h1>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item  xs={4} sm={4} md={4} lg={4} style={{display:'flex',justifyContent:'center'}}>
                <Box className= 'gente'>
                        <h1>
                    Gente informada
                    </h1>
                </Box>
                </Grid>
            </Grid>
            </Box>
        </Fragment>
     );
}
 
export default Info;