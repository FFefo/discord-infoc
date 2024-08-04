import './index.scss'
import App from './pages/inicio/App';
import Sobre from './pages/sobre/Sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Exercicio1 from './pages/ex1/Ex1';
import Exercicio2 from './pages/ex2/Ex2';
import Exercicio3 from './pages/ex3/Ex3';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= '/' element={<App />} />
                <Route path= '/sobre' element={<Sobre />} />
                <Route path= '/exercicio1' element={<Exercicio1 />} />
                <Route path= '/exercicio2' element={<Exercicio2 />} />
                <Route path= '/exercicio3' element={<Exercicio3 />} />

            </Routes>
        </BrowserRouter>
    )
}