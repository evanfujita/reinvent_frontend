import React from 'react'
import { Segment } from 'semantic-ui-react'
import UpdateButtons from './FunctionalComponents/UpdateButtons'

const ItemInfo = props => {
    const { header, item, attributes } = props
    const things = Object.keys(attributes)
    const keys = things.map(a => <Segment>{a}: {item[attributes[a]]}</Segment>)

    return(
        <Segment>
        <Segment basic inverse>
            { header }
        </Segment>
        <Segment.Group inverted>
            { keys }
        </Segment.Group>
            <UpdateButtons />
        </Segment>
    )
}

export default ItemInfo