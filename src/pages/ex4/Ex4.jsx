import { useState } from 'react';
import './Ex4.scss'
import { Link } from 'react-router-dom';

export default function Exercicio4() {
    const[nomeLivro, setNomeLivro] = useState('')
    const[totalPages, setTotalPages] = useState(0)
    const[totalSegs, setTotalSegs] = useState(0)

    function Livro(e){
        let novoLivro = String(e.target.value)
        setNomeLivro(novoLivro)
    }

    function Pages(e){
        let pagesTotal = Number(e.target.value)
        setTotalPages(pagesTotal)
    }

    function Segs(e){
        let segsTotal = Number(e.target.value)
        setTotalSegs(segsTotal)
    }

    function Calculo

    return (
        <div className='motheeeeer'>

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

            <div className='pt-conteudo'>

                <div className='tt-00'>
                    <Link to='/'><img src="/assets/images/setinha.png" alt="" width='36px' /></Link>
                    <h2>Exercício 04 - Tempo Leitura</h2>
                </div>

                <div className='roxo faixa'></div>

                <div className='ct-00'>

                    <div className='exe04'>
                        <p>Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.</p>
                    </div>

                    <div className='caixinha-cc'>
                        <div className='inpt'>

                            <div className='group'>
                                <h4>Nome do livro: </h4>
                                <input type="text" placeholder='Digite o nome do livro aqui' />
                            </div>

                            <div className='group'>
                                <h4>Total de páginas: </h4>
                                <input type="text" placeholder='0' />
                            </div>

                            <div className='group'>
                                <h4>Tempo em segundos de leitura: </h4>
                                <input type="text" placeholder='0' />
                            </div>
                        </div>

                        <div className='bt-00'>
                            <button>Executar</button>
                        </div>
                    </div>

                    <div className='result-00'>
                        <h4>Resultado: você lerá o livro em: XXXXX horas</h4>
                    </div>

                </div>

            </div>

        </div>
    )
}