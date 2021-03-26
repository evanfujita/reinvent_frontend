import React from 'react'
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import Email from './Email'


class Dashboard extends React.Component {

    render(){
      
      return(
    
        <Grid columns={3}>
          <Grid.Row> 
            <Grid.Column>
                <Email />
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