import Aboutmepicture from './Aboutmepicture/Aboutmepicture'
import Aboutmetext from './Aboutmetext/Aboutmetext'

import './aboutme.css'

const Aboutme = () => {
    return (
        <div className='aboutme_background'>
            <div className='aboutme'>
                <Aboutmepicture />
                <Aboutmetext />
            </div>
        </div>
    )
}

export default Aboutme