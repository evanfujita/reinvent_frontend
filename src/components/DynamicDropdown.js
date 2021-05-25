import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DynamicDropdown = props => {
    const { items, handleChange, placeholder} = props

    const options = items.map(item => {
        return{
            key: item.id,
            text: item.name,
            id: item.id,
            value: item.id
        }
    })
    
    return (
        <Dropdown
            id={placeholder}
            placeholder={placeholder}
            fluid
            selection
            options={options} 
            onChange={handleChange}
        />
    )
}

export default DynamicDropdown