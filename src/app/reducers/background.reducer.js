import {createSlice} from '@reduxjs/toolkit'

const backgroundSlice= createSlice({
    name:'background',
    initialState:{
        bgColor:'dark',
        bgImg:'dark',
    },
})

export default backgroundSlice.reducer