import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  value: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(), 
        text: action.payload,
      };
      state.value.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
    editTodo:(state,action)=>{

    }
  },
});

export const { addTodo, deleteTodo,editTodo } = todosSlice.actions;
export default todosSlice.reducer;
