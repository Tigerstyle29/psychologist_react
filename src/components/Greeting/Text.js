// styled
import styled from 'styled-components'


const Text = () => {
    return (
        <Wrapper>
            <Title>Психолог онлайн</Title>
            <PsyName>Игорь Антипов</PsyName>
            <Info>Помогу решить проблемы и начать новую жизнь</Info>
            <Button>Записаться</Button>
            <FreeConsult>Первая консультация - бесплатно</FreeConsult>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 43%;
`

const Title = styled.h1`
    font-weight: 700;
    color: #6C5D95;
    margin: 0;

    border: 1px red dashed; /* TODO: убрать после завершения работы над элементом */
    
    /*
        TODO: адаптиввный текст изучить принцип работы и 
        посмотреть какие бывают метрики 
        для размеров (px, vw, vh, em, rem, %, deg, ... ) 
    */
    font-size: 60px;
    @media (max-width: 1920px) {
        font-size: calc(20px + 1.8vw);
    }
`

const PsyName = styled.h2`
    font-size: 60px;
    margin: 0;
`

const Info = styled.p`
    font-size: 28px;
    line-height: 30px;
    color: #4F4F4F;
    margin: 40px 0 0;
`

const Button = styled.button`
    color: #fff;
    font-size: 18px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    font-weight: 700;
    border-width: 15px 90px;
    background-color: #609f89;
    border-color: transparent;
    margin: 60px 0 0;
`

const FreeConsult = styled.p`
    color: #4F4F4F;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0,7px;
    margin: 25px 0 0 0;
`


export default Text