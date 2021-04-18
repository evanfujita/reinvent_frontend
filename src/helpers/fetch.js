export const fetchVendors = () => {
    fetch('http://localhost:3000/vendors')
    .then(resp => resp.json())
    .then(vendors => {
    //   this.props.renderVendors(vendors)
    })
}

