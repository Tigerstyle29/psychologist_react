// components
import Navigation from './Navigation/Navigation'
import Phone from './Phone/Phone'
import Social from './Social/Social'
// styles
import styled from 'styled-components'


const Header = () => {
    return (
        <Background>
            <HeaderStyled>
                <Navigation />
                <Phone />
                <Social />
            </HeaderStyled>
        </Background>
    )
}


const Background = styled.div`
    position: relative;
    height: 84px;
    width: 100%;
    background-color: #6C5D95;
    border-radius: 0px 0px 20px 20px;
    z-index: 9999;
`

const HeaderStyled = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    height: inherit;
    color: white;

    /* любое разрешение больше чем меньше 1920px */
        width: 1440px;
        margin: 0 auto;

    /* любое разрешение больше чем меньше 1440px */
    @media (max-width: 1440px ) {
        width: 1024px;
    }

    /* любое разрешение больше чем меньше 1024px */
    @media (max-width: 1024px ) {
        width: 850px;
    }

    /* любое разрешение больше чем меньше 768px */
    @media (max-width: 768px ) {
        width: auto;
        margin: 0 10px;
    }
`

export default Header