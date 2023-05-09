import './social.css'
import vkSvg from '../../../assets/header/vk.svg'
import tgSvg from '../../../assets/header/tg.svg'
import ytSvg from '../../../assets/header/yt.svg'

function Social() {
    return (
        <div className='social'>
            <a href='https://t.me/psyhologist_antipov' className='social_el'>
            <img src={tgSvg} alt='TG'/>
            </a>
            <a href='https://vk.com/ksenobeerg' className='social_el'>
            <img src={vkSvg} alt='VK'/>
            </a>
            <a href='https://youtube.com/@igor_psyhologist_antipov' className='social_el'>
            <img src={ytSvg} alt='YT'/>    
            </a>
        </div>
    )
}
export default Social