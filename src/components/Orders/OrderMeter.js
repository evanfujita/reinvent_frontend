import React from 'react'
import { Form } from 'semantic-ui-react'

class OrderMeter extends React.Component {

    state = { 
        orderAbovePar: 0
    }

    handleChange = event => {
        this.setState({
            orderAbovePar: event.target.value
        })
    }
    
    render(){
        const { orderAbovePar } = this.state
        return(
            <Form inverted>
            <Form.Input
                width='10'
                label={`order relative to par: ${orderAbovePar}%`}
                min={0}
                max={300}
                name='order relative to par'
                onChange={this.handleChange}
                step={5}
                type='range'
                value={orderAbovePar}
            />
            </Form>
        )
    }
}

export default OrderMeter