import React from 'react'
import { connect } from 'react-redux'
import Vendor from './Vendor'
import { Button } from 'semantic-ui-react'
import { addVendor } from '../actions/vendors'
import AddVendorForm from './AddVendorForm'

class VendorsContainer extends React.Component {

    state = {
        viewForm: ''
    }
    
    handleClick = () => {
        this.setState({
        viewForm: !this.state.viewForm
        })
    }   

    render(){
        const displayVendors = this.props.vendors.map(vendor => <Vendor vendorInfo={vendor} />)
        return(
            <div>
                Vendors
                {displayVendors}
                <Button onClick={this.handleClick}>Add Vendor</Button>
                {this.state.viewForm ? <AddVendorForm /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        vendors: state.vendors
    }
}

const mapDispatchToProps = {
    addVendor
}

export default connect(mapStateToProps)(VendorsContainer)