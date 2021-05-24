import React from 'react'
import { Segment, Dropdown } from 'semantic-ui-react'

const DynamicDropdown = props => {
    const { items, handleChange } = props
    // debugger

    const options = items.map(vendor => {
        return{
            key: vendor.id,
            text: vendor.name,
            id: vendor.id,
            value: vendor.id
        }
    })
    // debugger
    return (
        <>
        Hellos
        <Segment>  
            <Dropdown>
                {/* placeholder={placeholder} */}
                fluid
                selection
                options={options} 
                {/* onChange={handleChange}*/}
            </Dropdown>
        </Segment>
        </>
    )
}

export default DynamicDropdown