// img
import greenTriangle from '@src/assets/aboutme/greenTriangle.svg'
import purpleTriangle from '@src/assets/aboutme/purpleTriangle.svg'
import psyPhoto from '@src/assets/aboutme/psy.png'
// styled
import styled from 'styled-components'


const Img = () => {
    return (
        <Wrapper>
            {/* <GreenImg
                src={greenTriangle}
                alt='треугольник_1'
                width="40%"
                height="575px"
            />  */}
            {/* <PurpleImg
                src={purpleTriangle}
                alt='треугольник_2'
                width="60%"
                height="1000px"
            /> 
            <PsyImg
                src={psyPhoto}
                className='psy'
                alt='психолог'
                width="400px"
                height="500px"
            />                 */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const GreenImg = styled.img`
    position: relative;
`

const PurpleImg = styled.img``

const PsyImg = styled.img`
    position: relative;
    left: -93%;
    top: 50px;
`


export default Img