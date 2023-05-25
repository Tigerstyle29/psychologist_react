import styled from 'styled-components'
// icons for mobile
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
// hook 
import { useState } from 'react'

// TODO: Примерно на 870px (разрешение) сделать бургер меню
const Navigation = () => {
    const [nav, setNav] = useState(false);
    return (
        <NavList>
            { nav ? [NavList, active].join(' ') : [NavList] } 
            <NavEl>Обо мне</NavEl>
            <Line/>

            <NavEl>Услуги и цены</NavEl>
            <Line/>

            <NavEl>Запись на консультацию</NavEl>
            <Line/>

            <NavEl>Частые вопросы</NavEl>
            <Line/>

            <NavEl>Блог</NavEl>
            
            <AiOutlineMenuStyled size={25} onClick={() => setNav(!nav)}>  
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu/>}
            </AiOutlineMenuStyled>
            
        </NavList>
    )
}
const NavList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    color: #FFFFFF;
    font-size: 16px;

    @media (max-width: 870px) {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        // высота на все окно 
        height: 100vh;
        color: black;
        background-color: #f8f8f8;
        z-index: 10;
        transition: left 1s;
    }
        &.active {
              left: 0;
          }
` 

const Line = styled.span`
    border-right: #FFFFFF solid 1px; 
    height: 25%;
    margin: 0 15px;

    @media (max-width: 870px) {
        display: none;
    }
`

const NavEl = styled.p`
    &:hover {
        color: #609f89;
        cursor: pointer;
    }
`
// бургер меню 

const AiOutlineMenuStyled = styled(AiOutlineMenu)`
    display: none;
    
    @media  (max-width: 870px) {
        display: block;
        position: absolute;
        right: 10px;
        top: 29px;
        cursor: pointer;
        z-index: 10;
    }
`

export default Navigation