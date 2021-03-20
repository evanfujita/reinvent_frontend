export const renderDishes = dishes => {
    return {
        type: 'RENDER_DISHES',
        dishes
    }
}

export const addDish = dish => {
    return {
        type: 'ADD_DISH',
        dish
    }
}
