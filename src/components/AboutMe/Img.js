// img
import trianglePsy from '@src/assets/aboutme/trianglePsy.png'
// mobile
import green from '@assets/aboutme/green.png'
import purple from '@assets/aboutme/purple.png'
// styled
import styled from 'styled-components'


const Img = () => {
    return (
        <Wrapper>
            <Psytriangles
                src={trianglePsy}
                alt='Психолог'
                width="100%"
                height="100%"
            /> 
            <Greentriangle
                src={green}
                alt="псих"
                width="100%"
                height="100%" />
            <Purpletriangle
                src={purple}
                alt="фиолетовый треугольник"
                width="100%"
                heigh="100%" />           
        </Wrapper>
    )
}

const Wrapper = styled.div`
`
const Psytriangles = styled.img`
    @media (max-width: 870px) {
        display: none;
    }
`

const Greentriangle = styled.img`
    display: none;

    @media (max-width: 870px) {
        display: flex;
    }
`

const Purpletriangle = styled.img`
    display: none;

    @media (max-width: 870px) {
        display: flex;
    }
`

export default Img