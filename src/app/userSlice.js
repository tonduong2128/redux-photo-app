import userApi from "../api/userApi"
import { createSlice, createAsyncThunk } from  "@reduxjs/toolkit";


export const getMe = createAsyncThunk('user/getMe',async (params, thunkApi)=>{
    //thunkApi.dispatch() other actions
    const currentUser = await userApi.getMe();
    return currentUser;
})
const userSlice=createSlice({
    name:"user",
    initialState:{
        current:{},
        loading:false,
        error:""
    },
    reducer:{
        [getMe.pending]: (state, action)=>{
            state.loading=true;
            console.log(1);
        },
        [getMe.rejected]: (state, action)=>{
            state.loading=false;
            state.erro="";
            console.log(2);
        },
        [getMe.fulfilled]: (state, action)=>{
            state.current=action.payload;
            console.log(3);
        },
    },
    extraReducers:{

    }

})

const {reducer: userReducer}=userSlice;
export default userReducer;