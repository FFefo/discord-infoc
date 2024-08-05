import './Ex2.scss'
import { Link } from 'react-router-dom';


export default function Exercicio1() {
  return (
    <div className="Ex2">
      <header className="pagina-exercicio2">
        <div className="logo">

          <img src="/assets/images/frei-logo.png" alt='' width='51px' height='60px' />
          <h2>React FreiS</h2>

        </div>
        <div className="topicos">
          <Link to="/">Início</Link>
          <Link to="/Sobre">Sobre</Link>
        </div>
      </header>
      <div className='centro'>
        <div className='título'>
          <Link to='/'><img src="/assets/images/setinha.png" alt="" width='36px' /></Link>
          <h2>Exercício 02 - Converter Kg/gramas</h2>
        </div>

        <div className='amalero'>
          <img src="./assets/images/faixaverde.png" alt="" height='4px' width='1170px' />
        </div>
        <div className='conteúdo'>

          <div className='descrição'>
            <p>Implementar um programa em Javascript para <b>converter kilos em gramas.</b></p>
          </div>

          <div className='caixa'>
            <div className='grupo1'>

              <h4>Valor em gramas</h4>
              <input type="text" placeholder='0' />
            </div>
          
            <div className='botão'>
              <button>Executar</button>
            </div>

          </div>

          <div className='resultado'>
            <h4>Resultado: O total é R$ 0,00</h4>
          </div>
        </div>
      </div>
    </div>

  );
}