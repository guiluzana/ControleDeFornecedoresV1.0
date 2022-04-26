import { Button, Table } from "react-bootstrap";
import { IconeEditar, IconeExcluir } from "../icones/icones";
export default function TabelaCadastroFornecedores(props){
    return(
   <div>     
        <Table striped bordered hover variant="light">
        <thead>
            <tr>
            <th>Nome do Fornecedor</th>
            <th>Pessoa para contato</th>
            <th>Fantasia</th>
            <th>CEP</th>
            <th>UF</th>
            <th>Municipio</th>
            <th>Bairro</th>
            <th>Logradouro</th>
            <th>Numero</th>
            <th>Complemento</th>
            <th>Pais</th>
            <th>Codigo BACEN</th>
            <th>CNPJ</th>
            <th>IE/RG</th>
            <th>Inscricao Municipal</th>
            <th>Telefone</th>
            <th>Celular</th>
            <th>Fax</th>
            <th>Email</th>
            <th>Ações</th>
            </tr>
        </thead>
        <tbody>
        {
            props.fornecedores.map((fornecedor, i) => {
                return (
                    <tr key={i} >
                        <td>{fornecedor.nome}</td>
                        <td>{fornecedor.pessoa}</td>
                        <td>{fornecedor.fantasia}</td>
                        <td>{fornecedor.cep}</td>
                        <td>{fornecedor.uf}</td>
                        <td>{fornecedor.municipio}</td>
                        <td>{fornecedor.bairro}</td>
                        <td>{fornecedor.logradouro}</td>
                        <td>{fornecedor.numero}</td>
                        <td>{fornecedor.complemento}</td>
                        <td>{fornecedor.pais}</td>
                        <td>{fornecedor.bacen}</td>
                        <td>{fornecedor.cnpj}</td>
                        <td>{fornecedor.ie}</td>
                        <td>{fornecedor.inscricao}</td>
                        <td>{fornecedor.telefone}</td>
                        <td>{fornecedor.celular}</td>
                        <td>{fornecedor.fax}</td>
                        <td>{fornecedor.email}</td>
                        <td>
                            <a><IconeEditar/></a>{' '}
                            <a><IconeExcluir/></a>
                        </td>
                    </tr>
                );
            })
            }
        </tbody>
        </Table>
        <Button onClick={props.chamarTelaCadastro} className="m-2" >Incluir Fornecedor</Button>
    </div>
    );
}
