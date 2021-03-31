import React from 'react'
import emailjs from 'emailjs-com'
import { connect } from 'react-redux'
import { Button, Message } from 'semantic-ui-react'
import { deleteItem, pendingOrder } from '../actions/pendingOrder'


class Email extends React.Component {

    state = {
      emailMessage: false
    }


    handleClick = () => {
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
      
      // emailjs.send(serviceID, templateID, templateParams, userID)
      

      this.setState({
        emailMessage: true
      })
      
      this.props.pendingOrder(this.props.ingredients) 
      this.props.ingredients.map(ingredient => {
        this.props.deleteItem(ingredient.ingredient)
      })
    }

    render(){
      const content = this.state.emailMessage ? `Success - Your Order Was Sent to ${this.props.vendor.name}!` : null
      const successMessage = this.state.emailMessage && parseInt(this.props.vendorId) === this.props.vendor.id
      ? <Message size='mini' color='green'>{content}</Message> : null

        return(
            <>
              <Button onClick={this.handleClick}>Email</Button>
              {successMessage}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user, 
    }
}

const mapDispatchToProps = {
    pendingOrder,
    deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Email)