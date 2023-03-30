
export function getCateSmart(product) {
    return {
        type: 'GET-CATEGORIES-SMART',
        payload: product
    }
}
export function getAllArticles(products) {
    return {
        type: 'GET-ALL-ARTICLES',
        payload: products
    }
}
export function getProduct(article) {
    return {
        type: 'GET-ARTICLE',
        payload: article
    }
}
export function getNew(products) {
  return {
      type: 'GET-NEW-ARRIVAGES',
      payload: products
  }
}
export function AddArticle (id) {
    return {
      type: "ADD-ARTICLE",
      payload: {id},
    }
  }

  export function DeleteArticle(){
    return {
      type: "DELETE-ARTICLE",
    }
  }

export function getUserCart(cart){
  return {
    type:"GET-USER-CART",
    payload :cart
  }
}

export function getUser(user){
  return {
    type:"GET-USER",
    payload:user
  }
}
export const addToCart= (id)=>{
  return{
      type: 'ADD_TO_CART',
      payload:id
  }
}
//remove item action
export const removeItem=()=>{
  return{
      type: 'REMOVE_ITEM',
  }
}
//subtract qt action
export const subtractQuantity=(id)=>{
  return{
      type: 'SUB_QUANTITY',
      id
  }
}
//add qt action
export const addQuantity=(id)=>{
  return{
      type: 'ADD_QUANTITY',
      payload:id
  }
}
export const increaseQuantity =()=> ({
  type: 'INCREASE_QUANTITY'
});

export const decreaseQuantity =()=>({
  type: 'DECREASE_QUANTITY',
});

