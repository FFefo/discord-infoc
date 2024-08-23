import { useState } from 'react';
import './Ex5.scss'
import { Link } from 'react-router-dom';
import { lerNumero } from '../../utils/converse';

export default function Exercicio5() {
    const[notaOne, setNotaOne] = useState('')
    const[notaTwo, setNotaTwo] = useState(0)
    const[notaThree, setNotaThree] = useState(0)
    const[totalMedia, setTotalMedia] = useState(0)
    const[alunoPassou, setAlunoPassou] = useState(true)

    function NotaUm(e){
        let n1 = Number(e.target.value)
        setNotaOne(n1)
    }

    function NotaDois(e){
        let n2 = Number(e.target.value)
        setNotaTwo(n2)
    }

    function NotaTrês(e){
        let n3 = Number(e.target.value)
        setNotaThree(n3)
    }

    function CalculoTotalMedia() {
        let total = (notaOne + notaTwo + notaThree) / 3
        setTotalMedia(total)

        let passou = total >= 6;
        setAlunoPassou(passou)
    }
 

    return (
        <div className='mth'>

            <header className="pagina-inicio">
                <div className="logo">

                    <img src="/assets/images/frei-logo.png" alt='' width='51px' height='60px' />
                    <h2>React FreiS</h2>

                </div>
                <div className="topicos">
                    <Link to="/">Início</Link>
                    <Link to="/Sobre">Sobre</Link>
                </div>
            </header>

            <div className='conteudo-pt'>

                <div className='tt-01'>
                    <Link to='/'><img src="/assets/images/setinha.png" alt="" width='36px' /></Link>
                    <h2>Exercício 05 - Média Aluno</h2>
                </div>

                <div className='azul faixa'></div>

                <div className='ct-01'>

                    <div className='exe05'>
                        <p>Implementar um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
                    </div>

                    <div className='caixinha-estrutura'>
                        <div className='intp'>

                            <div className='groupo'>
                                <h4>Nota 01: </h4>
                                <input type="text" placeholder='0' value={notaOne} onChange={NotaUm} />
                            </div>

                            <div className='groupo'>
                                <h4>Nota 02: </h4>
                                <input type="text" placeholder='0' value={notaTwo} onChange={NotaDois} />
                            </div>

                            <div className='groupo'>
                                <h4>Nota 03: </h4>
                                <input type="text" placeholder='0' value={notaThree} onChange={NotaTrês} />
                            </div>
                        </div>

                        <div className='bt-01'>
                            <button onClick={CalculoTotalMedia}>Executar</button>
                        </div>
                    </div>

                    <div className='result-01'>
                        <h4> A média do aluno é: {totalMedia.toFixed(1)} </h4>
                        <h4> O aluno passou? {alunoPassou ? 'true' : 'false'} </h4>
                    </div>

                </div>

            </div>

        </div>
    )
}