import './Ex2.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Exercicio2() {

  const [valorKilo, setValorKilo] = useState(0);
  const [valorGrama, setValorGrama] = useState(0);

  function Kilo(e) {
    let novoKilo = Number(e.target.value)
    setValorKilo(novoKilo)
  }

  function Grama(e) {
    let novaGrama = valorKilo * 1000
    setValorGrama(novaGrama)
  }


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

        <div className='limao faixa'></div>

        <div className='conteúdo'>

          <div className='descrição'>
            <p>Implementar um programa em Javascript para <b>converter kilos em gramas.</b></p>
          </div>

          <div className='caixa'>
            <div className='grupo1'>

              <h4>Valor em kilos</h4>
              <input type="text" placeholder='0' value={valorKilo} onChange={Kilo} />
            </div>

            <div className='botão' onClick={Grama}>
              <button>Executar</button>
            </div>

          </div>

          <div className='resultado'>
            <h4>Resultado: O total em gramas é {valorGrama}</h4>
          </div>
        </div>
      </div>
    </div>

  );
}