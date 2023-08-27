import Element from '@components/UI/Element'
// styled
import styled from 'styled-components'

const elementsArr = [
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

function Elements() {
    return (
        <Wrapper>
            <ElementsStyled>
                {elementsArr.map(props => {
                    return (
                        <Element 
                            key={props.id}
                            heading={props.heading}
                            text={props.text}
                        />
                    )
                })}
            </ElementsStyled>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`
const ElementsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export default Elements