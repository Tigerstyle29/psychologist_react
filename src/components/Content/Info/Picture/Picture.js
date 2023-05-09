import './picture.css'
import psyJpg from '../../../../assets/info/psy.jpg'
import telegramSvg from '../../../../assets/info/telegram.svg'
import vkSvg from '../../../../assets/info/vk.svg'
import youtubeSvg from '../../../../assets/info/youtube.svg'



const Picture = () => {
    return (
        <div className='pic'>
            <img src={psyJpg} className='picture'
                alt='психолог'
                width="600px"
                height="550px" />    
            <a href='https://t.me/psyhologist_antipov'>    
            <img src={telegramSvg} className='social-tg'
                alt="tg" 
                width="48px"
                height="48px" />  
            </a>
            <a href='https://vk.com/ksenobeerg'>    
            <img src={vkSvg} className='social-vk'
                alt="vk" 
                width="48px"
                height="48px" />
            </a> 
            <a href='https://youtube.com/@igor_psyhologist_antipov'>
            <img src={youtubeSvg} className='social-yt'
                alt="youtube" 
                width="48px"
                height="48px" />   
            </a>             
        </div>
    )
}

export default Picture