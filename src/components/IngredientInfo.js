import React from 'react'
import { List, Button } from 'semantic-ui-react'

class IngredientInfo extends React.Component {

    handleEdit = event => {

    }

    render(){

        const { name, quantity, quantity_unit, par } = this.props.ingredient

        return(
            <List>
                <List.Content>
                    <List.Item>
                        <br/>
                        <List.Header>{name}</List.Header>
                    </List.Item>
                </List.Content>
                <List.Content>
                    <List.Item>
                        <br/>
                        Amount: {quantity} {quantity_unit}
                    </List.Item>
                </List.Content>
                <List.Content>
                    <List.Item>
                        <br/>
                        Par: {par} {quantity_unit}
                    </List.Item>
                </List.Content><br/>
                <Button onClick={this.handleEdit}>Edit</Button>
            </List>
        )
    }
}

export default IngredientInfo