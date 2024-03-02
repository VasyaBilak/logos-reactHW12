import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostRTKServices } from "../../services/apiServices";

export interface Albums {
    userId: number,
    id: number,
    title: string,
}

export interface Todos {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export interface Comments {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export interface UserInitialState {
    todos: Todos [] | [],
    albums: Albums [] | [],
    comments: Comments [] | [],
}

const initialState: UserInitialState = {
    albums: [],
    todos: [],
    comments: [],
}

export const getAlbumsThunkRTK = createAsyncThunk(
    '/api/albums',
    (data, { rejectWithValue }) => {
        return PostRTKServices.getAlbums()
            .then(resp => resp.data)
            .catch(e => rejectWithValue(e))
    }
)

export const getTodosThunkRTK = createAsyncThunk(
    '/api/todos',
    (data, { rejectWithValue }) => {
        return PostRTKServices.getTodos()
            .then(resp => resp.data)
            .catch(e => rejectWithValue(e))
    }
)

export const getCommentsThunkRTK = createAsyncThunk(
    '/api/comments',
    (data, { rejectWithValue }) => {
        return PostRTKServices.getComments()
            .then(resp => resp.data)
            .catch(e => rejectWithValue(e))
    }
)


export const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAlbumsThunkRTK.fulfilled.type, (state, action: any) => {
                state.albums = action.payload
            })
            .addCase(getAlbumsThunkRTK.rejected.type, (state, action) => {
                console.log('Error', action);
            })
            .addCase(getTodosThunkRTK.fulfilled.type, (state, action: any) => {
                state.todos = action.payload
            })
            .addCase(getTodosThunkRTK.rejected.type, (state, action) => {
                console.log('Error', action);
            })
            .addCase(getCommentsThunkRTK.fulfilled.type, (state, action: any) => {
                state.comments = action.payload
            })
            .addCase(getCommentsThunkRTK.rejected.type, (state, action) => {
                console.log('Error', action);
            })
      }
})

export default PostsSlice.reducer


