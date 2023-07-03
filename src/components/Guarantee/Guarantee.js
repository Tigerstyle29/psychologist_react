import Heading from './elements/Heading'
import Cards from './elements/Cards'
import styled from 'styled-components'

const Guarantee = () => {
    return (
        <Background>
            <Heading />
            <Cards /> 
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5F2FC;
`

export default Guarantee

