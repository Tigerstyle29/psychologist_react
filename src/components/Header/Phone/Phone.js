import './phone.css'
import phoneSvg from '../../../assets/header/phone.svg'

const Phone = () => {

    return (
        <div className='header_tel'>
            <img src={phoneSvg} alt='Phone'></img>
            <a className='header_tel_num' href="tel:+79150610421">+7 (915) 061-04-21</a>
        </div>
    )
}

export default Phone