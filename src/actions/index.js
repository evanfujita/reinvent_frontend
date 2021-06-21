import { CURRENT_USER } from '../helpers/constants'

export const currentUser = (dispatch, reqObj) => {
    fetch('http://localhost:3000/current_user', reqObj)
    .then(resp => resp.json())
    .then(user => dispatch({type: CURRENT_USER, payload: user})
)
}

export const parMeter = par => {
    return {
        type: 'PAR_METER',
        par
    }
}
