import './Sobre.scss'
import { Link } from 'react-router-dom'

export default function Sobre() {
    return (
        <div className='pagina-sobre'>
            <div className="logo">

                <img src="/assets/images/frei-logo.png" alt='' width='51px' height='60px' />
                <h2>React FreiS</h2>

            </div>
            <div className="topicos">
                <Link to="/">Início</Link>
                <Link to="/Sobre">Sobre</Link>
            </div>

            <div className='conteudo'>
                <h1>Sobre</h1>

                <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a <br /> aprimorar suas habilidades em Node.js e lógica de programação de forma prática e <br /> envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o <br /> aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa <br /> praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo <br /> que você avance no seu próprio ritmo e de acordo com suas necessidades.
                    <br />
                    <br />
                    Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer <br /> e desenvolver suas habilidades.
                    <br />
                    Estamos ansiosos para ver seu progresso e sucesso!</p>
                <br />
                <img src="/assets/images/frei-logo.png" alt="" width='90px' />
            </div>

        </div>

    )
}