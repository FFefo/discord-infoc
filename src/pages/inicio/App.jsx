import './App.scss';
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className="App">
      <header className="pagina-inicio">
        <div className="logo">

          <img src="/assets/images/frei-logo.png" alt='' width='51px' height='60px' />
          <h2>React FreiS</h2>

        </div>
        <div className="topicos">
          <Link to="/">Início</Link>
          <Link to="/Sobre">Sobre</Link>
        </div>
      </header>

      <body>
        <div className='centro'>
          <h2>Escolha um treino...</h2>
          <div className='exs'>

            <div className='ex1'>
              <img src='./assets/images/laranja.png' alt='' width='60' height='60' />
              <p className='nomeex'>Cupom de desconto</p>
              <p>Exercício 01</p>
            </div>

            <div className='ex2'>
              <img src='./assets/images/verde.png' alt='' width='60' height='60' />
              <p className='nomeex'>Converter Kg/gramas</p>
              <p>Exercício 02</p>
            </div>

            <div className='ex3'>
              <img src='./assets/images/ciano.png' alt='' width='60' height='60' />
              <p className='nomeex'>Valor total por quantidade</p>
              <p>Exercício 03</p>
            </div>

          </div>

        </div>

      </body>

    </div>
  );
}