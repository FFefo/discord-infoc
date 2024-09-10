import './cabecalhoex.scss'
import { Link } from 'react-router-dom'

export function CabecalhoEx(props) {

    return (
        <header className='comp-cabecalhoex'>

            <div className='título'>
                <Link to='/'><img src="/assets/images/setinha.png" alt="" width='36px' /></Link>
                <h2>{props.titulo}</h2>
            </div>

            <div className='faixa ' style={{ backgroundColor: props.cor }}></div>

            <div className='descrição'>
                <p>{props.desc}</p>
            </div>

        </header>
    )
}