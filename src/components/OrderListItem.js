import React from 'react'
import { Segment, Grid, Form, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { itemsToOrder } from '../actions/pendingOrder'

class OrderListItem extends React.Component {

    state = {
        ingredient: '',
        quantity: 0,
        orderAbovePar: this.props.parMeter,
        checked: false
    }

    componentDidMount(){
        
        this.setState({
            ...this.state,
            ingredient: this.props.ingredient,
            quantity: Math.ceil(this.props.ingredient.par - this.props.ingredient.quantity),
            // orderAbovePar: this.props.orderAbovePar
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

        return(
            <Segment>
            <Grid columns={3}>
           <Grid.Column width={6} verticalAlign='middle'>
               <Form.Field control={Checkbox} key={id} id={id} label={`${name} (${quantity_unit})`} onChange={this.handleChange} value='true'/>
           </Grid.Column>
           <Grid.Column align='right' width={4}>
               <Form.Input 
                    width={4}
                    type='number'
                    id={id}
                    onChange={this.handleValueChange}
                    placeholder={this.state.quantity}
                    value={this.state.quantity}
                    min={0}
                    step={1}
               />
               {/* <label>{quantity_unit}</label> */}
               
           </Grid.Column>
           {/* <Grid.Column align='right' verticalAlign='middle'>
               {quantity_unit}
           </Grid.Column> */}
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