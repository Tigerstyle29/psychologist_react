import styled from 'styled-components'

// TODO: Примерно на 870px (разрешение) сделать бургер меню
const Navigation = () => {
    return (
        <NavList>
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
    )
}
const NavList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    color: #FFFFFF;
    font-size: 16px;
`

const Line = styled.span`
    border-right: #FFFFFF solid 1px; 
    height: 25%;
    margin: 0 15px;
`

const NavEl = styled.p`
    &:hover {
        color: #609f89;
        cursor: pointer;
    }
`

export default Navigation