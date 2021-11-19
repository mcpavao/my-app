import React from 'react'
import styled from 'styled-components'
import MainBanner from './assets/Battlefield-2042-Background.jpeg'

function Banner() {
    return (
        <div>
            <ContainerContent>
                <img src={MainBanner}/>
            </ContainerContent>
        </div>
    )
}

export default Banner

const ContainerContent = styled.div`
    background-color: #000C66;
    height: 38.5rem;
`