//karhaee ke samt server nemire hamash sync
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login } from "../../api/login";
 const initialState={
    isLogin:false,
    loading:false,
    name:'',
    country:"",
    age:"",
    error:''
 }
 //2 vorodi migire nam va callback
 //khodemon behesh data pass midim 
export  const authAsyncThunk=createAsyncThunk(
    'auth/login',
    //authData=>{username:'mobina',password:'12345'}
   async (authData)=>{
        const data=await Login(authData.username,authData.password)
        return data;
        //data=>payload
    }
)
 export const AuthSlice= createSlice({
    name:'auth',
    initialState,
    //sync-redux-toolkit
    //object
    reducers:{
        Logout:(state)=>{
            state.isLogin=false
            state.loading=false
            state.name=''
            state.country=""
            state.age=""
            state.error=''
        }
    },
    //async-redux-thunk
    //functoin call back
    extraReducers:(builder)=>{
        //ye arrow migire ke bege zaman pending chikar kone
        builder.addCase(authAsyncThunk.pending,(state,action)=>{
            state.loading=true

        })
        builder.addCase(authAsyncThunk.fulfilled,(state,action)=>{
            //action return response resolve
            //action object
            //payload{
                //name:'mobina'
                //age:'23'
                //country:"iran"
            //}
            const {payload}=action
            state.isLogin=true
            state.loading=false
            state.name=payload.name
            state.age=payload.age
            state.country=payload.country

        })
        builder.addCase(authAsyncThunk.rejected,(state,action)=>{
            //action return reject
            state.loading=false
            state.error='invalid username or paaword'
        })

    }
 })
 export const {Logout}=AuthSlice.actions;
 export default AuthSlice.reducer