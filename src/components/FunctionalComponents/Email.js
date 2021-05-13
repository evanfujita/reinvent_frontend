import React, { useState } from 'react'
import emailjs from 'emailjs-com'
// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Message, Transition } from 'semantic-ui-react'
import { deleteItem, pendingOrder } from '../../actions/pendingOrder'


const Email = props => {

    const { ingredients } = props

    const user = useSelector(state => state.user)
    const { first_name, restaurant_name } = user
    const selectedVendor = useSelector(state => state.selections.vendor)
    const itemsToOrder = useSelector(state => state.itemsToOrder)
    const [emailMessage, setEmailMessage] = useState(false)
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    
    const handleClick = () => {
      toggleVisibility()
      props.handleSubmit()
        
      const { representative, email } = props.vendor
      const allIngredients = ingredients.map(ingredient => 
          ` ${ingredient.ingredient.name}: ${ingredient.quantity} ${ingredient.ingredient.quantity_unit}`
      )

      const templateParams = {
        restaurant_name: restaurant_name,
        from_name: first_name,
        to_name: representative,
        order: allIngredients,
        to_email: email,
        note: props.notes
      }
      
      const serviceID = 'service_cit3doz'
      const templateID = 'template_emjv768'
      const userID = 'user_2aDBcZXjpPvZLRGDXPzBX'
      
      emailjs.send(serviceID, templateID, templateParams, userID)
      
      setEmailMessage(true)

      setTimeout(() => {setVisible(false)}, 2000) 
      
      dispatch(pendingOrder(ingredients))
      ingredients.forEach(ingredient => {
        dispatch(deleteItem(ingredient.ingredient))
      })
    }

    const toggleVisibility = () => setVisible(true)
    const content = emailMessage ? `Success - Your Order Was Sent to ${selectedVendor.name}!` : null

      return(
          <>
            { itemsToOrder.length > 0 ? <Button onClick={handleClick}>Send Order</Button> : null }
            <Transition visible={visible} animation='scale' duration={500}><Message size='mini' color='green'>{content}</Message></Transition>
          </>
      )
    
}

export default Email