import CardProduto from "../components/CardProduto";
import "./Produtos.css";

function Produtos() {
    const produtos = [
        {nome: "X-Burger", preco: "20", imagem:"burger.webp"},
        {nome: "Pão com Gelo", preco: "10", imagem:"gelo.png"},
        {nome: "X-Tomate", preco: "35", imagem:"tomato.webp"},
        {nome: "Combo da aura", preco: "120", imagem:"aura.gif"},
        {nome: "Combo Alerta de Fofura", preco: "80", imagem: "luta.jpg"},
        {nome: "O patrimonio da loja", preco: "-1000000", imagem: "resenha.jpg"},
    ];

    return(
        <section className="pagina-produtos">
            <h2>Cardápio</h2>
            <div className="lista-produtos">
                {produtos.map((produto, index) => ( 
                    <CardProduto
                        key={index}
                        nome={produto.nome}
                        preco={produto.preco}
                        imagem={produto.imagem}
                    />
                ))}
            </div>
        </section>
    );
}

export default Produtos;