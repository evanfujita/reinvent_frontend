import React from 'react'

class Vendor extends React.Component {
    render(){
        return(
            <div>
                {this.props.vendorInfo.name}
            </div>
        )
    }
}

export default Vendor