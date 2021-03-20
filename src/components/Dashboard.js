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
                  <Grid.Row>
                    <Grid.Column color='orange'>
                      <Stations />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Dishes />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column color='grey'>
                      <Ingredients />
                        Hello
                    </Grid.Column>
                  </Grid.Row>
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