import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../../actions/selections'
import { Menu } from 'semantic-ui-react'

const CategoryMenuBar = props => {

    const selectedCategory = useSelector(state => state.selections.category)
    const categories = useSelector(state => state.categories)
    const dispatch = useDispatch()

    const handleClick = event => {
        const id = parseInt(event.target.id)
        dispatch(selectCategory(id))
    }
    
    return(
        <Menu pointing secondary vertical>
            <Menu.Item name={'All'} id={0} active={selectedCategory === 0} onClick={handleClick} />
            {
                categories.map(category => (
                    <Menu.Item 
                        key={category.id} 
                        name={category.name} 
                        id={category.id} 
                        active={selectedCategory === category.id} 
                        onClick={handleClick} 
                    />
                ))
            }
        </Menu>   
    )
}

export default CategoryMenuBar