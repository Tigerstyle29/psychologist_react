// img
import Img from './Img'
import Text from './Text'
// style
import styled from 'styled-components'


const AboutMe = () => {
    return (
        <Background>
            <Img />
            <Text />
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1440px;
    background-color: #D9D9D9;
`

export default AboutMe