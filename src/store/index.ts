import { createSlice, configureStore } from '@reduxjs/toolkit'
import {INITIAL_STATE} from './state';

const basketSlice = createSlice({
    name: 'basket',
    initialState: INITIAL_STATE,
    reducers: {
        addItem: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }
                return {
                    ...item,
                    added: true
                }
            })
        },
        removeItem: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }
                return {
                    ...item,
                    added: false
                }
            })
        },
        removeAll: (state) => {
            return state.map(item => {
                return {
                    ...item,
                    added: false
                }
            })
        }
    }
})

const store = configureStore({ reducer: basketSlice.reducer });

export const { addItem, removeItem, removeAll } = basketSlice.actions;
export { store, basketSlice };