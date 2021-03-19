import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Menu } from 'semantic-ui-react'
import { addStation } from '../actions/index'


class Stations extends React.Component{
    componentDidMount(){
        this.props.stations.forEach(station => {
            fetch('http://localhost:3000/stations/')
            .then(resp => resp.json())
            .then(station=> {
                this.props.addStation(station)
                debugger
            })
        })
    }
    
    handleChange = (event) => {
        console.log(event.target.innerText)
    }
    
    render(){
        const display = this.props.stations.map(station => {
           return {key: station.id, text: station.name, value: station.id}
        })
        return(
            <Menu compact>
                <Dropdown onChange={this.handleChange} text='Stations' options={display} simple item />
            </Menu>
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
