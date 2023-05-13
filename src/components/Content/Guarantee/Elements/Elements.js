import './elements.css'
import heartSvg from '../../../../assets/guarantee/heart.svg'
import loveSvg from '../../../../assets/guarantee/love.svg'
import angrySvg from '../../../../assets/guarantee/angry.svg'
import handsSvg from '../../../../assets/guarantee/hands.svg'

function Elements() {
    return (
        <div className='elements'>
            <img src={heartSvg} alt='heart' />
            <p>
                Конфиденциальность и безопасность
            </p>
            <img src={loveSvg} alt='love' />
            <p>
                Принятие и поддержка
            </p>
            <img src={angrySvg} alt='angry' />
            <p>
                Безоценочное восприятие
            </p>
            <img src={handsSvg} alt='hands' />
            <p>
                Компетентность
            </p>
        </div>
    )
}

export default Elements