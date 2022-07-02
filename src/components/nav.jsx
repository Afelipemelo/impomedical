import React,{Fragment} from 'react'
import { MdAccessible} from  'react-icons/md';
import { RiHeartPulseLine,RiVirusLine} from  'react-icons/ri';
import {IoPersonOutline} from  'react-icons/io5';
import { FiMenu} from  'react-icons/fi';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
const NavBar = () => {
    return (  
        <Fragment>
            <Grid container className='navBar' >
                <Grid item  xs={2} sm={2} md={2} lg={2}>
                    <Box className='menuRayas'>
                        <FiMenu color='#095BD2' size={28}/> 
                    </Box>
                </Grid>
                <Grid  item  xs={8} sm={8} md={8} lg={8} >
                    <Box className='containerNavbar'>
                        <Grid item  xs={2} sm={2} md={2} lg={2}>
                            <Box className='iconNavBar'>
                                <MdAccessible color='#095BD2' size={25}/>
                            <h6><Link >MOVILIDAD</Link></h6>
                            </Box>
                        </Grid>
                        <Grid item  xs={3} sm={3} md={3} lg={3}>
                            <Box className='iconNavBar'>
                                <RiHeartPulseLine color='#095BD2' size={25}/>
                                <h6>CUIDADO CON EL HOGAR</h6>
                            </Box>
                        </Grid>
                        <Grid item  xs={3} sm={3} md={3} lg={3}>
                            <Box className='iconNavBar'>
                                <IoPersonOutline color='#095BD2' size={25}/>
                                <h6>PROFESIONAL DE LA SALUD </h6>
                            </Box>
                        </Grid>
                        <Grid item  xs={3} sm={3} md={3} lg={3}>
                            <Box className='iconNavBar'>
                                <RiVirusLine color='#095BD2' size={25}/>
                                <h6>TAPABOCAS Y DESINFECCIÓN</h6>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    );
}
 
export default NavBar;