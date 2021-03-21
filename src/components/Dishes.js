import React from 'react'
import { connect } from 'react-redux'
import { renderDishes } from '../actions/dishes'
import DishComponents from './DishComponents'


class Dishes extends React.Component{

componentDidMount(){
    fetch('http://localhost:3000/dishes')
    .then(resp => resp.json())
    .then(dishes => {
        this.props.renderDishes(dishes)
    })
}

render(){
    const displayDishes = this.props.dishes.map(dish => {
               return (
                <div>
                    <p>{dish.name}</p>
                    <DishComponents components={dish.components} />
                    <br/><br/>
                </div>
                )
    })

    return(
        <div>
            {displayDishes}
        </div>
    )
}
}

const mapStateToProps = state => {
    return{
        dishes: state.dishes
    }
}

const mapDispatchToProps = {
    renderDishes
}

export default connect(mapStateToProps, mapDispatchToProps)(Dishes)