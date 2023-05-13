// components
import Header from '@components/Header/Header'
import Greeting from '@components/Greeting'
import AboutMe from '@components/AboutMe'
import Guarantee from '@components/Guarantee/Guarantee'


/**
 * TODO: восстановить компонент только после полного 
 * завершения предыдущего компонента с учетом адаптивки
 */
function App() {
    return (
        <div className="App">
            <Header />
            <Greeting />
            {/* <AboutMe /> */}
            {/* <Guarantee /> */}
        </div>
    );
}

export default App;
