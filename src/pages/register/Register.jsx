import React from 'react';
import { Button, Grid, Typography,TextField } from '@mui/material';
import { Link } from "react-router-dom";
const Register = () => {
    return ( 
     <Grid container sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',mx:'auto',minHeight:"600px"}}   marginTop={10} height={'80%'} >
        <Grid container item sx={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}} width={'80%'} >
            <Grid item ><Typography variant={'h1'}>Welcome Onboard!</Typography></Grid>
            <Grid item ><Typography variant={'subtitle1'}textAlign={'center'}>Let’s help you meet up your tasks.</Typography></Grid>
        </Grid>
        <Grid width={'80%'} >
        <TextField id="outlined-search" label="Enter your full name" type="text" margin="dense"  fullWidth size="small" />
        <TextField id="outlined-search" label="Enter your e-mail" type="email" margin="dense" fullWidth size="small"  />
        <TextField id="outlined-search" label="Enter password" type="password"  margin="dense" fullWidth size="small"  />
        <TextField id="outlined-search" label="Confirm password" type="password" margin="dense"  fullWidth size="small"  />
        </Grid>
        <Grid  width={'80%'} sx={{mx:'auto'}}>
           <Grid item >
              <Button variant={'mainButton'}>Register</Button>
           </Grid>
           <Grid item sx={{mx:'auto'}} textAlign={'center'} p={2}>
              <Typography variant={'subtitle2'} sx={{display:'inline'}}>Already have an account ?<Link to={'/Login'}><Typography sx={{display:'inline-block'}} variant={'subtitle2'} color={'primary.dark'}>Sign in</Typography></Link> </Typography>
           </Grid>
        </Grid>


    </Grid>
     );
}
 
export default Register;