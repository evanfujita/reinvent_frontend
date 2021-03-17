import React from 'react'


class Home extends React.Component{
    
    constructor(){
        super()
        this.state = {
            show: false,
            user: {}
        }
    }

    handleClick = () => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(user => {
            this.setState({
                show: !this.state.show,
                user: user
            })
        })
    }
    
    render(){
        return(
            <div>
                <p onClick={this.handleClick}>Hello</p>
                <p>{this.state.show ? this.state.user[0].first_name : null}</p>
            </div>
        )
    }
}


// const Home = () => {

//     return(
//         <div>
//             Hello
//         </div>
//     )
// }

export default Home