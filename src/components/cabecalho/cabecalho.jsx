import { Link } from 'react-router-dom';
import './cabecalho.scss'

export function Cabecao() {
    return (
        <header className="comp-cabecalho">
            <div className="logo">

                <img src="/assets/images/frei-logo.png" alt='' width='51px' height='60px' />
                <h2>React FreiS</h2>

            </div>
            <div className="topicos">
                <Link to="/">Início</Link>
                <Link to="/Sobre">Sobre</Link>
            </div>
        </header>
    )
}

