import React from "react"
import styled from 'styled-components'

function HelpCard({card}) {
    const {heading, text, id} = card

    return (
        <Wrapper key={id}>
            <Heading>
                <BackgroundFirstLetter>
                    {heading[0]}
                </BackgroundFirstLetter>
                {heading.replace(heading[0], '')}
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

const BackgroundFirstLetter = styled.span`
  background-color: #6C5D9533;
  padding-left: 35px;
`
const Heading = styled.h2`
`
const Text = styled.p`
  padding-left: 35px;

`

export default HelpCard