import React from 'react'
import { Button } from 'semantic-ui-react'

class ToggleButton extends React.Component {
    state = {
        toggle: false
    }

    handleClick = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    
    render(){
        return(
            <Button onClick={this.handleClick}>
                hello
            </Button>
        )
    }
}

export default ToggleButton