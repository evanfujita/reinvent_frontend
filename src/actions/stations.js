export const renderStations = stations => {
    return {
        type: 'RENDER_STATIONS',
        stations
    }
}

export const setStation = station => {
    return {
        type: 'SET_STATION',
        station
    }
}