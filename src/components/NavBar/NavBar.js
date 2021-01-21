import React, {useState} from 'react'
import { Links, LogoutBtn, NavbarContainer, Tab, Title, LinksLoggedOut } from './styles'
import { useHistory } from 'react-router-dom'

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
    const history = useHistory()
    const [visible, setVisible] = useState(false)
    const token = localStorage.getItem('token')
    window.onstorage = () => {
        console.log(token)
        setVisible(!visible)
    }

    return (
        <NavbarContainer>
            {isLoggedIn ?
            <>
            <Title to='/'>Recipe Central</Title>
            <Links>
                <Tab to='/'>Search</Tab>
                <Tab to='/favorites'>Favorites</Tab>
                <Tab to='/history'>History</Tab>
                <LogoutBtn onClick={ () => {
                    localStorage.clear()
                    setIsLoggedIn(false)
                    history.push('/login')
                }}>Logout</LogoutBtn>
            </Links>
            </>
            :
            <>
            <Title to='/'>Recipe Central</Title>
            <LinksLoggedOut>
                <Tab to='/register'>Register</Tab>
                <Tab to='/login'>Login</Tab>
            </LinksLoggedOut>
            </>}
        </NavbarContainer>
    )

    
}

export default NavBar