const initialState = {
    carts:[],
    quantity:1
  }
  const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}

  export function cartReducer (state = initialState, action) {
    switch (action.type) {
      case "ADD_TO_CART":{
        let index = state.carts.find((cart) => cart.id === action.payload)
        if (index>=0) {
          state.carts[index].quantity += 1
        }
        // else {{const temp = {...action.payload, qty: 1}}
          return {
            ...state,carts: [...state.carts, {...action.payload, quantity: 1}],
          }
        }
          case "DELETE-ARTICLE":{
            let newState = [...state.carts] 
            let index = newState.indexOf(cart => cart.id === action.payload.id);
            newState.splice(index, 1);
            return {...state, carts: [...newState]};
          }
      // case "GET-USER-CART":{
      //   return {...state,carts: [...state.carts, action.payload]}
      // }
      
      default:
        return state
    }
  }