import React from 'react'
import styled from 'styled-components'
import MainBanner from './assets/Battlefield-2042-Background.jpeg'

function Banner() {
    return (
        <ContainerContent>
            <img src={MainBanner}/>
        </ContainerContent>
    )
}

export default Banner

const ContainerContent = styled.div`

    @media (max-width: 480px) {
        img{
            position: absolute;
            width: 100%;
            height: 60%;   
        }
    }
`