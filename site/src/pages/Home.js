import Banner from "../components/Banner";
import "./Home.css";

function Home() {
    return (
        <div className="pagina-home">
            <Banner />

            <section className="home-sobre">
                <h2>Sobre nós</h2>

                <p>Abrimos esse estabelecimento com um único e absoluto propósito:
                    matar a sua fome da forma mais brutal, mais aniquiladora,
                     e também acessível para você como caro cliente.
                </p>
            </section>
        </div>
    );
}

export default Home;