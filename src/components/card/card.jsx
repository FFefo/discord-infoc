import { Link } from "react-router-dom";
import './card.scss';

export function Card(props) {

    return (
        <div className='ex1 quadrado'>
            <div className={props.cor}></div>
            <p className='nomeex'>{props.titulo}</p>;
            <Link to={props.link}><p>{props.subtitulo}</p></Link>
        </div>

    )
}