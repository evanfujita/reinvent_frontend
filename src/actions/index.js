export const currentUser = user => {
    return {
        type: 'CURRENT_USER',
        user
    }
}

export const parMeter = par => {
    return {
        type: 'PAR_METER',
        par
    }
}
