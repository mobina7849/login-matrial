import React from 'react';
import { Button, Grid, Typography,TextField } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import login from '../../assets/images/login.png'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authAsyncThunk, Logout } from '../../Redux/Slice/authSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';

const Login = () => {
  const auth=useSelector(state=>state.auth)
  const dispatch= useDispatch()
  const navigate=useNavigate()
  const [form,setForm]=useState({username:'',password:""});
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  console.log(form)
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(authAsyncThunk(form))
   // alert('mobi')
  }
  if(auth.isLogin){
    navigate('/Todo')
  }
  useEffect(()=>{
      alert("name:mobina & password:12345")
  },[])
 
    return ( 
      <Grid  sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',mx:'auto',minHeight:"600px"} }  spacing={4}  height={'80%'} marginTop={5}>
        <Grid size="small"  item sx={{display:'flex',flexDirection:'column',alignItems:'center'}} width={'80%'}  >
            <Grid item marginBottom={2} ><Typography variant={'h1'}>Welcome Back!</Typography></Grid>
            <Grid item ><img src={login}/></Grid>
        </Grid>
        <Grid item width={'80%'} >
          <TextField id="outlined-search" label="Enter your full name"value={form.username} name={'username'} type="text" margin="dense"  fullWidth  size="small" onChange={handleChange} />
          <TextField id="outlined-search" label="Confirm password" type="password" value={form.password} name={'password'} margin="dense" fullWidth  size="small" onChange={handleChange}/>
        </Grid>
        <Grid item >
          <Typography variant={'subtitle1'} color={'primary.dark'}>Forget Password</Typography>
        </Grid>
        <Grid item width={'80%'} >
           <Grid >
              <Button variant={'mainButton'} onClick={handleSubmit}> {auth.loading?
                    <CircularProgress color="inherit" />:"Log In"
            }</Button>
           </Grid>
           <Grid item sx={{mx:'auto'}} textAlign={'center'} p={2} >
              <Typography variant={'subtitle2'} sx={{display:'inline'}}>Don’t have an account?<Link to={'/Register'}><Typography sx={{display:'inline'}} variant={'subtitle2'} color={'primary.main'}> Sign Up</Typography></Link> </Typography>
           </Grid>
        </Grid>


    </Grid>
     );
}
 
export default Login;