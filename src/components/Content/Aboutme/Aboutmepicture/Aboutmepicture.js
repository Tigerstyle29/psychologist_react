import './aboutmepicture.css'
import polygon4Svg from '../../../../assets/aboutme/polygon4.svg'
import polygon5Svg from '../../../../assets/aboutme/polygon5.svg'
import psySvg from '../../../../assets/aboutme/psy.svg'

const Aboutmepicture = () => {
    return (
        <div className='aboutmepic'>
            <img src={polygon4Svg} className='triangle_4'
                alt='треугольник_1'
                width="575px"
                height="575px" /> 
            <img src={polygon5Svg} className='triangle_5'
                alt='треугольник_2'
                width="60%"
                height="1000px" /> 
            <img src={psySvg} className='psy'
                alt='психолог'
                width="500px"
                height="740px" />                
        </div>
    )
}

export default Aboutmepicture