import React from "react"
import styled from 'styled-components'

// TODO: ПЕРЕИМЕНОВАТЬ ВСЕ СТРЕМНЫЕ НАЗВАНИЯ!
// TODO: ВЫНЕСТИ В СВОЙ КОМПОНЕНТ

function Element(props) {
    const {heading, text} = props
    return (
        <Wrapper>
            <El>
                <Heading>
                    {heading}
                </Heading>
                <Text>
                    {text}
                </Text>
            </El>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1440px;
`
const El = styled.div`
`
const Heading = styled.h3`
`
const Text = styled.p`
`

export default Element