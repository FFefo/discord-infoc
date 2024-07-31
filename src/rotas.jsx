import './index.scss'
import App from './pages/inicio/App';
import Sobre from './pages/sobre/Sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sobre' element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}