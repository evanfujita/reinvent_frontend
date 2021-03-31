import React from 'react'
import { connect } from 'react-redux'
import VendorInfo from './VendorInfo'
import { Grid, Button, Segment } from 'semantic-ui-react'
import AddVendorForm from './AddVendorForm'

class VendorsContainer extends React.Component {

    state = {
        viewForm: false,
        vendorId: null
    }
    
    handleClick = () => {
        this.setState({
        viewForm: !this.state.viewForm
        })
    }   

    handleVendorClick = event => {
        const vendorId = parseInt(event.target.id)
        this.setState({
            vendorId: vendorId
        })
    }

    render(){
        const displayVendors = this.props.vendors.map(vendor => <Segment basic key={vendor.id} id={vendor.id} onClick={this.handleVendorClick}>{vendor.name}</Segment>)
        const vendorInfo = this.props.vendors.find(vendor => vendor.id === this.state.vendorId)

        return(
            <Grid>
                <Grid.Row>
                <Grid.Column width='4'>
                <Segment basic align='left'>
                    <header>
                        Vendors<br/><br/>
                    </header>
                {displayVendors}
                        <Button align='left' onClick={this.handleClick}>Add Vendor</Button>
                </Segment>
                </Grid.Column>
                <Grid.Column width='6'>
                    {this.state.vendorId ? <VendorInfo vendor={vendorInfo} /> : null}
                    {this.state.viewForm ? <AddVendorForm /> : null}
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width='4'>
                    </Grid.Column>
                    <Grid.Column width='10'>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        vendors: state.vendors
    }
}

export default connect(mapStateToProps)(VendorsContainer)