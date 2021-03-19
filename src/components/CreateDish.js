import React from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

class CreateDish extends React.Component{
    
    state = {
        ingredients: []
    }
    
    render(){
        
        // const options = this.props.ingredients.map(ingredient => {
        //     return {key: ingredient.id, value: ingredient.id, text: ingredient.name}
        // }

        return(
            <div>
                CREATE A DISH!

            Select Ingredients
                <Dropdown 
              placeholder='ingredients'
              fluid
              search
              selection
            //   options={options}  
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