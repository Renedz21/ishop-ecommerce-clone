import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getItem, setItem } from '../../utils/localStorage';

//* Define a type for the slice state
interface CartAddState {
    id: string;
    name: string;
    price: number;
    quantity: number;
    category: any;
    image: string;
    total?: number;
}
interface CartRemoveState {
    id: string;
}

//* Define the initial state using that type
const initialState: CartAddState[] = getItem('cart') || []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartAddState>) => {
            const { id, name, price, quantity, image, category } = action.payload;
            const item = state.find((item) => item.id === id);

            if (item) {
                item.quantity += quantity;
            } else {
                state.push({ id, name, price, quantity, image, category })
                state.map((item) => item.total = item.price * item.quantity)
            }
            setItem('cart', state);
        },
        removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
            const { id } = action.payload;
            if (state.some((item) => item.id === id) && state.length > 0) {
                console.log(state.length)
                state.splice(state.findIndex((item) => item.id === id), 1)
            }
            setItem('cart', state);
        },
        updateQuantity: (state, action: PayloadAction<any>) => {
            const { id, quantity } = action.payload;
            if (state.find((item) => item.id === id)) {
                state.map((item) => {
                    if (item.id === id) {
                        item.quantity = quantity;
                        item.total = item.price * item.quantity
                    }
                })
            }
            setItem('cart', state);

        }
    },
})

export const { addToCart, removeToCart, updateQuantity } = cartSlice.actions