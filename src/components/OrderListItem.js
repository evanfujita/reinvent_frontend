import React from 'react'
import { Segment, Grid, Form, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { itemsToOrder } from '../actions/pendingOrder'

class OrderListItem extends React.Component {

    state = {
        ingredient: '',
        quantity: 0
    }

    componentDidMount(){
    
        this.setState({
            ...this.state,
            ingredient: this.props.ingredient,
            quantity: Math.ceil(this.props.ingredient.par - this.props.ingredient.quantity)
        })
    }

    handleValueChange = event => {
        const value = parseInt(event.target.value)
        this.setState({
            quantity: value
        })
    }

    handleChange = event => {
        this.props.addIngredient(this.state)
        this.props.itemsToOrder(this.state)
    }

    render(){
        const { name, quantity_unit } = this.state.ingredient
        const id = parseInt(this.state.ingredient.id)
        const value = Math.ceil(this.state.quantity + (parseInt(this.props.parMeter) / 100 * this.state.quantity))

        return(
            <Segment>
            <Grid columns={3}>
           <Grid.Column width={8}>
               <Checkbox key={id} id={id} label={name} onChange={this.handleChange} />
           </Grid.Column>
           <Grid.Column align='right' width={8}>
               <Form.Input 
                    type='number'
                    id={id}
                    onChange={this.handleValueChange}
                    placeholder={this.state.quantity}
                    value={value}
                    step={1}
               />
               <label>{quantity_unit}</label>
               
           </Grid.Column>
           <Grid.Column width='8'>
               
           </Grid.Column>
           </Grid>
       </Segment>
        )
    }
}

const mapStateToProps = state => {
    return {
        parMeter: state.parMeter,
        ingredients: state.ingredients
    }
}

const mapDispatchToProps = {
    itemsToOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListItem)