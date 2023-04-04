import './App.css';
import {Routes,Route} from 'react-router-dom';
import Contact from './Pages/Contact';
import Detail from './Pages/Detail';
import 'animate.css';
import Formulaire from './Pages/Formulaire';
import Accueil from './Pages/Accueil';
import Reserver from './Pages/Reserver';
import Chambres from './Pages/Chambres';
import Restaurant from './Pages/Restaurant';
import Piscines from './Pages/Piscines';
import Activity from './Pages/Activity';



function App() {
  return (
    <Routes>
    <Route path="/" element={<Accueil/>}/>
    <Route path='/contact' element={<Contact/>} />
    <Route path='/formulaire' element={<Formulaire/>} />
    <Route path='/detail' element={<Detail/>} />
    <Route path='/detail/:id' element={<Detail/>} />
    <Route path='/reserver' element={<Reserver/>}/>
    <Route path='/restaurant' element={<Restaurant/>}/>
    <Route path='/chambres' element={<Chambres/>}/>
    <Route path='/piscines' element={<Piscines/>}/>
    <Route path='/activity' element={<Activity/>}/>
    

  </Routes>
  );
}

export default App;
