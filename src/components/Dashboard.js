import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

class Dashboard extends React.Component {

    render(){
      
      return(
    
        <Grid columns={3}>
          <Grid.Row> 
            <Grid.Column>
            
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
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
        user: state.user,
    }
}

export default connect(mapStateToProps)(Dashboard)