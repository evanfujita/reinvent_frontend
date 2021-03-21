import React from 'react'
import { connect } from 'react-redux'

class DishComponents extends React.Component{


render(){
    const displayComponents = this.props.components.map(component => {
        return (
        <div>
            <p>{component.name} - {component.quantity} {component.quantity_unit}</p>

        </div>
        )
    })

    return(
        <div>
            {displayComponents}
        </div>
    )
}
}


export default DishComponents