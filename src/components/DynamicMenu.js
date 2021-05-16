import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

const DynamicMenu = props => {

    const [id, setId] = useState('All')
    const dispatch = useDispatch()
    const handleClick = event => {
        setId(event.target.id)
        if (props.actionItem){dispatch(props.actionItem(event.target.id))}
    }

    return (
        <Menu align='left' className='text' pointing secondary vertical>
            <Menu.Item key='all' name = 'all' id='all' active={id === 'all'} onClick={handleClick} />
            {props.menuItems.map(item => 
                <Menu.Item key={item.id} name={item.name}  id={item.id} active={id == item.id} onClick={handleClick} />
            )}
        </Menu>
    )
}

export default DynamicMenu