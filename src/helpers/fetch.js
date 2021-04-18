export const handleReqObj = (method, object) => {
    return { 
        method: method, 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    }
}

export const fetchUser = (currentUser, reqObj) => {
    fetch('http://localhost:3000/current_user', reqObj)
    .then(resp => resp.json())
    .then(user => {
      currentUser(user)
})
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

export const deleteFetch = (resource, id) => {
    fetch(`http://localhost3000/${resource}/${id}`, {method: 'DELETE'})
}