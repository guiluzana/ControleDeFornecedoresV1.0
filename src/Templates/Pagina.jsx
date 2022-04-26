import Cabecalho from './Componentes/Cabecalho';
import Menu from './Componentes/Menu';
import Rodape from './Componentes/Rodape';
import './estilos/pagina.css';

export default function Pagina(props){
    return (
        <div>
            <Cabecalho 
                 titulo="Controle de Fornecedores - v 1.0"
                 usuario = {
                             {
                               avatar:"https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
                               nome:"Guilherme - 018"
                             }
                           }   
            />
            <div className="corpo">
                <aside>
                    <Menu itens={[
                        {rotulo:"Home", url:"/"},
                        {rotulo:"Cadastro de Fornecedores", url:"/fornecedores"},
                        {rotulo:"Contato", url:"/contato"}
                    ]}/>
                </aside>
                <div className="conteudo">
                    {props.children}    
                </div>
            </div>
            <Rodape informacao="Av. Salim Macruz, 455 - Prudentino - Presidente Prudente/SP ..."/>
        </div>
    );
}
