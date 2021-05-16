import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import AddVendorForm from './AddVendorForm'
import { deleteVendor } from '../../actions/vendors'
import { selectVendor } from '../../actions/selections'
import DynamicMenu from '../DynamicMenu'
import ItemInfo from '../ItemInfo'
import UpdateButtons from '../FunctionalComponents/UpdateButtons'

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

    const attributes = {'Representative': 'representative', 'Phone': 'phone', 'Email': 'email'}

        const vendorInfo = vendors.find(vendor => (vendor.id === vendorId))

        return(
            <Grid>
                <Grid.Row>
                <Grid.Column width='4' align='left'>
                <DynamicMenu menuItems={vendors} actionItem={selectVendor} />
                    <Button align='left' onClick={handleClick}>Add Vendor</Button><br/><br/>
                </Grid.Column>
                <Grid.Column width='6'>
                    {/* {vendorId ? <VendorInfo vendor={vendorInfo} /> : null} */}
                    {vendorId ? <ItemInfo item={vendorInfo} header={vendorInfo.name} attributes={attributes}/> : null}
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