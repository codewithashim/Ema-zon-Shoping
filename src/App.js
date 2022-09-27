import './App.css';
// import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <main className="App">
      <Nav></Nav>
      {/* <Header></Header> */}
      <Shop></Shop>
    </main>
  );
}

export default App;
