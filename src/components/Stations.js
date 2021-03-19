import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Menu } from 'semantic-ui-react'


class Stations extends React.Component{
    
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

export default connect(mapStateToProps)(Stations)
