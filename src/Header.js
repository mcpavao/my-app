import React from 'react'
import styled from 'styled-components'
import Logo from './assets/download.png'

function Header() {
    return (
        <div>
            <ContainerNavBar>
                <HeaderLogo>
                    <img src={Logo}/>
                </HeaderLogo>
                <HeaderTab>
                    <NewsBottom>News</NewsBottom>
                    <ReleaseBottom>Release</ReleaseBottom>
                    <GamesBottom>Games</GamesBottom>
                    <ConsoleBottom>Console</ConsoleBottom>
                </HeaderTab>
                <HeaderLogin>
                    <a>Login</a>
                </HeaderLogin>
            </ContainerNavBar>
        </div>
    )
}

export default Header

const ContainerNavBar = styled.div`
    align-items: center;
    background-color: #003AAE;
    display: flex;
    flex-grow: 1;
    height: 64px;
    justify-content: space-between;
    position: relative;
   
`

const HeaderLogo = styled.div`
    color: white;
    height: 70px;
    img {
        margin-left: 5px;
        width: 100px;
    }
`

const HeaderTab = styled.div`
    align-items: center;
    color: white;
    display: flex;
    font-size: 12px;
    margin-right: 20px;
    
`
const NewsBottom = styled.div`
    margin-right: 40px;
    font-weight: 600;
`
const ReleaseBottom = styled.div`
    margin-right: 40px;
    font-weight: 600;
`
const GamesBottom = styled.div`
    margin-right: 40px;
    font-weight: 600;
`
const ConsoleBottom = styled.div`
    font-weight: 600;
`

const HeaderLogin = styled.div`
    font-size: 12px;
    color: white;
    margin-right: 30px;
    font-weight: 700;
`
