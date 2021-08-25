import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import DynamicForm from '../Forms/DynamicForm'
import { selectVendor } from '../../actions/selections'
import DynamicMenu from '../DynamicMenu'
import ItemInfo from '../ItemInfo'

const VendorsContainer = props => {

    const vendors = useSelector(state => state.vendors)
    const [viewForm, setViewForm] = useState(false)
    const vendorId = useSelector(state => state.selections.vendor.id)
    const formAttributes = [{label: 'Name', name: 'name'}, {label: 'Representative', name: 'representative'}, {label: 'Phone', name: 'phone_number'}, {label: 'Email', name: 'email'}]
    const itemAttributes = {'Representative': 'representative', 'Email': 'email', 'Phone': 'phone'}
    const vendorInfo = vendors.find(vendor => (vendor.id === vendorId))
    const handleSubmit = event => {console.log('need to build out handleSubmit')}

    return(
        <Grid>
            <Grid.Column width='4' align='left'>
            <DynamicMenu menuItems={vendors} actionItem={selectVendor} />
                <Button align='left' onClick={()=> setViewForm(!viewForm)}>Add Vendor</Button><br/><br/>
            </Grid.Column>
            <Grid.Column width='6'>
                {vendorId && <ItemInfo item={vendorInfo} header={vendorInfo.name} attributes={itemAttributes}/>}
                {viewForm && <DynamicForm fields={formAttributes} submit='Add Vendor' handleSubmit={handleSubmit} />}
            </Grid.Column>
        </Grid>
    )
}

export default VendorsContainer