import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import VendorInfo from './VendorInfo'
import { Grid, Button, Menu } from 'semantic-ui-react'
import AddVendorForm from './AddVendorForm'
import { deleteVendor } from '../../actions/vendors'
import { selectVendor } from '../../actions/selections'
import DynamicMenu from '../DynamicMenu'

const VendorsContainer = props => {

    const vendors = useSelector(state => state.vendors)

    const [viewForm, setViewForm] = useState(false)
    const vendorId = useSelector(state => state.selections.vendor.id)

    const dispatch = useDispatch()
    
    const handleClick = () => {
        setViewForm(!viewForm)
    }   

    const handleDelete = () => {
        fetch(`http://localhost:3000/vendors/${vendorId}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(deletedVendor => {
            // setVendorId(null)
            if(deletedVendor.message){
                dispatch(deleteVendor(vendorId))
            }
        }) 
    }

        const vendorInfo = vendors.find(vendor => {
            // debugger
            return (vendor.id === vendorId)})

        return(
            <Grid>
                <Grid.Row>
                <Grid.Column width='4' align='left'>
                <DynamicMenu menuItems={vendors} actionItem={selectVendor} />
                    <Button align='left' onClick={handleClick}>Add Vendor</Button><br/><br/>
                    { vendorId ? 
                    <>
                    {/* <Button onClick={props.handleEdit}>Edit Vendor</Button><br/><br/> */}
                    <Button color='red' onClick={handleDelete}>Delete Vendor</Button>
                    </>
                    :
                    null
                    }
                    {/* can have EditDeleteButtons component here */}
                </Grid.Column>
                <Grid.Column width='6'>
                    {vendorId ? <VendorInfo vendor={vendorInfo} /> : null}
                    {viewForm ? <AddVendorForm /> : null}
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

export default VendorsContainer