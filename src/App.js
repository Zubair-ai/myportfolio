import {Routes,Route} from 'react-router-dom'
import './App.scss';
import About from './components/about/About';
import Home from './components/home/Home'
import Sidebar from './components/sidbar/Sidebar';
import Contact from './components/contact/Contact'
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Tips from './components/tips/Tips'
function App() {
  return (
    <>
    <Sidebar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/skills' element={<Skills/>}/> 
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/Tips' element={<Tips/>}/> 
    </Routes>
    </>
  );
}

export default App;
