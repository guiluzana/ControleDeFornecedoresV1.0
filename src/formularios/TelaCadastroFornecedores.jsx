import FormCadastroFornecedores from "./FormCadastroFornecedor";
import TabelaCadastroFornecedores from "./TabelaCadastroFornecedores";
import listaFornecedores from "../Dados/fornecedores";
import { useState } from "react";

export default function TelaCadastroFornecedores(props){
    const [exibeTabela, setExibeTabela] = useState(true);
    function alternarTelas(){
        setExibeTabela(!exibeTabela)
    }
return(
        exibeTabela ? <TabelaCadastroFornecedores fornecedores={listaFornecedores} chamarTelaCadastro={alternarTelas} /> :  
        <FormCadastroFornecedores chamartabelafornecedores={alternarTelas}/>

    );
}
