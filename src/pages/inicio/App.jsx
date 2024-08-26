import './App.scss';
import { Link } from 'react-router-dom';
import { Card } from '../../components/card/card.jsx';

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

            <Card cor='laranja' />

            <div className='ex2 quadrado'>
              <div className='limao'></div>
              <p className='nomeex'>Converter Kg/gramas</p>
              <Link to='/exercicio2'><p>Exercício 02</p></Link>
            </div>

            <div className='ex3 quadrado'>
              <div className='ciano'></div>
              <p className='nomeex'>Valor total por quantidade</p>
              <Link to='/exercicio3'><p>Exercício 03</p></Link>
            </div>

            <div className='ex4 quadrado'>
              <div className='roxo'></div>
              <p className='nomeex'>Tempo de leitura</p>
              <Link to='/exercicio4'><p>Exercício 04</p></Link>
            </div>

            <div className='ex5 quadrado'>
              <div className='azul'></div>
              <p className='nomeex'>Média de Notas</p>
              <Link to='/exercicio5'><p>Exercício 05</p></Link>
            </div>

            <div className='ex6 quadrado'>
              <div className='amarelo'></div>
              <p className='nomeex'>Cálculo de Salário</p>
              <Link to='/exercicio6'><p>Exercício 06</p></Link>
            </div>

            <div className='ex7 quadrado'>
              <div className='vermelho'></div>
              <p className='nomeex'>Cores Primárias</p>
              <Link to='/exercicio7'><p>Exercício 07</p></Link>
            </div>

            <div className='ex8 quadrado'>
              <div className='preto'></div>
              <p className='nomeex'>Termômetro</p>
              <Link to='/exercicio8'><p>Exercício 08</p></Link>
            </div>

            <div className='ex9 quadrado'>
              <div className='rosa'></div>
              <p className='nomeex'>Sorveteria</p>
              <Link to='/exercicio9'><p>Exercício 09</p></Link>
            </div>

            <div className='ex10 quadrado'>
              <div className='verde'></div>
              <p className='nomeex'>Cálculo IMC</p>
              <Link to='/exercicio10'><p>Exercício 10</p></Link>
            </div>

            <div className='ex11 quadrado'>
              <div className='marrom'></div>
              <p className='nomeex'>Tabuada</p>
              <Link to='/exercicio11'><p>Exercício 11</p></Link>

            </div>
          </div>

        </div>

      </body>

    </div>
  );
}