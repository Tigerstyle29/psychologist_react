import styled from 'styled-components'
// icons for mobile
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
// hook 
import {useState, useEffect} from 'react'

// TODO: Примерно на 870px (разрешение) сделать бургер меню
const Navigation = () => {

    const [navOpen, setNavOpen] = useState(false); // true | false

    const navHandler = () => {
        console.log('click')
        setNavOpen(!navOpen)
    }

    // useEffect(() {
    //    console.log('navOpen', navOpen)
    //}, [navOpen])

    // className={ navOpen ? [NavList, active].join(' ') : [NavList] }

    return (
        <>
        <NavList
            open={navOpen}
        > 
            <NavEl>Обо мне</NavEl>
            <Line/>

            <NavEl>Услуги и цены</NavEl>
            <Line/>

            <NavEl>Запись на консультацию</NavEl>
            <Line/>

            <NavEl>Частые вопросы</NavEl>
            <Line/>

            <NavEl>Блог</NavEl>
        </NavList>

        <ButtonStyled onClick={navHandler}>
            {navOpen ? <AiOutlineClose size={25} color='black'/> : <AiOutlineMenu size={25} color='white'/>}
        </ButtonStyled>

            {/*
                if(navOpen === true) {
                    return <AiOutlineClose size={25} />
                } else {
                    <AiOutlineMenu size={25}/>
                }
            }*/}
        </>
    )
}
const NavList = styled.div.attrs(props => ({
    style: {
        top: props.navOpen ? '0px' : '101vh',
        top: props.open ? '0px' : '101vh',
    }
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    color: #FFFFFF;
    font-size: 16px;

    @media (max-width: 870px) {

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

const ButtonStyled = styled.button`
    display: none;
    
    @media  (max-width: 870px) {
        background-color: rgba(0,0,0,0);
        border: none;
        display: block;
        position: absolute;
        right: 10px;
        top: 29px;
        cursor: pointer;
        z-index: 10;
    }
`

export default Navigation