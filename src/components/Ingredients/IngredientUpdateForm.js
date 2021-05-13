import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { updateIngredient } from '../../actions/ingredients'
import { handleReqObj, patchFetch } from '../../helpers/fetch'

const IngredientUpdateForm = props => {
    
    const selectedIngredient = useSelector(state => state.selections.ingredient)
    const [name, setName] = useState(null)
    const [par, setPar] = useState(null)
    const [quantity_unit, setQuantityUnit] = useState(null)
    const [id] = useState(selectedIngredient.id)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        let body = {}
        if(name){body['name'] = name}
        if(par){body['par'] = par}
        if(quantity_unit){body['quantity_unit'] = quantity_unit}
        
        const reqObj = handleReqObj('PATCH', body)
        patchFetch('ingredients', id, reqObj, updateIngredient)        
    }
        return(
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input name='name' onChange={(event)=> setName(event.target.value)} placeholder={selectedIngredient.name} value={name} />
                </Form.Field>
                <Form.Field>
                    <label>Unit of Measurement</label>
                    <input name='quantity_unit' onChange={(event)=>setQuantityUnit(event.target.value)} placeholder={selectedIngredient.quantity_unit} value={quantity_unit} />
                </Form.Field>
                <Form.Field>
                    <label>Par</label>
                    <input name='par' onChange={(event)=> setPar(event.target.value)} placeholder={selectedIngredient.par} value={par} />
                </Form.Field>
                <Button type='submit' onClick={handleSubmit}>Update Ingredient</Button>
            </Form>
        )
}

export default (IngredientUpdateForm)
