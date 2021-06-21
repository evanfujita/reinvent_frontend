import { ADD_INGREDIENT, LOGIN_SUCCESS } from "../helpers/constants"

export const loginIngredients = ingredients => {
    return{ 
        type: LOGIN_SUCCESS,
        ingredients
    }
}

// export const renderIngredients = ingredients => {
//     return {
//         type: 'RENDER_INGREDIENTS',
//         ingredients
//     }
// }

export const updateIngredient = ingredient => {
    return {
        type: 'UPDATE_INGREDIENT',
        ingredient
    }
}

export const updateIngredientQuantity = (ingredient) => {
    return {
        type: 'UPDATE_INGREDIENT_QUANTITY',
        ingredient
    }
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

