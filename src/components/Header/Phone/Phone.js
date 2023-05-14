// img
import phoneSvg from '@assets/header/phone.svg'
// styled
import { styled } from 'styled-components'


const Phone = () => {
    return (
        <Link className='header_tel_num' href="tel:+79150610421">
            <Img src={phoneSvg} alt='Phone'/>
            <Tel>+7 (915) 061-04-21</Tel>
        </Link>
    )
}

const Link = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #FFFFFF;
    font-size: 16px;

    &:hover {
        color: #609f89;
        cursor: pointer;
    }
`

// TODO: Посмотреть стиль filter и разобраться с ним
const Img = styled.img`
    @media (max-width: 1024px ) {
        &:hover {
            filter: invert(30%);
        }
    }   
`

const Tel = styled.p`
    margin: 0 0 0 15px;
    /* любое разрешение больше чем меньше 1024px */
    @media (max-width: 1024px ) {
        display: none;
    }
`

export default Phone