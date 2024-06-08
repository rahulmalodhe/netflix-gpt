import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:"gpt",
    initialState:{
        toggleShowGpt:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleShowGpt: (state) =>{
            state.toggleShowGpt = !state.toggleShowGpt
        },
        addGptMovieResult: (state, action)=>{
            const {movieNames,movieResults } = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})
export const {toggleShowGpt, addGptMovieResult} = gptSearchSlice.actions
export default gptSearchSlice.reducer