import React from 'react'
import { connect } from 'react-redux'
import Vendor from './Vendor'

class VendorsContainer extends React.Component {
    render(){
        const displayVendors = this.props.vendors.map(vendor => <Vendor vendorInfo={vendor} />)
        return(
            <div>
                Vendors
                {displayVendors}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        vendors: state.vendors
    }
}

export default connect(mapStateToProps)(VendorsContainer)