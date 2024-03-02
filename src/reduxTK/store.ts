import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './slices/postsSlice'
import albumsReducer from './slices/postsSlice'
import commentsReducer from './slices/postsSlice'


export const store = configureStore({
    reducer: {
        todosReducer: todosReducer,
        albumsReducer: albumsReducer,
        commentsReducer: commentsReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch