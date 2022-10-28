import React from 'react';
import { Button, Grid, Typography,TextField,Box, ListItem,Icon } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link, useNavigate } from "react-router-dom";
import profile from '../../assets/images/profile.png'
import clock from '../../assets/images/clock.png'
import ListItemm from '../../component/Listitem/ListItemm';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import {  Logout } from '../../Redux/Slice/authSlice';

const Todo = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleLogout=()=>{
        dispatch(Logout())
        navigate("/Login")
      }

    return ( 
        <>
        <Box height={280} width={'100%'} bgcolor={'primary.main'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} sx={{flexDirection:'column'}}>
            <Box width={'fit-content'}><img src={profile} /></Box>
            <Box ><Typography variant={'h3'} color={'white'}>Welcome Oliva Grace</Typography> </Box>
            <Box onClick={handleLogout} ><LogoutIcon color="white" sx={{cursor:'pointer'}}/> </Box>
        </Box>
        <Grid display={'flex'} sx={{flexDirection:"column",alignItems:'center'}} xs={12}  p={3}>
            <Grid alignSelf={'flex-end'} ><Typography variant={'h3'}>Good Afternoon</Typography></Grid>
            <Grid ><img src={clock} /></Grid>
            <Grid alignSelf={'flex-start'}><Typography variant={'h3'}>Task Lists</Typography></Grid>
            <Grid width={'80%'} bgcolor={'white'} height={250} p={1} marginTop={1}>
                <Grid display={'flex'} justifyContent={'space-between'} sx={{px:2,marginBottom:1}}>               <Typography variant={'h3'}>Daily Tasks</Typography>
                <AddCircleIcon color='primary'sx={{cursor:'pointer'}}/></Grid>
                <ListItemm/>
                </Grid>
        </Grid>
        </>
        
     );
}
 
export default Todo;