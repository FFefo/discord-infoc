import './Ex3.scss'
import { Link } from 'react-router-dom';

export default function Exercicio1() {
  return (
    <div className="Ex3">
      <header className="pagina-exercicio3">
        <div className="logo">

          <img src="/assets/images/frei-logo.png" alt='' width='51px' height='60px' />
          <h2>React FreiS</h2>

        </div>
        <div className="topicos">
          <Link to="/">Início</Link>
          <Link to="/Sobre">Sobre</Link>
        </div>
      </header>

      <div className='execonteudo'>

        <div className='execabeçalho'>

          <div className='setinhaa'>
            <Link to= '/'><img src="/assets/images/setinha.png" alt="" width='32px' /></Link>
          </div>

          <div className='tilt'>
            <h1>Exercício 03 - Valor total por quantidade</h1>
          </div>

        </div>

        <div className='blue'>
          <img src="/assets/images/listrablue.png" alt="" />
        </div>

        <div className='conteudoexe'>

          <div className='exercicio'>
            <p>Implementar um programa em Javascript para calcular o <b>total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande</b>, <br /> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
          </div>

          <div className='sla'>

            <div className='calculo'>

              <h3 className='tt1'>Quantidade pequeno</h3>
              <h3 className='tt2'>Quantidade médio</h3>
              <h3 className='tt3'>Quantidade grande</h3>

            </div>

            <div className='calestrutura'>

              <input className='op1' type="text" placeholder='0' />
              <input className='op2' type="text" placeholder='0' />
              <input className='op3' type="text" placeholder='0' />

            </div>

            <div className='execut'>
              <button className='bt'><h3>Executar</h3></button>
            </div>

          </div>

          <div className='result'>
            <h4>Resultado: O total é R$ 0,00</h4>
          </div>

        </div>

      </div>

    </div>
  );
}