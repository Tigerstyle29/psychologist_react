import FAQAccordion from './FAQAccordion'
import Heading from './Heading'
// styles
import styled from 'styled-components'

const Accordion = () => {
    return (
        <Background id="faq">
            <Heading />
            <FAQAccordion />
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 70px;
    background-color: #F5F2FC;
`

export default Accordion 