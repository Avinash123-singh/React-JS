import {createSlice,nanoid} from '@reduxjs/toolkit'//nanoId is used to provide unique Id 

const initialState={
    todos:[{
        id:1,
        text:"Hello World"
    }]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
      addTodo:(state,action)=>{
        const todo={
        id:nanoid(),
        text:action.payload
        }
        state.todos.push(todo)
      },//in this reducer you will always get the access of state and action(state explain about current situation exist)
      removeTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload
        )
      }

    }
})
export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer