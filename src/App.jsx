
import './App.css'
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import LeftFileNavbar from './components/LeftFileNavbar';

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <section>
        <LeftFileNavbar></LeftFileNavbar>
        <Body/>
      </section>
      <Footer></Footer>

    </div>
  );
}

export default App
