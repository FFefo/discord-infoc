import './Ex10.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exercicio10() {

    const [valorAltura, setValorAltura] = useState(0)
    const [valorPeso, setValorPeso] = useState(0)
    const [valorIMC, setValorIMC] = useState(0)
    const [situacaoIMC, setSituacaoIMC] = useState('')

    function Altura(e) {
        let novaAltura = Number(e.target.value)
        setValorAltura(novaAltura)
    }

    function Peso(e) {
        let novaPeso = Number(e.target.value)
        setValorPeso(novaPeso)
    }

    function IMC() {
        let imc = valorPeso / valorAltura ** 2
        let situacao = ''

        if (imc >= 40) {
            situacao = 'Obesidade Grau III'
        } else if (imc >= 35 & imc < 40) {
            situacao = 'Obesidade Grau II'
        } else if (imc >= 30 & imc < 35) {
            situacao = 'Obesidade Grau I'
        } else if (imc >= 25 & imc < 30) {
            situacao = 'Sobrepeso'
        } else if (imc >= 18.5 & imc < 25) {
            situacao = 'Peso Normal'
        } else if (imc < 18.5) {
            situacao = 'Abaixo do Peso'
        }

        setValorIMC(imc)
        setSituacaoIMC(situacao)
    }


    return (
        <div className="Ex10">
            <header className="pagina-exercicio10">
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
                    <h2>Exercício 10 - Cálculo IMC</h2>
                </div>

                <div className='verde faixa'></div>
                <div className='conteúdo'>

                    <div className='descrição'>
                        <p>Implemente um programa em Java que a partir da altura e do peso de uma pessoa, <b>calcule o IMC</b> e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação.</p>
                    </div>

                    <div className='caixa'>
                        <div className='grupo1'>

                            <h4>Informe sua altura em metros</h4>
                            <input type="text" placeholder='0' value={valorAltura} onChange={Altura}/>
                        </div>
                        <br />
                        <div className='grupo2'>
                            <h4>Informe seu peso em Kg</h4>
                            <input type="text" placeholder='0' value={valorPeso} onChange={Peso}/>
                        </div>

                        <div className='botão'>
                            <button onClick={IMC}>Executar</button>
                        </div>

                    </div>

                    <div className='resultado'>
                        <h4>Seu IMC é {valorIMC.toFixed(2)}</h4>
                        <h4>Sua classificação é {situacaoIMC}</h4>
                    </div>
                </div>
            </div>
        </div>

    );
}