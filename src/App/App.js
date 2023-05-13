// components
import Header from '../components/Header/Header'
import Info from '../components/Content/Info/Info'
import Aboutme from '../components/Content/Aboutme/Aboutme'
import Guarantee from '../components/Content/Guarantee/Guarantee'

// styles
import './app.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Aboutme />
      <Guarantee />
    </div>
  );
}

export default App;
