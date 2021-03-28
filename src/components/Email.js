import React from 'react'
import emailjs from 'emailjs-com'
import { connect } from 'react-redux'
import { Button, Message } from 'semantic-ui-react'

class Email extends React.Component {

    state = {
      emailMessage: false
    }

    handleClick = () => {
        
        const templateParams = {
          from_name: this.props.user.first_name,
          to_name: this.props.user.restaurant_name,
          message: 'Heya!',
          to_email: 'evanfujita@gmail.com'
        }
    
        const serviceID = 'service_cit3doz'
        const templateID = 'template_emjv768'
        const userID = 'user_2aDBcZXjpPvZLRGDXPzBX'
        
        // emailjs.send(serviceID, templateID, templateParams, userID)
        this.setState({
          emailMessage: true
        })
      }

    render(){
      
      const successMessage = this.state.emailMessage ? <Message success header='Email Successful!' content='Your Order Was Sent to ...' /> : null

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
        user: state.user
    }
}

export default connect(mapStateToProps)(Email)