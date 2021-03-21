import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Grid, Menu } from 'semantic-ui-react'
import { renderStations } from '../actions/stations'
import { setStation } from '../actions/stations'
import Station from './Station'

class StationsViewer extends React.Component{

    state = {
        station: {}
    }

    componentDidMount(){
        fetch('http://localhost:3000/stations/')
        .then(resp => resp.json())
        .then(stations=> {
            this.props.renderStations(stations)
        })
    }

    handleClick = event => {
        const id = parseInt(event.target.id)
        this.props.setStation(id)
        const stationInfo = this.props.stations.find(station => station.id === this.props.station)
        this.setState({
            station: stationInfo
        })
        debugger
    }
    
    render(){
        const selectedStation = this.props.station
        const showStations = this.props.stations.map(station => 
            
            { 
                 return (
                <Menu.Item
                    key={station.id}
                    name={station.name}
                    id={station.id}
                    active={selectedStation === station.id}
                    onClick={this.handleClick} 
                />
            )
        })

        return(
            <Grid columns={2} divided>
                <Grid.Row>
                    <Menu pointing secondary>{showStations} </Menu>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>

                    </Grid.Column>
                </Grid.Row>

            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        stations: state.stations,
        station: state.station
    }
}

const mapDispatchToProps = {
    renderStations,
    setStation
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsViewer)
