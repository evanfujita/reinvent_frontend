import React from 'react'
import { connect } from 'react-redux'
import StationsViewer from './StationsViewer'
import Dishes from './Dishes'
import Ingredients from './Ingredients'

import { Grid } from 'semantic-ui-react'

class Dashboard extends React.Component {

    render(){
        
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
                <Ingredients />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
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
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)