import './App.css';
import Header from './components/commons/Header/Header';
import Home from './components/commons/Main/Home'
import Skils from './components/commons/Main/Skils';
import Projects from './components/commons/Main/Projects'
import Contato from './components/commons/Main/Contato'
import Footer from './components/commons/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skils />
      <Projects />
      <Contato  id="contato"/>
      <Footer />
    </div>
  );
}

export default App;
