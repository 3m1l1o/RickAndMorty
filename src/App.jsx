import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from './components/Inicio'
import Personaje from './components/Personaje'


function App() {
  return (
    
      <div className="contenedor">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Inicio>Inicio</Inicio>}></Route>
            <Route path="/Personaje/:id" element={ <Personaje>todosPersonajes</Personaje>} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
