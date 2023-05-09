// components
import Text from './Text/Text'
import Picture from './Picture/Picture'
// styles
import './info.css'

const Info = () => {
    return (
        <div className='info_background'>
            <div className='info'>
                <Text />
                <Picture />
            </div>
        </div>
    )
}

export default Info 