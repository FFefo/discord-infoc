import './Ex10.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CabecalhoEx } from '../../components/cabecalhoex/cabecalhoex';

export default function Exercicio10() {

    const [valorAltura, setValorAltura] = useState(0)
    const [valorPeso, setValorPeso] = useState(0)
    const [valorIMC, setValorIMC] = useState(0)
    const [situacaoIMC, setSituacaoIMC] = useState('')

    const [novoRegistro, setNovoRegistro] = useState('');
    const [listaRegistros, setListaRegistros] = useState([])
    const [editando, setEditando] = useState(-1)

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
        let reg = 'Altura: ' + valorAltura + ' | Peso: ' + valorPeso + ' | Situação: ' + situacao
        setNovoRegistro(reg)

        if (reg !== '') {

            if (editando === -1) {

                setListaRegistros([...listaRegistros, reg]);
            } else {
                listaRegistros[editando] = reg;
                setListaRegistros([...listaRegistros])
                setEditando(-1);
            }
        }

    }

    function removerRegistro(pos) {
        listaRegistros.splice(pos, 1);
        setListaRegistros([...listaRegistros]);
    }

    function alterarRegistro(pos) {
        setNovoRegistro(listaRegistros[pos]);
        setEditando(pos);
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

                <div className='conteúdo'>

                    <CabecalhoEx titulo='Exercício 10 - Cálculo IMC' cor='#b75333' desc='Implemente um programa em Java que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação.' />

                    <div className='calculo'>

                        <div className='caixa'>

                            <div className='entradas'>

                                <div className='grupo1'>

                                    <h4>Altura</h4>
                                    <input type="text" placeholder='0' value={valorAltura} onChange={e => setValorAltura(e.target.value)} />
                                </div>

                                <div className='grupo2'>

                                    <h4>Peso</h4>
                                    <input type="text" placeholder='0' value={valorPeso} onChange={e => setValorPeso(e.target.value)} />

                                </div>
                            </div>
                            <div className='botão'>
                                <button onClick={IMC}>Executar</button>
                            </div>
                        </div>


                        <div className='lista'>

                            <ul>
                                {listaRegistros.map((item, pos) =>
                                    <li key={pos}>
                                        {item}
                                        <img src="./assets/images/trash-can-solid.svg" alt="delete" width='15px' onClick={() => removerRegistro(pos)} />  &nbsp;
                                    </li>
                                )}
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}