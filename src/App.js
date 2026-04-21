import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './components/navBar'; 
import  {Banner} from'./components/Banner';
import  Skill from './components/Skill';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      
    </div>
  );
}

export default App;