import React from 'react'
import { connect } from 'react-redux'
import { renderDishes } from '../actions/dishes'


class Dishes extends React.Component{

componentDidMount(){
    fetch('http://localhost:3000/dishes')
    .then(resp => resp.json())
    .then(dishes => {
        
        this.props.renderDishes(dishes)
    })
}


render(){
    return(
        <div>
            Dishes
        </div>
    )
}
}

const mapDispatchToProps = {
    renderDishes
}

export default connect(null, mapDispatchToProps)(Dishes)