import React from 'react'
import { connect } from 'react-redux'
import Stations from './Stations'
import Dishes from './Dishes'
import Ingredients from './Ingredients'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'

class Dashboard extends React.Component {

    render(){
        // const { first_name, last_name, restaurant } = this.props.user
        
        return(
            <Segment>
                <Grid columns={3} relaxed='very'>
                    <Grid.Column>
                        <Stations />
                    </Grid.Column>
                    <Grid.Column>
                        {/* <Ingredients /> */}
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)



// {/* <div className='ui grid'>
// <div className='sixteen wide column'>
//     {/* <p className='middle'>Welcome, {first_name} {last_name} of {restaurant}!</p> */}
// </div>
// <div className='eight wide column'>
//     <Stations />
// </div>
// <div className='eight wide column'>
//     <Ingredients  />
// </div>
// <div className='eight wide column'>
//     <Dishes />
// </div>
// <div className='eight wide column'>
    
// </div>
// </div> */}