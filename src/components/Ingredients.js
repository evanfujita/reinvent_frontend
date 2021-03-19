import React from 'react'
import { connect } from 'react-redux'
import { addIngredient } from '../actions/index'
import { selectCategory } from '../actions/index'
import { Menu, Dropdown, Divider, Grid} from 'semantic-ui-react'



class Ingredients extends React.Component{
    constructor(){
        super()
        this.state = {
            categoryId: 0,
            categories: '',
            ingredients: ''
        }
    }

    componentDidMount(){
        
        
        fetch('http://localhost:3000/ingredients')
        .then(resp => resp.json())
        .then(ingredients => {
            this.props.addIngredient(ingredients)
        })
    }

    handleChange = (event) => {
        const id = parseInt(event.target.id)
        this.setState({
            categoryId: event.target.id,
            categories: event.target.innerText
        })
        const category = this.props.categories.find(category => category.id === id)
        this.props.selectCategory(category)

    }

    

    ingredientOptions = () => {
        let ingredients = []
        if(this.state.categoryId !== 0){
            this.props.ingredients.filter(ingredient => {
                if(ingredient.category_id === this.state.categoryId){
                    ingredients.push({key: ingredient.id, id: ingredient.id, text: ingredient.name})
                }
            })         
        } else {
        
            this.props.ingredients.map(ingredient => {
            ingredients.push({key: ingredient.id, id: ingredient.id, text: ingredient.name})
            }
        )
    }
    return ingredients
}
    render(){
        
       const categoryOptions = this.props.categories.map(category => {
        
            return {key: category.id, id: category.id, text: category.name}
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
                value={this.state.categories}
                />
                </Grid.Column>
                <Grid.Column>
                <Dropdown 
                size='tiny'
                placeholder='ingredients'
                search
                selection
                options={this.ingredientOptions()}  
                // onChange={this.handleChange}
                // value={this.state.search}
                />
                </Grid.Column>
                </Grid.Row>
                
                
                <Grid.Row>
                    <Grid.Column>
                
                </Grid.Column>
                </Grid.Row>
                
            </Grid>
        )
    }
}


const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        categories: state.categories
    }
}

const mapDispatchToProps = {
    addIngredient,
    selectCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(Ingredients)

