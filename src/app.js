import { PaginaHome, PaginaContato, PaginaCadastroFornecedores, Pagina404 } from "./Paginas";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PaginaHome/>} />
          <Route path="/fornecedores" element={<PaginaCadastroFornecedores/>}/>
          <Route path="/contato" element={<PaginaContato/>} />
          <Route path="*" element={<Pagina404/>} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
