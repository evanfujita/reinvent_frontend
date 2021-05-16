import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import AddVendorForm from './AddVendorForm'
import { selectVendor } from '../../actions/selections'
import DynamicMenu from '../DynamicMenu'
import ItemInfo from '../ItemInfo'

const VendorsContainer = props => {

    const vendors = useSelector(state => state.vendors)
    const [viewForm, setViewForm] = useState(false)
    const vendorId = useSelector(state => state.selections.vendor.id)
    //attributes key is what is displayed, value is key for actual object
    const attributes = {'Representative': 'representative', 'Phone': 'phone', 'Email': 'email'}

    const vendorInfo = vendors.find(vendor => (vendor.id === vendorId))

        return(
            <Grid>
                <Grid.Column width='4' align='left'>
                <DynamicMenu menuItems={vendors} actionItem={selectVendor} />
                    <Button align='left' onClick={()=> setViewForm(!viewForm)}>Add Vendor</Button><br/><br/>
                </Grid.Column>
                <Grid.Column width='6'>
                    {vendorId ? <ItemInfo item={vendorInfo} header={vendorInfo.name} attributes={attributes}/> : null}
                    {viewForm ? <AddVendorForm /> : null}
                </Grid.Column>
            </Grid>
        )
}

export default VendorsContainer