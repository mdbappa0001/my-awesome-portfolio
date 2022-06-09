import './App.css';
import Home from './components/pages/Home/Home';
import NavBar from './components/sharedPages/NavBar';

function App() {
  return (
    <div className="max-w-7xl p-10 mx-auto scroll-smooth">
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
