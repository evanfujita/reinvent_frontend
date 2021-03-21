import React from 'react'
import { connect } from 'react-redux'
import StationsViewer from './StationsViewer'
import Dishes from './Dishes'
import IngredientsContainer from './IngredientsContainer'

import { Grid } from 'semantic-ui-react'
import station from '../reducers/station'

class Dashboard extends React.Component {

    render(){
      const station = this.props.station
      const viewDishes = this.props.stations
      
      return(
    
        <Grid columns={3}>
          <Grid.Row> 
            <Grid.Column>
              <StationsViewer />
            </Grid.Column>
            <Grid.Column>
              <Dishes />
            </Grid.Column>
            <Grid.Column>
              <IngredientsContainer />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              { <Dishes /> }
              

            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              hello
            </Grid.Column>
          </Grid.Row>
        </Grid>
          
      )
  }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        station: state.station,
        station: state.stations
        
    }
}

export default connect(mapStateToProps)(Dashboard)