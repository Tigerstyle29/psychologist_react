// components
import Navigation from './Navigation/Navigation'
import Phone from './Phone/Phone'
import Social from './Social/Social'
// styles
import './header.css'

const Header = () => {
    return (
        <div className='header_background'>
            <div className='header'>
                <Navigation />
                <Phone />
                <Social />
            </div>
        </div>
    )
}

export default Header