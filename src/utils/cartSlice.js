import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{

            // Vanialla(older) Redux => DON'T MUTATE STATE
            // const newState = {...state};
            // newState.items.push(action.payload)
            // return newState;

            // Redux Toolkit uses immer BTS
            // We HAVE mutating the state here
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        // originalState = {items:['pizza']}
        clearCart:(state,action)=>{
            // state = ['vijay'] not mutating
            
            // RTK - either Mutate the Existing state or return a new State

            // console.log(state) will not work
            // console.log(current(state)) yes
            //state.items.length = 0; // []
            
            return { items : [] }; // this new object will be replaced inside originalState = []
        },
    },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
