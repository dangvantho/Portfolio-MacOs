import apps from '../../configs/apps'
import { createSlice} from '@reduxjs/toolkit'

const appsSlice= createSlice({
    name:'apps',
    initialState: apps,
    reducers:{
        openApp: (state, action)=>{
            console.log(action)
            console.log(state)
            let newApp= state.map(app=>{
                if(app.id===action.payload){
                    app= {...app, show: true}
                    console.log(app.show, app.id)
                }
                return app
            })
            return newApp
        },
        closeApp: (state, action)=>{
            console.log(action)
            let newApp= state.map(app=>{
                if(app.id===action.payload){
                    app= {...app, show: false}
                }
                return app
            })
            return newApp
        }
    }
})
export const { openApp, closeApp }= appsSlice.actions
export default appsSlice.reducer
