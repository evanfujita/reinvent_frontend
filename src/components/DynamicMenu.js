import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

const DynamicMenu = props => {
    const { menuItems, actionItem } = props
    const [id, setId] = useState('all')
    const dispatch = useDispatch()
    
    const handleClick = event => {
        setId(event.target.id)
        if (actionItem){
            const item = menuItems.find(i => 
                i.id == event.target.id || event.target.id === 'all'
            )
            dispatch(actionItem(item))
        }
    }

    return (
        <Menu align='left' className='text' pointing secondary vertical>
            {
                props.all 
                ?
                <Menu.Item key='all' name ='all' id='all' active={id === 'all'} onClick={handleClick} />
                :
                null
            }
            {menuItems.map(item => 
                <Menu.Item key={item.id} name={item.name}  id={item.id} active={id == item.id} onClick={handleClick} />
            )}
        </Menu>
    )
}

export default DynamicMenu