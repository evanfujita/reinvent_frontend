import React from 'react'
import emailjs from 'emailjs-com'
import { connect } from 'react-redux'
import { Button, Message } from 'semantic-ui-react'
import { pendingOrder } from '../actions/pendingOrder'

class Email extends React.Component {

    state = {
      emailMessage: false,
      note: ''
    }


    handleClick = () => {
      const { first_name, restaurant_name } = this.props.user
      const { representative, email } = this.props.vendor
      const ingredients = this.props.ingredients.map(ingredient => {
        const quantity = ingredient.par - ingredient.quantity
        return(
          `${ingredient.name}: ${quantity} ${ingredient.quantity_unit}`
        )
      })

      const templateParams = {
        restaurant_name: restaurant_name,
        from_name: first_name,
        to_name: representative,
        message: ingredients,
        note: this.state.note,
        to_email: email
      }

      const serviceID = 'service_cit3doz'
      const templateID = 'template_emjv768'
      const userID = 'user_2aDBcZXjpPvZLRGDXPzBX'
      
      emailjs.send(serviceID, templateID, templateParams, userID)

      this.setState({
        emailMessage: true
      })
      this.props.pendingOrder(this.props.ingredients)
    }

    render(){
      const content = this.state.emailMessage ? `Success - Your Order Was Sent to ${this.props.vendor.name}!` : null
      const successMessage = this.state.emailMessage ? <Message size='mini' color='green'>{content}</Message> : null

        return(
            <div>
              <Button onClick={this.handleClick}>Email</Button>
              {successMessage}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user, 
    }
}

const mapDispatchToProps = {
    pendingOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(Email)