// img
import background from '@assets/aboutme/purpleTriangle.svg'
// styled
import styled from 'styled-components' // TODO: разобрать styled-components


const Text = () => {
    return (
        <Background
            backgroundUrl={background}
        >
            <Content>
                <Title>Обо мне</Title>

                <Text1>
                    Меня зовут Игорь Антипов. 
                    Я — практикующий психолог. Своим главным принципом считаю
                    «не навреди», поэтому очень аккуратно
                    и вдумчиво даю советы, сопереживаю клиенту
                    в рамках клиент-психолог отношений. 
                    Мне всегда можно написать и о чём-то спросить, я с радостью и интересом отзовусь на ваш вопрос
                    и максимально постараюсь помочь.
                </Text1>

                <Text2>
                    В своих методах использую такие виды терапий:<br />
                    мета когнитивная терапия <br />
                    схема терапия
                    терапия принятия и ответственности
                    медитация осознанности
                </Text2>
            </Content>
        </Background>
    )
}

// TODO: разобрать background стили
const Background = styled.div`
    background-image: url(${props => props.backgroundUrl});
    // картинка на заднем фоне не повторяется
    background-repeat: no-repeat; 
    background-position: center;
    // растягивает изображение по ширине и высоте на 100%
    background-size: cover;
`

const Content = styled.div`
    position: relative;
    width: 50%;
    top: -900px;
    right: -50%;
    color: white;
`

const Title = styled.h2`
    font-size: 35px;
`

const Text1 = styled.p`
    width: 80%;
`

const Text2 = styled.p`
    position: relative;
    width: 60%;
    right: -10%;
`

export default Text