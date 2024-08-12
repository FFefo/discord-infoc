import './index.scss'
import App from './pages/inicio/App';
import Sobre from './pages/sobre/Sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Exercicio1 from './pages/ex1/Ex1';
import Exercicio2 from './pages/ex2/Ex2';
import Exercicio3 from './pages/ex3/Ex3';
import Exercicio4 from './pages/ex4/Ex4';
import Exercicio5 from './pages/ex5/Ex5';
import Exercicio6 from './pages/ex6/Ex6';
import Exercicio7 from './pages/ex7/Ex7';
import Exercicio8 from './pages/ex8/Ex8';
import Exercicio9 from './pages/ex9/Ex9';
import Exercicio10 from './pages/ex10/Ex10';
import Exercicio11 from './pages/ex11/Ex11';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= '/' element={<App />} />
                <Route path= '/sobre' element={<Sobre />} />
                <Route path= '/exercicio1' element={<Exercicio1 />} />
                <Route path= '/exercicio2' element={<Exercicio2 />} />
                <Route path= '/exercicio3' element={<Exercicio3 />} />
                <Route path= '/exercicio4' element={<Exercicio4/>} />
                <Route path= '/exercicio5' element={<Exercicio5/>} />
                <Route path= '/exercicio6' element={<Exercicio6/>} />
                <Route path= '/exercicio7' element={<Exercicio7/>} />
                <Route path= '/exercicio8' element={<Exercicio8/>} />
                <Route path= '/exercicio9' element={<Exercicio9/>} />
                <Route path= '/exercicio10' element={<Exercicio10/>} />
                <Route path= '/exercicio11' element={<Exercicio11/>} />

            </Routes>
        </BrowserRouter>
    )
}