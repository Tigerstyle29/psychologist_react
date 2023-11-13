// components
import Header from '@components/Header'
import Greeting from '@components/Greeting'
import AboutMe from '@components/AboutMe'
import Guarantee from '@components/Guarantee/Guarantee'
import Help from '@components/Help/Help'
import Rate from '@components/Rate/Rate'
import { styled } from 'styled-components';
import Appointment from '../components/Appointment/Appointment'
import Accordion from '../components/Accordion/Accordion'

/**
 * TODO: восстановить компонент только после полного 
 * завершения предыдущего компонента с учетом адаптивки
 */
function App() {
    return (
        <>
            {/* TODO: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
           { /*<Header /> */ }
            <Content>
                <Greeting />
                <AboutMe />
                <Guarantee />
                <Help />
                <Rate />
                <Appointment />
                <Accordion />
            </Content>
            {/* <Footer /> */}
        </>
    );
}

const Content = styled.div`
    z-index: 1;
    
    /* любое разрешение больше чем меньше 1920px */
    width: 1440px;
        margin: 0 auto;

    /* любое разрешение больше чем меньше 1440px */
    @media (max-width: 1440px ) {
        width: 1024px;
    }

    /* любое разрешение больше чем меньше 1024px */
    @media (max-width: 1024px ) {
        width: 768px;
    }

    /* любое разрешение больше чем меньше 768px */
    @media (max-width: 768px ) {
        width: auto;
        margin: 0 10px;
    }
`


export default App;
