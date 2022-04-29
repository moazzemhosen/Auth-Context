// import logo from './logo.svg';
import {Home} from './components/Home'
import {About} from './components/About'
import {Navbar} from './components/Navar'
import {Routes,Route} from 'react-router-dom'
import {UserList} from './components/UserList'
import {UserDetails} from './components/UserDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/users' element={<UserList/>}></Route>
        <Route path='/users/:id' element={<UserDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
