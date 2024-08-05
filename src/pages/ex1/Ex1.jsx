import './Ex1.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exercicio1() {

  const [valorPedido, setValorPedido] = useState(0);
  const [valorCupom, setValorCupom] = useState(0);
  const [calculo, SetCalculo] = useState(0)

  function Pedido(e) {
    let novoValor = Number(e.target.value)
    setValorPedido(novoValor)
  }

  function Cupom(e) {
    let novoCupom = Number(e.target.value)
    setValorCupom(novoCupom)
  }

  function Resultado() {
    let novoCalculo = Number(valorPedido * (valorCupom / 100))
    SetCalculo(novoCalculo)
  }

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
      <div className='centro'>
        <div className='título'>
          <Link to='/'><img src="/assets/images/setinha.png" alt="" width='36px' /></Link>
          <h2>Exercício 01 - Cupom de desconto</h2>
        </div>

        <div className='amalero'>
          <img src="./assets/images/faixaamalera.png" alt="" height='4px' width='1170px' />
        </div>
        <div className='conteúdo'>

          <div className='descrição'>
            <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>
          </div>

          <div className='caixa'>
            <div className='grupo1'>

              <h4>Informe o valor do pedido</h4>
              <input type="text" placeholder='0' value={valorPedido} onChange={Pedido} />
            </div>
            <br />
            <div className='grupo2'>
              <h4>Informe o valor do cupom</h4>
              <input type="text" placeholder='0' value={valorCupom} onChange={Cupom} />
            </div>

            <div className='botão'>
              <button onClick={Resultado}>Executar</button>
            </div>

          </div>

          <div className='resultado'>
            <h4>Resultado: O total é R${calculo.toFixed(2)}</h4>
          </div>
        </div>
      </div>
    </div>

  );
}