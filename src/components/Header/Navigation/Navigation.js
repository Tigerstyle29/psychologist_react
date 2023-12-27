import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navigation = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navHandler = () => {
        setNavOpen(!navOpen);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const yOffset = -70;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            closeNav();
        }
    };

    return (
        <>
            <NavList open={navOpen}>
                <NavEl onClick={() => scrollToElement("about")}>Обо мне</NavEl>
                <Line />
                <NavEl onClick={() => scrollToElement("services")}>Услуги и цены</NavEl>
                <Line />
                <NavEl onClick={() => scrollToElement("consultation")}>Запись на консультацию</NavEl>
                <Line />
                <NavEl onClick={() => scrollToElement("faq")}>Частые вопросы</NavEl>
                <Line />
                <NavEl onClick={closeNav}>Блог</NavEl>
            </NavList>

            <ButtonStyled onClick={navHandler}>
                {navOpen ? <AiOutlineClose size={25} color='black' /> : <AiOutlineMenu size={25} color='white' />}
            </ButtonStyled>
        </>
    );
};

const NavList = styled.div.attrs(props => ({
    style: {
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
        height: 100vh;
        color: black;
        background-color: #f8f8f8;
        z-index: 10;
        transition: left 1s;
    }
`;

const Line = styled.span`
    border-right: #FFFFFF solid 1px;
    height: 25%;
    margin: 0 15px;

    @media (max-width: 870px) {
        display: none;
    }
`;

const NavEl = styled.div`
    text-decoration: none;
    padding: 20px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        color: #609f89;
    }
`;

const ButtonStyled = styled.button`
    display: none;
    
    @media (max-width: 870px) {
        background-color: rgba(0, 0, 0, 0);
        border: none;
        display: block;
        position: absolute;
        right: 10px;
        top: 29px;
        cursor: pointer;
        z-index: 10;
    }
`;

export default Navigation;
