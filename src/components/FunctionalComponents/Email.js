import React from 'react'
import emailjs from 'emailjs-com'
import { connect } from 'react-redux'
import { Button, Message, Transition } from 'semantic-ui-react'
import { deleteItem, pendingOrder } from '../../actions/pendingOrder'


class Email extends React.Component {

    state = {
      emailMessage: false,
      visible: false
    }


    handleClick = () => {
      this.toggleVisibility()
      this.props.handleSubmit()

      const { first_name, restaurant_name } = this.props.user
      const { representative, email } = this.props.vendor
      const ingredients = this.props.ingredients.map(ingredient => 
          ` ${ingredient.ingredient.name}: ${ingredient.quantity} ${ingredient.ingredient.quantity_unit}`
      )

      const templateParams = {
        restaurant_name: restaurant_name,
        from_name: first_name,
        to_name: representative,
        order: ingredients,
        to_email: email,
        note: this.props.notes
      }
      

      const serviceID = 'service_cit3doz'
      const templateID = 'template_emjv768'
      const userID = 'user_2aDBcZXjpPvZLRGDXPzBX'
      
      emailjs.send(serviceID, templateID, templateParams, userID)
      

      this.setState({
        emailMessage: true
      })
      setTimeout(() => {this.setState({visible: false})}, 2000) 
      
      this.props.pendingOrder(this.props.ingredients) 
      this.props.ingredients.forEach(ingredient => {
        this.props.deleteItem(ingredient.ingredient)
      })
    }

    toggleVisibility = () => this.setState((prevState) => ({ visible: !prevState.visible}))
    

    render(){
      const { visible } = this.state
      const content = this.state.emailMessage ? `Success - Your Order Was Sent to ${this.props.vendor.name}!` : null

        return(
            <>
              { this.props.itemsToOrder.length > 0 ? <Button onClick={this.handleClick}>Send Order</Button> : null }
              {/* {successMessage} */}
              <Transition visible={visible} animation='scale' duration={500}><Message size='mini' color='green'>{content}</Message></Transition>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        selectedVendor: state.selections.vendor,
        itemsToOrder: state.itemsToOrder
    }
}

const mapDispatchToProps = {
    pendingOrder,
    deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Email)