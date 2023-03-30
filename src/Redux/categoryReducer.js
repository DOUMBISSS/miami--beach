const initialState = {
    categories: [],
    products: [],
    newArrivages:[],
    article:{},
}

export function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-CATEGORIES-SMART": {
            return {
                ...state,categories : action.payload
            }
        }
        case "GET-ALL-ARTICLES": {
            return {
                ...state,products : action.payload
            }
        }
        case "GET-ARTICLE": {
            return {
                ...state,article : action.payload
            }
        }
        case "GET-NEW-ARRIVAGES": {
            return {
                ...state,newArrivages: action.payload
            }
        }
        default: {
            return state
        }
    }
  
}