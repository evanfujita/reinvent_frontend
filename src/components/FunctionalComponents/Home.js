import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../User/Login'

const Home = () => {
    const user = useSelector(state => state.user)
    return(
        <div>
            Easy Inventory
            {user ? null : <Login />}
        </div>
    )
}

export default Home