// img
import heartSvg from '@assets/guarantee/heart.svg'
import loveSvg from '@assets/guarantee/love.svg'
import angrySvg from '@assets/guarantee/angry.svg'
import handsSvg from '@assets/guarantee/hands.svg'  
// styles
import styled from 'styled-components'

function Elements() {
    return (
        <Wrapper>
            <El>
                <Element>
                    <img
                        src={heartSvg}
                        alt='heart' 
                        width="150px"
                        height="150px"
                    />
                    
                    <Text>
                        Конфиденциальность и безопасность
                    </Text>
                </Element>

                <Element>
                    <img 
                        src={loveSvg} 
                        alt='love'
                        width="150px"
                        height="150px" 
                    />
                    <Text>
                        Принятие и поддержка
                    </Text> 
                </Element>

                <Element>
                    <img
                        src={angrySvg} 
                        alt='angry'
                        width="150px"
                        height="150px" 
                    />
                    <Text>
                        Безоценочное восприятие
                    </Text>
                </Element>

                <Element>
                    <img
                        src={handsSvg}
                        alt='hands'
                        width="150px"
                        height="150px"
                    />
                    <Text>
                        Компетентность
                    </Text>
                </Element>
            </El>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`

const El = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Element = styled.div`
    display: flex;
    flex-direction: column;	
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 20%;
`
const Text = styled.p`
`

export default Elements