import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const OrderMeter = props => {

    const [orderAbovePar, setPar] = useState(0)
    const handleChange = event => {
        setPar(event.target.value)
    }
    
    return(
        <Form inverted>
        <Form.Input
            width='10'
            label={`order relative to par: ${orderAbovePar}%`}
            min={0}
            max={300}
            name='order relative to par'
            onChange={handleChange}
            step={5}
            type='range'
            value={orderAbovePar}
        />
        </Form>
    )
}

export default OrderMeter