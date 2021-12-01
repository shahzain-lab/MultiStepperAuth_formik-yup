import React from 'react'
import { ImgContainer, Img } from '../styles/App.style'

interface Props {
    url: string
}

const ImgBox: React.FC<Props> = ({ url }) => {
    return (
        <ImgContainer>
            <Img src={url} alt="logo" />
        </ImgContainer>
    )
}

export default ImgBox
