import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import TodoReducer from './features/TodoSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos:TodoReducer
  },
})