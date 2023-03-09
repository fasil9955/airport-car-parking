import './assets/style.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/home';
import Login from './pages/Login';
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Layout/>}>
   <Route path="/" index element={<HomePage/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="*" element={<HomePage/>}/>
   
   </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;