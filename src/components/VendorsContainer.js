import React from 'react'
import { connect } from 'react-redux'
import VendorInfo from './VendorInfo'
import { Grid, Button, Segment, Menu } from 'semantic-ui-react'
import AddVendorForm from './AddVendorForm'
import { deleteVendor } from '../actions/vendors'

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

    handleDelete= () => {
        const { vendorId } = this.state
        fetch(`http://localhost:3000/vendors/${vendorId}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(deletedVendor => {
            this.setState({
                vendorId: null
            })
            if(deletedVendor.message){
                this.props.deleteVendor(vendorId)
            }
        })
    }

    render(){
        const displayVendors = this.props.vendors.map(vendor => <Menu.Item basic key={vendor.id} id={vendor.id} name={vendor.name} onClick={this.handleVendorClick} /> )
        const vendorInfo = this.props.vendors.find(vendor => vendor.id === this.state.vendorId)

        return(
            <Grid>
                <Grid.Row>
                <Grid.Column width='4' align='left'>

                <Menu inverted align='left' className='text' pointing secondary vertical>
                {displayVendors}
                </Menu>
                        <Button align='left' onClick={this.handleClick}>Add Vendor</Button><br/><br/>
                        { this.state.vendorId ? 
                        <>
                        <Button onClick={this.handleEdit}>Edit Vendor</Button><br/><br/>
                        <Button color='red' onClick={this.handleDelete}>Delete Vendor</Button>
                        </>
                        :
                        null
                        }
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

const mapDispatchToProps = {
    deleteVendor
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorsContainer)