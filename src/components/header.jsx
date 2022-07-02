import React,{Fragment} from 'react';
import Impormedical from '../img/impormedical.png'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
    return (  
        <Fragment>
            <Box className='containerHeader'>
                <Grid container  spacing={2}>
                    <Grid item xs={2} sm={2} md={2} lg={2} className='containerImagen'>
                            <img src={Impormedical} alt="impormedical" className='imgImpormedical' /> 
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} >
                        <FormControl sx={{ marginTop: '20px', marginLeft:'50px'  }} fullWidth variant="outlined" color='primary'  >
                            <OutlinedInput
                                placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ..."
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    edge="end"
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>    
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} ></Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}  > 
                        <Box className='misPedidos'>
                            <h5>
                            <Link underline="none"><b> MIS PEDIDOS </b></Link>
                            </h5>
                        </Box>           
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} >
                        <Box className='ingresar'>
                            <h5>HOLA ALIAD@</h5> 
                            <Link className='link'>
                                    INGRESA
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} >
                        <Box className='carrito'>
                            <Link>
                                <ShoppingCartOutlinedIcon/>
                            </Link>
                            <h4> CARRITO </h4>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    );
}
 
export default Header;