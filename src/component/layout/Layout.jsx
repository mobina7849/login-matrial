import React from 'react';
import {Grid} from '@mui/material';
import { Outlet } from 'react-router-dom';
import circle from '../../assets/images/circle.png'
const Layout = () => {
    return ( 
    <Grid   >
        <Grid container  position={'relative'} xs={12} md={5} marginX={'auto'} height={{xs:'auto'}} bgcolor={'#EEE'} marginTop={{md:1}}  >
            <Grid  xs={5} position={'absolute'} item height={100} sx={{zIndex:'10'}}> <img width={'100%'}  src={circle}/></Grid>
            <Outlet/>
        </Grid>
    </Grid>
     );
}
 
export default Layout;