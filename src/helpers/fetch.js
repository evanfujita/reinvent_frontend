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

export const addFetch = (resource, reqObj, dispatch) => {
    fetch(`http://localhost:3000/${resource}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
        dispatch(data)
    })
}

export const patchFetch = (resource, id, reqObj, dispatch) => {
    fetch(`http://localhost:3000/${resource}/${id}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
        if(dispatch){dispatch(data)}
    })
}

export const updateInventoryFetch = (reqObj, dispatch) => {
    fetch(`http://localhost:3000/updateInventory`, reqObj)
    .then(resp => resp.json())
    .then(data => {
        Object.keys(data).forEach(item => dispatch(data[item]))
    })
}

export const loginAuth = (reqObj, props) => {
    fetch('http://localhost:3000/auth', reqObj)
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                // this.setState({
                //     error: user.error
                // })
            } else {
                props.loginSuccess(user.user)
                // props.history.push('/ingredients')
                fetchIngredients(props.renderIngredients, props.lowIngredient)
                fetchVendors(props.renderVendors)
                localStorage.setItem('token', user.token)
            }
        })
}
