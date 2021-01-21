import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
    width: 100vw;
    background-color: #6699cc;
    font-family: sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`

export const Title = styled(Link) `
    @import url('${props => props.theme.fontSource}');

    font-family: ${props => props.theme.fonts.brand.fontFamily};
    font-size: 2.5em;
    padding-left: 30px;
    text-decoration: none;
    color: white;

    :hover {
        opacity: 0.7;
    }
`

export const Links = styled.div ` 
    @import url('${props => props.theme.fontSource}');

    font-family: ${props => props.theme.fonts.body.fontFamily};
    font-size: 0.9em;
    display: flex;
    flex-direction: row;
    width: 480px;
    justify-content: space-between;
    padding-left: 50px;
    color: white;
    text-decoration: none;
`

export const LinksLoggedOut = styled.div ` 
    @import url('${props => props.theme.fontSource}');

    font-family: ${props => props.theme.fonts.body.fontFamily};
    font-size: 0.9em;
    display: flex;
    flex-direction: row;
    width: 240px;
    justify-content: space-between;
    padding-left: 50px;
    color: white;
    text-decoration: none;
`

export const Tab = styled(Link) ` 
    color: white;
    text-decoration: none;
    font-size: 1.3em;
    width: 120px;
    display: grid;
    place-items: center;
    height: 40px;

    :hover {
        opacity: 0.7;
    }
`

export const LogoutBtn = styled.button ` 
    color: white;
    padding-right: 30px;
    text-decoration: none;
    font-size: 1.3em;
    width: 120px;
    display: grid;
    place-items: center;
    height: 40px;
    background-color: transparent;
    border: none;

    :hover {
        opacity: 0.7;
    }
`