import React from 'react'
import { Segment, Grid, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { itemsToOrder } from '../../actions/pendingOrder'

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
            orderAbovePar: this.props.orderAbovePar
        })
    }

    handleValueChange = event => {
        const value = parseInt(event.target.value)
        this.setState({
            quantity: value
        })
    }

    handleChange = () => {
        this.props.itemsToOrder(this.state)
        this.setState({
            checked: true
        })
    }

    render(){
        const { quantity, checked, ingredient } = this.state
        const { name, quantity_unit } = ingredient
        const { parMeter } = this.props
        const id = parseInt(ingredient.id)
        const value = parMeter ? Math.ceil(this.state.quantity + (parMeter * quantity / 100)) : quantity
        const icon = checked ? 'check' : 'plus'
        const color = checked ? 'green' : null

        return(
            <Segment>
            <Grid columns={3}>
           <Grid.Column verticalAlign='middle'>
               <label>{`${name} (${quantity_unit})`}</label>
           </Grid.Column>
           <Grid.Column align='right'>
               <Form.Input 
                    id={id}
                    type='number'
                    onChange={this.handleValueChange}
                    placeholder={quantity}
                    value={value}
                    min={0}
                    step={1}
               />
           </Grid.Column>
           <Grid.Column align='right'>
            <Button icon={icon} color={color} onClick={this.handleChange}></Button>
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