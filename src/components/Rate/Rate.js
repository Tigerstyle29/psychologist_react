import Header from "./Header"
import UlElement from "./UlElement"
// styles
import styled from 'styled-components'

const Rate = () => {
    return (
        <Background>
                <Header />
                <UlElement />
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5F2FC;
`

export default Rate 