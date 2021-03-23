import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user
    }
}

export default connect(mapStateToProps)(Profile)