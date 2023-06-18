// img
import Img from './Img'
// style
import styled from 'styled-components'


const AboutMe = () => {
    return (
        <Background>
            <Img />
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1440px;
    background-color: #F5F2FC;
`

export default AboutMe