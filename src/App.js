import './App.css';
import Row from './components/Row';
import categories from './api';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      { categories.map((caterogy) => {
        return ( <Row 
          key={ caterogy.name }
          title={ caterogy.title }
          path={ caterogy.path } 
          isLarge={ caterogy.isLarge }
          />
        );
      })}
    </div>
  );
}

export default App;
