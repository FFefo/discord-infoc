import './Ex6.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exercicio6() {

    const [valorSalario, setValorSalario] = useState(0);
    const [valorBonus, setValorBonus] = useState(0);
    const [valorDesconto, setValorDesconto] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    function Salario(e) {
        let novoSal = Number(e.target.value)
        setValorSalario(novoSal)
    }

    function Bonus(e) {
        let novoBonus = Number(e.target.value)
        setValorBonus(novoBonus)
    }

    function Desconto(e) {
        let novoDesc = Number(e.target.value)
        setValorDesconto(novoDesc)
    }

    function Calculo() {
        let total = valorSalario + (valorSalario * (valorBonus / 100)) - valorDesconto

        setValorTotal(total)
    }

    return (
        <div className="Ex6">
            <header className="pagina-exercicio6">
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
                    <h2>Exercício 06 - Cálculo de Salário</h2>
                </div>

                <div className='amarelo faixa'></div>
                <div className='conteúdo'>

                    <div className='descrição'>
                        <p>Implementar um programa em Java para <b>calcular o salário líquido</b> de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais.</p>
                    </div>

                    <div className='caixa'>
                        <div className='inputs'>

                            <div className='grupo'>

                                <h4>Informe seu salário</h4>
                                <input type="text" placeholder='0' value={valorSalario} onChange={Salario}/>
                            </div>
                            <div className='grupo'>
                                <h4>Informe o valor do bônus</h4>
                                <input type="text" placeholder='0' value={valorBonus} onChange={Bonus}/>
                            </div>
                            <div className='grupo'>
                                <h4>Informe o desconto em R$</h4>
                                <input type="text" placeholder='0' value={valorDesconto} onChange={Desconto}/>
                            </div>

                        </div>

                        <div className='botão'>
                            <button onClick={Calculo}>Executar</button>
                        </div>

                    </div>

                    <div className='resultado'>
                        <h4>Resultado: O total é R${valorTotal.toFixed(1)}</h4>
                    </div>
                </div>
            </div>
        </div>

    );
};