import './Ex11.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CabecalhoEx } from '../../components/cabecalhoex/cabecalhoex';

export default function Exercicio11() {

    const [valorNum, setValorNum] = useState(0);
    const [objTabuada, setObjTabuada] = useState({});

    function CalcularTabuada() {
        let n = valorNum

        let tab = {
            x1: n + ' x ' + 1 + ' = ' + (n*1),
            x2: n + ' x ' + 2 + ' = ' + (n*2),
            x3: n + ' x ' + 3 + ' = ' + (n*3),
            x4: n + ' x ' + 4 + ' = ' + (n*4),
            x5: n + ' x ' + 5 + ' = ' + (n*5),
            x6: n + ' x ' + 6 + ' = ' + (n*6),
            x7: n + ' x ' + 7 + ' = ' + (n*7),
            x8: n + ' x ' + 8 + ' = ' + (n*8),
            x9: n + ' x ' + 9 + ' = ' + (n*9),
            x10: n + ' x ' + 10 + ' = ' + (n*10)
        }

        setObjTabuada(tab)

        // setListaRegistros([...listaRegistros, reg]);
    }

    return (
        <div className="Ex11">
            <header className="pagina-exercicio11">
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

                    <CabecalhoEx titulo='Exercício 11 - Tabuada' cor='#6533b7' desc='Implemente um programa em Javascript que escreva no terminal a tabuada de um número informado pelo usuário. A mensagem deve estar no formato:
                            "A x B = X".'/>


                    <div className='caixa'>
                        <div className='grupo1'>

                            <h4>Tabuada</h4>
                            <input type="text" placeholder='0' value={valorNum} onChange={e => setValorNum(e.target.value)} />
                        </div>

                        <div className='botão'>
                            <button onClick={CalcularTabuada}>Executar</button>
                        </div>

                    </div>

                    <div className='resultado'>
                        <ul>
                            <li>{objTabuada.x1}</li>
                            <li>{objTabuada.x2}</li>
                            <li>{objTabuada.x3}</li>
                            <li>{objTabuada.x4}</li>
                            <li>{objTabuada.x5}</li>
                            <li>{objTabuada.x6}</li>
                            <li>{objTabuada.x7}</li>
                            <li>{objTabuada.x8}</li>
                            <li>{objTabuada.x9}</li>
                            <li>{objTabuada.x10}</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}