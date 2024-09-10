import './Ex1.scss'
import { useState } from 'react';
import { Cabecao } from '../../components/cabecalho/cabecalho.jsx';
import { CabecalhoEx } from '../../components/cabecalhoex/cabecalhoex.jsx';

export default function Exercicio1() {

  const [valorPedido, setValorPedido] = useState(0);
  const [valorCupom, setValorCupom] = useState(0);
  const [calculo, setCalculo] = useState(0);

  function Pedido(e) {
    let novoValor = Number(e.target.value)
    setValorPedido(novoValor)
  };

  function Cupom(e) {
    let novoCupom = Number(e.target.value)
    setValorCupom(novoCupom)
  };

  function Resultado() {
    let novoCalculo = Number(valorPedido * (valorCupom / 100))
    setCalculo(novoCalculo)
  };

  return (
    <div className="Ex1">
      <Cabecao />
      <div className='centro'>


        <div className='conteúdo'>
          <CabecalhoEx titulo='Cupom de Desconto' cor='#FFCE37' desc='Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.' />

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