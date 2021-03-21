import React from 'react'
import { connect } from 'react-redux'
import StationsViewer from './StationsViewer'
import Dishes from './Dishes'
import Ingredients from './Ingredients'

import { Grid, Segment } from 'semantic-ui-react'

class Dashboard extends React.Component {

    render(){
        // const { first_name, last_name, restaurant } = this.props.user
        
        return(
            <Segment>
                <Grid columns={3} relaxed='very'>
                  <Grid.Row>
                    <Grid.Column color='orange'>
                      <StationsViewer />
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