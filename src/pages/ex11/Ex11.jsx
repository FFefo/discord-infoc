import './Ex11.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exercicio6() {

    const [valorNum, setValorNum] = useState(0);
    const [vetorTabuada, setVetorTabuada] = useState[0]

    function Numero (e) {
        let novoValor = Number(e.target.value)
        setValorNum(novoValor)
    }

    function Tabuada () {


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
                <div className='título'>
                    <Link to='/'><img src="/assets/images/setinha.png" alt="" width='36px' /></Link>
                    <h2>Exercício 11 - Tabuada</h2>
                </div>

                <div className='limao faixa'></div>

                <div className='conteúdo'>

                    <div className='descrição'>
                        <p>Implemente um programa em Javascript que <b>escreva no terminal</b> a tabuada de um número informado pelo usuário. A mensagem deve estar no formato:
                            "A x B = X".</p>
                    </div>

                    <div className='caixa'>
                        <div className='grupo1'>

                            <h4>Tabuada do</h4>
                            <input type="text" placeholder='0' />
                        </div>

                        <div className='botão'>
                            <button>Executar</button>
                        </div>

                    </div>

                    <div className='resultado'>
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>

    );
}