import React from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

class CreateDish extends React.Component{
    
    constructor(){
        super()
        this.state = {
            ingredients: []
        }
    }

    handleChange = (event) => {
        debugger
        if(event.targe.className === 'delete icon'){


        }

        const id = parseInt(event.target.id)
        this.setState({
            ...this.state, 
            ingredients: [...this.state.ingredients, id]
        })
    }
    
    render(){
        
        const options = this.props.ingredients.map(ingredient => {
            return {key: ingredient.id, id: ingredient.id, text: ingredient.name, value: ingredient.id}
        })

        return(
            <div>
            <p>Select Ingredients</p>
                <Dropdown 
                    onChange={this.handleChange}
                    placeholder='ingredients'
                    multiple
                    fluid
                    search
                    selection
                    options={options}  
                    onChange={this.handleChange}
                    value={this.state.search}
                />  
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        ingredients: state.ingredients
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps)(CreateDish)