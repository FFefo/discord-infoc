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

            <Card cor='#FFCE37' titulo='Cupom de desconto' subtitulo='Exercício 1' link='/exercicio1'/>

            <Card cor='#B3FF37' titulo='Converter Kg/gramas' subtitulo='Exercício 2' link='/exercicio2'/>

            <Card cor='#37FFF3' titulo='Valor total por quantidade' subtitulo='Exercício 3' link='/exercicio3'/>

            <Card cor='#37b7ff' titulo='Leitura de livro' subtitulo='Exercício 4' link='/exercicio4'/>

            <Card cor='#cb37ff' titulo='Média de notas' subtitulo='Exercício 5' link='/exercicio5'/>

            <Card cor='#ff5b37' titulo='Salário líquido' subtitulo='Exercício 6' link='/exercicio6'/>

            <Card cor='#37ffab' titulo='Cores primárias' subtitulo='Exercício 7' link='/exercicio7'/>

            <Card cor='#000000' titulo='Temperatura' subtitulo='Exercício 8' link='/exercicio8'/>

            <Card cor='#d0d0d0' titulo='Sorveteria' subtitulo='Exercício 9' link='/exercicio9'/>

            <Card cor='#b75333' titulo='Cálculo de imc com histórico' subtitulo='Exercício 10' link='/exercicio10'/>

            <Card cor='#6533b7' titulo='Tabuada' subtitulo='Exercício 11' link='/exercicio11'/>

          </div>

        </div>

      </body>

    </div>
  );
}