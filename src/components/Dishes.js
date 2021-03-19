import React from 'react'
import { connect } from 'react-redux'


class Dishes extends React.Component{

componentDidMount(){
    fetch('http://localhost:3000/dishes')
    .then(resp => resp.json())
    .then(dishes => {
        
    })
}


render(){
    return(
        <div>

        </div>
    )
}
}


export default connect()(Dishes)