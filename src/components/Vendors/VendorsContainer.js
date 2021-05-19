import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import AddForm from '../Forms/AddForm'
import { selectVendor } from '../../actions/selections'
import DynamicMenu from '../DynamicMenu'
import ItemInfo from '../ItemInfo'

const VendorsContainer = props => {

    const vendors = useSelector(state => state.vendors)
    const [viewForm, setViewForm] = useState(false)
    const vendorId = useSelector(state => state.selections.vendor.id)
    //attributes key is what is displayed, value is key for actual object
    const attributes = [{label: 'Name', name: 'name'}, {label: 'Representative', name: 'representative'}, {label: 'Phone', name: 'phone_number'}, {label: 'Email', name: 'email'}]
    const vendorInfo = vendors.find(vendor => (vendor.id === vendorId))
    const handleSubmit = event => {console.log('need to build out handleSubmit')}

        return(
            <Grid>
                <Grid.Column width='4' align='left'>
                <DynamicMenu menuItems={vendors} actionItem={selectVendor} />
                    <Button align='left' onClick={()=> setViewForm(!viewForm)}>Add Vendor</Button><br/><br/>
                </Grid.Column>
                <Grid.Column width='6'>
                    {vendorId ? <ItemInfo item={vendorInfo} header={vendorInfo.name} attributes={attributes}/> : null}
                    {viewForm ? <AddForm fields={attributes} submit='Add Vendor' handleSubmit={handleSubmit} /> : null}
                </Grid.Column>
            </Grid>
        )
}

export default VendorsContainer