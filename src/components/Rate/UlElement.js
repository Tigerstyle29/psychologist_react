import Ulcard from '@components/UI/Ulcard'
// styled
import styled from 'styled-components'

const UlElementArr = [
    {
        id: 1,
        heading: 'Тариф',
        title: 'Первое знакомство',
        text: '1 встреча',
        button: 'Записаться'
    },
]
function UlElement() {
    return (
        <Wrapper>
            <ElementsStyled>
                {UlElementArr.map(props => {
                    return (
                        <ElementCard
                            key={props.id}
                            heading={props.heading}
                            title={props.title}
                            text={props.text}
                            button={props.button}
                        />
                    )
                })}
            </ElementsStyled>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: auto;
`
const ElementsStyled = styled.div`
`
const ElementCard = styled.div`
`

export default UlElement