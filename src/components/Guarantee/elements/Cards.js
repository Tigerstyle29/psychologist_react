// img
import heartSvg from '@assets/guarantee/heart.svg'
import loveSvg from '@assets/guarantee/love.svg'
import angrySvg from '@assets/guarantee/angry.svg'
import handsSvg from '@assets/guarantee/hands.svg'  
import Card from '@components/UI/Card'
// styles
import styled from 'styled-components'

// Массив объектов
const cardsArr = [
    {   
        id: 1,
        img: heartSvg,
        alt: 'heart',
        text: 'Конфиденциальность и безопасность'
    },
    {   
        id: 2,
        img: loveSvg,
        alt: 'love',
        text: 'Принятие и поддержка'
    },
    {   
        id: 3,
        img: angrySvg,
        alt: 'heart',
        text: 'Безоценочное восприятие',
    },
    {   
        id: 4,
        img: handsSvg,
        alt: 'hands',
        text: 'Компетентность',
    }
]

function Cards() {
    return (
        <Wrapper>
            <CardsStyled>
                {/* с помощьб .map() перебрал каждый элемент (el) и отрисовал для каждого компонент Card */}
                {/* лучше использовать el вместо props, тут показано для лучшего понимания */}
                {cardsArr.map(props => {
                    return (
                        <Card 
                            key={props.id}
                            img={props.img}
                            alt={props.alt}
                            text={props.text}
                        />
                    )
                })}
            </CardsStyled>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`

const CardsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export default Cards
