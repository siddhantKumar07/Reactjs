import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice'
import CollectionData from './features/collectionSlice'
export const store = configureStore({
  reducer: {
    search:searchReducer,
    Collection:CollectionData
  },
})