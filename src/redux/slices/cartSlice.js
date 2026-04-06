import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //add to cart - View & WIshlist compoenet , payload - entire product object
        addToCart :(state,action)=>{
            const existingItem = state?.find(item=>item.id==action.payload.id)
            if(existingItem){
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.quantity * existingItem.price
                const remaingItems = state?.filter(item=>item.id!=existingItem.id)
                state = [...remaingItems,existingItem]
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        //remove cart item - Cart component , payload: product id
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)            
        },
        // increment cart - Cart Component, payload : product id
        incrementCart:(state,action)=>{
            const existingProduct = state.find(item=>item?.id==action.payload)   
            console.log(existingProduct);                   
            const remaningProdcuts = state.filter(item=>item.id!=action.payload)
            existingProduct.quantity += 1
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            state = [...remaningProdcuts,existingProduct]
        },
        //decrement cart - Cart Component, payload : product id
        decrementCart:(state,action)=>{
            const existingProduct = state?.find(item=>item.id==action.payload)          
            const remaningProdcuts = state.filter(item=>item.id!=action.payload)
            existingProduct.quantity -= 1
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            state = [...remaningProdcuts,existingProduct]
        },
        //empty cart
        emptyCart:(state)=>{
            return []
        }
    }
})

export const {addToCart,removeCartItem,incrementCart,decrementCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer