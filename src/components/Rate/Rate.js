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
        text: '1 встреча\n\nСпециальный тариф для новых клиентов\n\nПознакомимся и наметим план проработки\n\nЦена: Бесплатно',
        button: 'Записаться'
    },{
        id: 2,
        heading: 'Тариф',
        title: 'Стресс',
        text: '3 встречи\n\nДля тех, кто понимает, что нужен\n комплексный подход\n\nГлубокая проработка кризисной ситуации\n\nЦена: 1500 руб/1 час',
        button: 'Записаться'
    },{
        id: 3,
        heading: 'Тариф',
        title: 'Кризис',
        text: '5 встреч\n\nДля тех, кто понимает, что нужен\n комплексный подход\n\nГлубокая проработка кризисной ситуации\n\nЦена: 1500 руб/1 час',
        button: 'Записаться'
    },
]

const Rate = () => {
    return (
        <Background id="services">
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* Карточки будут переноситься на новую строку при нехватке места */
    padding: 20px; /* Добавил отступы для улучшения визуального восприятия */
`

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5F2FC;
`

export default  Rate