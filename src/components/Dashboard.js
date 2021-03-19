import React from 'react'
import { connect } from 'react-redux'
import Stations from './Stations'

class Dashboard extends React.Component {

    render(){
        // const { first_name, last_name, restaurant_name } = this.props.user
        
        return(
            <div className='ui grid'>
                <div className='eight wide column'>
                    Your Dashboard
                    {/* <p className='text'>Welcome, {first_name} {last_name} of {restaurant_name}</p> */}
                    <Stations />
                </div>
                <div className='eight wide column'>
                    <Stations  />
                    <Stations />
                </div>
                <div className='eight wide column'>
                    <p>hi</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Dashboard)