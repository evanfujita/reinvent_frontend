import { 
    // ADD_INGREDIENT, 
    RENDER_INGREDIENTS } from "../helpers/constants"

export const loginIngredients = (dispatch) => {
    fetch('http://localhost:3000/getIngredients')
    .then(resp => resp.json())
    .then(ingredients => dispatch({type: RENDER_INGREDIENTS, payload: ingredients})
    )
}

export const updateIngredient = ingredient => {
    return {
        type: 'UPDATE_INGREDIENT',
        ingredient
    }
}


export const updateIngredientQuantity = (dispatch, reqObj) => {
    fetch('http://localhost:3000/updateInventory', reqObj)
    .then(resp => resp.json())
    .then(ingredients => {
        let keys = Object.keys(ingredients)
        keys.forEach(key => dispatch({type: 'UPDATE_INGREDIENT_QUANTITY', payload: ingredients[key]}))
    })
}

// export const addIngredient = (dispatch, reqObj) => {
//     fetch(`http://localhost:3000/ingredients`, reqObj)
//     .then(resp => resp.json())
//     .then(ingredient => {
//         debugger
//         dispatch({ type: ADD_INGREDIENT, payload: ingredient})
//     })
// }



export const addIngredient = ingredient => {
    return {
        type: 'ADD_INGREDIENT',
        ingredient
    }
}

export const deleteIngredient = ingredient => {
    return {
        type: 'DELETE_INGREDIENT',
        ingredient
    }
}

export const lowIngredient = ingredient => {
    return {
        type: 'LOW_INGREDIENT',
        ingredient
    }
}

export const removeLowIngredient = ingredient => {
    return {
        type: 'REMOVE_LOW_INGREDIENT',
        ingredient
    }
}

export const abundantIngredient = ingredient => {
    return {
        type: 'ABUNDANT_INGREDIENT',
        ingredient
    }
}

