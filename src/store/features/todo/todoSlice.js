import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
todos:[
    {id:nanoid(),name:"wake up",description:"i am early riger",date:"12/3/23"},
    {id:nanoid(),name:"Brackfast",description:"i take my breakfast",date:"13/5/23"},
    {id:nanoid(),name:"Coding",description:"",date:""},
],
toggleForm:true,
todoUpdate:{},
};

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        todoAdded:(state,action)=>{
            state.todos=[...state.todos,action.payload];
        },
        todoCleared:(state,)=>{
            state.todos=[];
        },
        todoDeleted:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload);

        },
        toggleForm:(state,action)=> {
            state.toggleForm=!state.toggleForm;
            state.todoUpdate={...state.todoUpdate,...action.payload}
        },  
        todoUpdated:(state,action)=>{
            const todotoupdate=state.todos.find(todo=>todo.id!==action.payload.id)

            todotoupdate.name=action.payload.name;
            todotoupdate.date=action.payload.date;
            state.toggleForm=!state.toggleForm;
        }

    }     
});

export const {todoAdded,todoCleared,todoDeleted,toggleForm,todoUpdated}=todoSlice.actions;

export default todoSlice.reducer;