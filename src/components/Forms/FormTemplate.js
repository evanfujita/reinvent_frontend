import React from 'react'
import { Form } from 'semantic-ui-react'

class FormTemplate extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            error: ''
        }
    }

    componentDidMount(){
        for(const field in this.props.fields) {
            debugger
            this.setState({
                ...this.state,
                [field]: this.props.fields[field]
                
            })
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({})
    }

    render(){
        const fields = Object.keys(this.props.fields).map(field => {
            return <Form.Input name={field} placeholder={field} onChange={this.handleChange} value={this.state.field} />
        })
        return(
            <Form onSubmit={this.handleSubmit}>
                { this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null }
                {fields}
                <input className='ui submit button' type='submit' value='Login'/>
            </Form>
        )
    }
}

export default FormTemplate