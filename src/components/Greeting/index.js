// components
import Text from './Text/Text'
import Picture from './Picture/Picture'
// styles
import styled from 'styled-components'

const Greeting = () => {
    return (
        <Background>
            <ContentWrapper>
                <Text />
                <Picture />
            </ContentWrapper>
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    margin: 0;
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    padding: 0 10%;
`

export default Greeting 