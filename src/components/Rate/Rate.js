// import Header from "./Header.depricated.txt"
// import HelpCard.js from "./HelpCard.js.depricated.txt"
// styles
import styled from 'styled-components'
import RateCard from "./rateCard";

const cardArray = [
    {
        id: 1,
        heading: 'Тариф',
        title: 'Первое знакомство',
        text: '1 встреча',
        button: 'Записаться'
    },{
        id: 2,
        heading: 'Тариф',
        title: 'Первое знакомство',
        text: '1 встреча',
        button: 'Записаться'
    },{
        id: 3,
        heading: 'Тариф',
        title: 'Первое знакомство',
        text: '1 встреча',
        button: 'Записаться'
    },
]

const Rate = () => {
    return (
        <Background>
            <Title>Тарифы</Title>
            <CardWrapper>
                {cardArray.map(card=> <RateCard card={card}/>)}
            </CardWrapper>
        </Background>
    )
}

const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 48px;
    line-height: 55px;  
    padding: 80px 0 50px 0;
    margin: 0 0 0 0;    
`

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 480px);
`

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5F2FC;
`

export default  Rate