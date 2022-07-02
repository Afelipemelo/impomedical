import React,{Fragment} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const Productos = () => {
    return ( 
        <Fragment>
            <Box className='containerProduto' style={{display:'flex',justifyContent:'center',marginBottom:'100px'}}>
                <Grid container xs={10} sm={10} md={10} lg={10}  spacing={2}>
                    <Grid item  xs={6} sm={6} md={6} lg={6} style={{display:'flex',justifyContent:'center'}} >
                        <Box className='empresas'>
                            <Grid item xs={2} sm={2} md={2} lg={2} >
                        <h1>
                            Empresas en crecimiento
                        </h1>
                            </Grid>
                        <div style={{display:'flex', justifyContent:'center'}}>
                        <Button variant='contained' size='small' color="success" >Conoce mas de nosotros</Button>
                        </div>
                        </Box>  
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} style={{display:'flex',justifyContent:'center'}}>
                    <Box className='complemento'>
                            <Grid item xs={2} sm={2} md={2} lg={2} >
                            <h1>Complemento linea de oximetria</h1>
                            </Grid>
                        <div style={{display:'flex', justifyContent:'center'}}>
                        <Button variant='contained' size='small' color="success" >Conoce mas de nosotros</Button>
                        </div>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </Fragment>
     );
}
 
export default Productos;