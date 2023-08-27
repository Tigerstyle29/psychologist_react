import Elements from "./Elements"
import Heading from "./Heading"
// styles
import styled from 'styled-components'

const Help = () => {
    return (
        <Background>
                <Heading />
                <Elements />
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5F2FC;
`

export default Help 