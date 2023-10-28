import Element from '@components/UI/Element'
// styled
import styled from 'styled-components'
import HelpCard from "./HelpCard";

const cards = [
    {
        id: 1,
        heading: 'Самооценка',
        text: 'Научиться жить в гармонии с собой'
    },
    {
        id: 2,
        heading: 'Тревожные расстройства',
        text: 'Побороть страхи, фобии, панические атаки',
    },
    {
        id: 3,
        heading: 'Стресс',
        text: 'Справиться со стрессом, который вас окружает'
    },
    {
        id: 4,
        heading: 'Депрессии',
        text: 'Вернуть хорошее настроение, избавиться от подавленности'
    },
]



// TODO: ПЕРЕИМЕНОВАТЬ ВСЕ СТРЕМНЫЕ НАЗВАНИЯ!
function Cards() {
    return (
        <CardsWrapper>
            {cards.map(card => <HelpCard card={card}/>)}
        </CardsWrapper>
    )
}

const CardsWrapper = styled.div`
  margin: 0 10%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export default Cards