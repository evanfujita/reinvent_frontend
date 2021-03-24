import React from 'react'
import { connect } from 'react-redux'
import { selectCategory } from '../actions/selections'
import { Menu } from 'semantic-ui-react'

class CategoryMenuBar extends React.Component {
    handleClick = event => {
        const id = parseInt(event.target.id)
        this.props.selectCategory(id)
    }
    
    render(){
        const categoryId = this.props.category
        const displayCategories = this.props.categories.map(category => {
            return(<Menu.Item key={category.id} name={category.name} id={category.id} active={categoryId === category.id} onClick={this.handleClick} />)
        })

        return(
            <Menu tabular>
                <Menu.Item name={'All'} id={0} active={categoryId === 0} onClick={this.handleClick} />
                {displayCategories}
            </Menu>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        category: state.selections.category
    }
}

const mapDispatchToProps = {
    selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenuBar)