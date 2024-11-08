import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserReducer from './slices/UserSlice';
import CounterReducer from './slices/ButtonClickSlice'



const rootReducer = combineReducers({
  user: UserReducer,
  count: CounterReducer
  });


export const store = configureStore({
  reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch