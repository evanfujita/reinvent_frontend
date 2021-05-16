import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import VendorInfo from './VendorInfo'
import { Grid, Button, Menu } from 'semantic-ui-react'
import AddVendorForm from './AddVendorForm'
import { deleteVendor } from '../../actions/vendors'

const VendorsContainer = props => {

    const vendors = useSelector(state => state.vendors)

    const [viewForm, setViewForm] = useState(false)
    const [vendorId, setVendorId] = useState(null)

    const dispatch = useDispatch()
    
    const handleClick = () => {
        setViewForm(!viewForm)
    }   

    const handleVendorClick = event => {
        const updatedVendorId = parseInt(event.target.id)
        setVendorId(updatedVendorId)
    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/vendors/${vendorId}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(deletedVendor => {
            setVendorId(null)
            if(deletedVendor.message){
                dispatch(deleteVendor(vendorId))
            }
        })
    }

    
        const displayVendors = vendors.map(vendor => <Menu.Item basic key={vendor.id} id={vendor.id} name={vendor.name} onClick={handleVendorClick} /> )
        const vendorInfo = vendors.find(vendor => vendor.id === vendorId)

        return(
            <Grid>
                <Grid.Row>
                <Grid.Column width='4' align='left'>

                <Menu align='left' className='text' pointing secondary vertical>
                {displayVendors}
                </Menu>
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