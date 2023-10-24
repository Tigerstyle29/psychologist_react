import { styled } from 'styled-components'

const Header = () => {
    return (
        <Wrapper>
            <Heading>Тарифы</Heading>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`
const Heading = styled.h2`
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 48px;
    line-height: 55px;  
    padding: 80px 0 50px 0;
    margin: 0 0 0 0;    
`

export default Header