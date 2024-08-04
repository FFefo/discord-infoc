import './Ex1.scss'
import { Link } from 'react-router-dom';

export default function Exercicio1() {
    return (
      <div className="Ex1">
        <header className="pagina-exercicio1">
          <div className="logo">
  
            <img src="/assets/images/frei-logo.png" alt='' width='51px' height='60px' />
            <h2>React FreiS</h2>
  
          </div>
          <div className="topicos">
            <Link to="/">Início</Link>
            <Link to="/Sobre">Sobre</Link>
          </div>
        </header>
        </div>
    );
}