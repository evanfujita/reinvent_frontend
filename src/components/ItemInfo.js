import React from 'react'
import { Segment } from 'semantic-ui-react'

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
    </Segment>
    )
}

export default ItemInfo