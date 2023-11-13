import FAQAccordion from './FAQAccordion'
import Heading from './Heading'
// styles
import styled from 'styled-components'

const Accordion = () => {
    return (
        <Background>
            <Heading />
            <FAQAccordion />
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F5F2FC;
`

export default Accordion 