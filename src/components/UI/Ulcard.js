import React from "react"
import styled from 'styled-components'

function Ulcard(props) {
    const {heading, title, text, button} = props
    return (
        <Wrapper>
            <El>
                <Heading>
                    {heading}
                </Heading>
                <Title>
                    {title}
                </Title>
                <Text>
                    {text}
                </Text>
                <Button>
                    {button}
                </Button>
            </El>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1440px;
`
const El = styled.div`
`
const Heading = styled.h2`
`
const Title = styled.h2`
`
const Text = styled.p`
`
const Button = styled.button`
`

export default Ulcard