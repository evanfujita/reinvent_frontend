import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Grid, Menu } from 'semantic-ui-react'
import { renderStations } from '../actions/stations'
import { setStation } from '../actions/stations'
class Stations extends React.Component{

    state = {
        showArea: null
    }

    componentDidMount(){
        fetch('http://localhost:3000/stations/')
        .then(resp => resp.json())
        .then(stations=> {
            this.props.renderStations(stations)
        })
    }
    
    handleChange = (event) => {
        const id = parseInt(event.target.id)
        this.props.setStation(id)
    }
    
    render(){
        const display = this.props.stations.map(station => {
           return {key: station.id, id: station.id, text: station.name, value: station.id}
        })

        return(
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                    <Dropdown onChange={this.handleChange} text='Stations' options={display} simple item />
                    </Grid.Column>
                    <Grid.Column>
                        {this.state.showArea}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        {this.state.showArea}
                    </Grid.Column>
                </Grid.Row>

            </Grid>

        )
    }
}

const mapStateToProps = state => {
    return {
        stations: state.stations
    }
}

const mapDispatchToProps = {
    renderStations,
    setStation
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations)
