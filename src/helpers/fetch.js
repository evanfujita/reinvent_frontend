export const handleReqObj = (method, object) => {
    return { 
        method: method, 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    }
}

export const fetchVendors = (renderVendors) => {
    fetch('http://localhost:3000/vendors')
    .then(resp => resp.json())
    .then(vendors => {
      renderVendors(vendors)
    })
}

export const fetchIngredients = (renderIngredients, lowIngredient) => {
    fetch('http://localhost:3000/ingredients')
    .then(resp => resp.json())
    .then(ingredients => {
        const sortedIngredients = ingredients.sort(function(a,b){
            if(a.name < b.name) {return -1}
            if(a.name > b.name) {return 1}
            return 0
        })
        renderIngredients(sortedIngredients)
        sortedIngredients.forEach(ingredient => {
            if(ingredient.quantity < ingredient.par){
                lowIngredient(ingredient)
            } 
            }
        )
    })
}