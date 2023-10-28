import React from "react"
import styled from 'styled-components'

function HelpCard({card}) {
    const {heading, text, id} = card
    return (
        <Wrapper key={id}>
            <Heading>
                {heading}
            </Heading>
            <Text>
                {text}
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 40%;
  margin: 0 5%;
  
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`
const Heading = styled.h2`
`
const Text = styled.p`
`

export default HelpCard