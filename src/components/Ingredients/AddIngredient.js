import React from 'react'
import { connect } from 'react-redux'
import { addIngredient } from '../../actions/ingredients'
import { Dropdown, Form, Button, Segment } from 'semantic-ui-react'
import { handleReqObj, addFetch } from '../../helpers/fetch'

class AddIngredient extends React.Component {
    
    state = {
        name: '',
        quantity: '',
        quantity_unit: '',
        par: '',
        category_id: '',
        vendor_id: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleCategoryDropdownChange = event => {
        const id = event.target.id
        this.setState({
            category_id: id
        })
    }

    handleVendorDropdownChange = event => {
        const id = event.target.id
        this.setState({
            vendor_id: id
        })
    }

    handleSubmit = () => {
        const reqObj = handleReqObj('POST', this.state)
        addFetch('ingredients', reqObj, this.props.addIngredient)
        
        this.setState({
            name: '',
            quantity: '',
            quantity_unit: '',
            par: '',
            category_id: ''
        })
    }
    
    render(){
        const { name, quantity, quantity_unit, par } = this.state
        
        const categoriesOptions = this.props.categories.map(category => {
            return{
                key: category.id,
                text: category.name,
                id: category.id,
                value: category.id
            }
        })

        const vendorsOptions = this.props.vendors.map(vendor => {
            return{
                key: vendor.id,
                text: vendor.name,
                id: vendor.id,
                value: vendor.id
            }
        })

        return(
            <Segment basic inverse align='left'>
                <label position='right'>Add Ingredient:</label>
                <Form align='left'>
                    <label>Name</label>
                    <Form.Input 
                        id='name'
                        placeholder='Name'
                        onChange={this.handleChange}
                        value={name}
                    />
                    <label>Quantity</label>
                    <Form.Input 
                        id='quantity'
                        placeholder='Quantity'
                        onChange={this.handleChange}
                        value={quantity}
                    />
                    <label>Unit of Measurement</label>
                    <Form.Input 
                        id='quantity_unit'
                        placeholder='Unit of Measurement'
                        onChange={this.handleChange}
                        value={quantity_unit}
                    />
                    <label>Par</label>
                    <Form.Input 
                        id='par'
                        placeholder='Par'
                        onChange={this.handleChange}
                        value={par}
                    />
                    <label>Category</label>
                    <Dropdown 
                        placeholder='Select a Category'
                        fluid
                        selection
                        options={categoriesOptions}
                        onChange={this.handleCategoryDropdownChange}
                    /><br/>
                    <label>Vendor</label>
                    <Dropdown 
                        placeholder='Select a Vendor'
                        fluid
                        selection
                        options={vendorsOptions}
                        onChange={this.handleVendorDropdownChange}
                    />
                    <br/>

                    <Form.Field onClick={this.handleSubmit} control={Button}>Create Ingredient</Form.Field>
                </Form>
            </Segment>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        ingredients: state.ingredients,
        vendors: state.vendors
    }
}

const mapDispatchToProps = {
    addIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredient)


