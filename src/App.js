import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from "./componentes/Principal"
import Ejercicio from "./componentes/Ejecicio"


const App = () =>{
  return (
    <>
   
      <Routes>
        <Route path='/' element={<Principal/>} />
        <Route path='/ejercicio' element={<Ejercicio/>} />
      </Routes>

    </>
  );
}

export default App;
