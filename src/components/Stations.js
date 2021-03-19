import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Grid, Menu } from 'semantic-ui-react'
import { addStation } from '../actions/index'

class Stations extends React.Component{

    state = {
        showArea: null
    }

    componentDidMount(){
        this.props.stations.forEach(station => {
            fetch('http://localhost:3000/stations/')
            .then(resp => resp.json())
            .then(station=> {
                this.props.addStation(station)
            })
        })
    }
    
    handleChange = (event) => {
        this.setState({
            showArea: event.target.innerText
        })
    }
    
    render(){
        const display = this.props.stations.map(station => {
           return {key: station.id, text: station.name, value: station.id}
        })

        const show = () => {<div>  </div>}

        return(
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                    <Dropdown onChange={this.handleChange} text='Stations' options={display} simple item />
                    </Grid.Column>
                    <Grid.Column>
                        <br/>
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
    addStation: addStation
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations)
