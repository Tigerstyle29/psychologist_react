// img
import psyJpg from '@src/assets/greeting/psy.jpg'
import telegramSvg from '@src/assets/greeting/telegram.svg'
import vkSvg from '@src/assets/greeting/vk.svg'
import youtubeSvg from '@src/assets/greeting/youtube.svg'
// styled
import styled from 'styled-components'


const Picture = () => {
    return (
        <Wrapper>

            <Img 
                src={psyJpg} 
                className='picture'
                alt='greeting.jpg'
            /> 

            {/* <SocialsList>
                <a href='https://t.me/psyhologist_antipov'>  
                    <img 
                        src={telegramSvg} 
                        alt="tg" 
                        width="48px"
                        height="48px" 
                    />  
                </a>

                <a href='https://vk.com/ksenobeerg'>  
                    <img
                        src={vkSvg}
                        alt="vk"
                        width="48px"
                        height="48px"
                    />
                </a>

                <a href='https://youtube.com/@igor_psyhologist_antipov'>
                    <img 
                        src={youtubeSvg} 
                        alt="youtube" 
                        width="48px"
                        height="48px" 
                    />   
                </a>               
            </SocialsList>  */}

        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 53%;

    border: 1px green dashed; /* TODO: убрать после завершения работы над элементом */
`

const Img = styled.img`
    border-radius: 0 0 5% 30% ;
    height: auto;
    width: 100%;
    transform: translateY(-5px);
`

const SocialsList = styled.div`
    border: 1px dashed green;
`



// .social-tg {
//     display: inline-block;
//     position: absolute;
//     bottom: 10%;
//     left: 50%;
//     background-color: #6C5D95;
//     margin-right: 10px;
//     padding: 5px;
// }
// .social-vk {
//     display: inline-block;
//     position: absolute;
//     bottom: 10%;
//     left: 55%;
//     background-color: #6C5D95;
//     margin-right: 10px;
//     padding: 5px;
// }
// .social-yt {
//     display: inline-block;
//     position: absolute;
//     bottom: 10%;
//     left: 60%;
//     background-color: #6C5D95;
//     padding: 5px;
// }

export default Picture