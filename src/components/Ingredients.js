import React from 'react'
import { connect } from 'react-redux'
import { addIngredient } from '../actions/index'
import { Menu, Dropdown } from 'semantic-ui-react'


class Ingredients extends React.Component{

    componentDidMount(){
        fetch('http://localhost:3000/ingredients')
        .then(resp => resp.json())
        .then(ingredients => {
            debugger
            this.props.addIngredient(ingredients)
        })
    }
    
    render(){

        // const display = this.props.ingredients.map(ingredient => {
        //     return {key: ingredient.id, text: ingredient.name, value: ingredient.id}
        //  })

        return(
            <Menu compact>
                {/* <Dropdown onChange={this.handleChange} text='Stations' options={display} simple item /> */}
            </Menu>
        )
    }
}


const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}

const mapDispatchToProps = {
    addIngredient
}


export default connect(mapStateToProps, mapDispatchToProps)(Ingredients)