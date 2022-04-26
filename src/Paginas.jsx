import Pagina from "./Templates/Pagina";
import TelaCadastroFornecedores from "./Formularios/TelaCadastroFornecedores";


export function PaginaHome(props){
    return (
        <Pagina>
            <h1>Página Home</h1>
            <h2>Seja bem-vindo!</h2>
            {/*props.children*/}
        </Pagina>
    );
}

export function PaginaContato(props){
    return (
        <Pagina>
            <p>Entre em Contato Conosco!</p>
            <p><span>Telefone: +55 (18) 9999-9999</span></p>
        </Pagina>
    );
}

export function PaginaCadastroFornecedores(props){
    return (
        <Pagina>
            <TelaCadastroFornecedores/>
        </Pagina>
    );
}

export function Pagina404(props){
    return (
        <Pagina>
            <p>Página não encontrada!</p>
        </Pagina>
    );
}




