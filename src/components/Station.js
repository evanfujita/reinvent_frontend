import React from 'react'

export default class Station extends React.Component{
    
    render(){
        const { name } = this.props.stationInfo
        return(
            <div>
                {name}                
            </div>
        )
    }
}
