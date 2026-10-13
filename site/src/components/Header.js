import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="cabecalho">
            <h1 className="cabecalho-logo">Aniquiladores de Fome</h1>

            <nav className="cabecalho-menu">
                <Link to="/">Início</Link>
                <Link to="/produtos">Cardápio</Link>
                <Link to="/contato">Contatos</Link>
            </nav>
        </header>
    );
}

export default Header;