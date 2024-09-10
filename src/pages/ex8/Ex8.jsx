import './Ex8.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CabecalhoEx } from '../../components/cabecalhoex/cabecalhoex';

export default function Exercicio8() {

    const [valorTemperatura, setValorTemperatura] = useState(0)
    const [situacaoTemp, setSituacaoTemp] = useState('');

    function Temperatura(e) {
        let novaTemp = Number(e.target.value)
        setValorTemperatura(novaTemp)
    }

    function Situacao() {
        let novaSit = ''

        if (valorTemperatura > 41) {
            novaSit = 'Hipertermia'
        } else if (valorTemperatura >= 39.6 & valorTemperatura < 41) {
            novaSit = 'Febre Alta'
        } else if (valorTemperatura >= 37.6 & valorTemperatura < 39.6) {
            novaSit = 'Febre'
        } else if (valorTemperatura >= 36 & valorTemperatura < 37.6) {
            novaSit = 'Normal'
        } else if (valorTemperatura < 36) {
            novaSit = 'Hipotermia'
        }

        setSituacaoTemp(novaSit)
    }

    return (
        <div className='Ex8'>
            <header className='pagina-exercicio8'>
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

                <div className='conteúdo'>

                    <CabecalhoEx titulo='Exercício 08 - Termômetro' cor='#000000' desc='Implemente um programa em Java que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação.' />

                    <div className='caixa'>
                        <div className='grupo1'>

                            <h4>Informe a sua temperatura</h4>
                            <input type="text" placeholder='0' value={valorTemperatura} onChange={Temperatura} />
                        </div>

                        <div className='botão'>
                            <button onClick={Situacao}>Executar</button>
                        </div>

                    </div>

                    <div className='resultado'>
                        <h4>A situação para sua temperatura é {situacaoTemp}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}