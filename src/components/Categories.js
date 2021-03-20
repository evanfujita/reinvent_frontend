import React from 'react'
import { connect } from 'react-redux'
import { renderIngredients } from '../actions/ingredients'
import { selectCategory } from '../actions/index'
import { Menu, Dropdown, Divider, Grid} from 'semantic-ui-react'



class Ingredients extends React.Component{
    constructor(){
        super()
        this.state = {
            categoryId: 0,
            categories: ''
        }
    }

    handleChange = (event) => {
        // debugger
        const id = parseInt(event.target.id)
        this.setState({
            categoryId: event.target.id,
            categories: event.target.innerText
        })
        const category = this.props.categories.find(category => category.id === id)
        this.props.selectCategory(category)

    }

    handleIngredientsChange = event => {
        this.setState({
            ingredients: event.target.innerText
        })
    }

    render(){

       const categoryOptions = this.props.categories.map(category => {
            return {key: category.id, id: category.id, text: category.name, value: category.id}
        })

        return(
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Dropdown 
                            placeholder='categories'
                            search
                            selection
                            options={categoryOptions}  
                            onChange={this.handleChange}
                            text={this.state.categories}
                        />
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
        )
    }
}


const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = {
    selectCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories)

