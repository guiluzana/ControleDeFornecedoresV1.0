import { Container, Form, Row, Col, Button } from "react-bootstrap";
import {useState} from 'react';

export default function FormCadastroFornecedores(props){

    const [fornecedor, setFornecedor] = useState({nome:0,
                                            descricao:"",
                                            cnpj:0,
                                            cidade:"",
                                            sigla:""
                                        });
    
    const [formularioValido, setFormularioValido] = useState(false);



    function manipularMudancaFormulario(e){
        const componente = e.target;
        //spread operator
        setFornecedor({...fornecedor,[componente.name]:componente.value});
    }

    //função que manipula a submissão de dados do formulário (qdo o usuário clicar em gravar)
    function manipularSubmissaoDados(e){
        const meuForm = e.currentTarget;
        if (!meuForm.checkValidity()){ //Se não está validado meu formulário
            e.preventDefault(); //cancela o evento de submissão
            e.stopPropagation(); //parar a propagação do evento para outros interessados
        }
        setFormularioValido(true);
    }
    
    function ehNumeroValido(e){
        const componente = e.target;
        if (isNaN(Number(componente.value))){
            componente.setCustomValidity("Erro");
            setFormularioValido(false);
        }
        else{
            componente.setCustomValidity("");
        }
    }

    function possuiConteudo(e){
        const componente = e.target;
        if (componente.value === ''){
            componente.setCustomValidity("Erro");
            setFormularioValido(false);
        }
        else{
            componente.setCustomValidity("");
        }
    }

    return (
        <Container>
            <Form noValidate validated={formularioValido} method="POST" action="#" onSubmit={manipularSubmissaoDados}>
                <fieldset className="border bg-light p-5 m-2">
                    <legend>Cadastro de Fornecedores</legend>
                    {/*Nome do Fornecedor */}
                    <Row className="m-3">
                        <Col xs="12" md="3">
                            <Form.Label>Nome do Fornecedor:</Form.Label>
                        </Col>
                        <Col xs="12" md="7">
                            <Form.Control 
                                type="text"
                                id="nome"
                                name="nome"
                                value={fornecedor.codigo}
                                placeholder="Digite aqui..."
                                onChange={manipularMudancaFormulario}
                                onBlur={possuiConteudo}
                            />
                        </Col>
                        <Form.Control.Feedback type="invalid">
                        O nome do fornecedor deverá possuir pelo menos 10 caracteres!
                        </Form.Control.Feedback>    
                    </Row>
                    {/* Pessoa para contato */}
                    <Row className="m-3">
                        <Col xs="12" md="3">
                            <Form.Label>Pessoa para contato:</Form.Label>
                        </Col>
                        <Col xs="12" md="7">
                            <Form.Control 
                                type="text"
                                id="pessoa"
                                name="pessoa"
                                value={fornecedor.pessoa}
                                placeholder="Digite aqui..."
                                onChange={manipularMudancaFormulario}
                                onBlur={possuiConteudo}
                            />
                            <Form.Control.Feedback type="invalid">
                            Todos campos são de preenchimento obrigatório!    
                            </Form.Control.Feedback>
                        </Col>    
                    </Row>
                    {/* Fantasia */}
                    <Row className="m-3">
                        <Col xs="12" md="3">
                            <Form.Label>Fantasia:</Form.Label>
                        </Col>
                        <Col xs="12" md="7">
                            <Form.Control 
                                type="text"
                                id="fantasia"
                                name="fantasia"
                                value={fornecedor.fantasia}
                                placeholder="Digite aqui..."
                                onChange={manipularMudancaFormulario}
                                onBlur={possuiConteudo}
                            />
                            <Form.Control.Feedback type="invalid">
                            Todos campos são de preenchimento obrigatório!    
                            </Form.Control.Feedback>
                        </Col>    
                    </Row>              
                    {/* CEP, UF, Municipio */}   
                    <Row className="m-3">
                        <Col xs="12" md="3">
                            <Form.Label>CEP:</Form.Label>
                        </Col>
                        <Col xs="12" md="2">
                            <Form.Control 
                                type="text"
                                id="cep"
                                name="cep"
                                value={fornecedor.cep}
                                onChange={manipularMudancaFormulario}
                                onBlur={ehNumeroValido}
                            />
                            <Form.Control.Feedback type="invalid">
                            O campo código deverá receber um número válido;
                            </Form.Control.Feedback>
                        </Col>    
                        <Col xs="1" md="1">
                            <Form.Label>UF:</Form.Label>
                        </Col>
                        <Col xs="12" md="1">
                            <Form.Control 
                                type="text"
                                id="uf"
                                name="uf"
                                value={fornecedor.uf}
                                onChange={manipularMudancaFormulario}
                                onBlur={possuiConteudo}
                            />
                            <Form.Control.Feedback type="invalid">
                            Todos campos são de preenchimento obrigatório!    
                            </Form.Control.Feedback>
                        </Col>
                        <Col xs="12" md="1">
                            <Form.Label>Municipio:</Form.Label>
                        </Col>
                        <Col xs="12" md="3">
                            <Form.Control 
                                type="text"
                                id="municipio"
                                name="municipio"
                                value={fornecedor.municipio}
                                placeholder="Digite aqui..."
                                onChange={manipularMudancaFormulario}
                                onBlur={possuiConteudo}
                            />
                            <Form.Control.Feedback type="invalid">
                            Todos campos são de preenchimento obrigatório!    
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    {/* Bairro */}
                    <Row className="m-3">
                        <Col xs="12" md="3">
                            <Form.Label>Bairro:</Form.Label>
                        </Col>
                        <Col xs="12" md="7">
                            <Form.Control 
                                type="text"
                                id="bairro"
                                name="bairro"
                                value={fornecedor.bairro}
                                placeholder="Digite aqui..."
                                onChange={manipularMudancaFormulario}
                                onBlur={possuiConteudo}
                            />
                            <Form.Control.Feedback type="invalid">
                            Todos campos são de preenchimento obrigatório!    
                            </Form.Control.Feedback>
                        </Col>    
                    </Row>
                    {/* Logradouro */}
                    <Row className="m-3">
                        <Col xs="12" md="3">
                            <Form.Label>Logradouro:</Form.Label>
                        </Col>
                        <Col xs="12" md="7">
                            <Form.Control 
                                type="text"
                                id="logradouro"
                                name="logradouro"
                                value={fornecedor.logradouro}
                                placeholder="Digite aqui..."
                                onChange={manipularMudancaFormulario}
                                onBlur={possuiConteudo}
                            />
                            <Form.Control.Feedback type="invalid">
                            Todos campos são de preenchimento obrigatório!    
                            </Form.Control.Feedback>
                        </Col>    
                    </Row> 
                    {/* Numero, Complemento*/}   
                    <Row className="m-3">
                        <Col xs="12" md="3">
                            <Form.Label>Numero:</Form.Label>
                        </Col>
                        <Col xs="12" md="2">
                            <Form.Control 
                                type="text"
                                id="numero"
                                name="numero"
                                value={fornecedor.numero}
                                onChange={manipularMudancaFormulario}
                                onBlur={ehNumeroValido}
                            />
                            <Form.Control.Feedback type="invalid">
                            O campo código deverá receber um número válido;
                            </Form.Control.Feedback>
                        </Col>    
                        <Col xs="6" md="2">
                            <Form.Label>Complemento:</Form.Label>
                        </Col>
                        <Col xs="12" md="3">
                            <Form.Control 
                                type="text"
                                id="complemento"
                                name="complemento"
                                value={fornecedor.complemento}
                                placeholder="Digite aqui..."
                                onChange={manipularMudancaFormulario}
                                onBlur={possuiConteudo}
                            />
                            <Form.Control.Feedback type="invalid">
                            Todos campos são de preenchimento obrigatório!    
                            </Form.Control.Feedback>
                        </Col>      
                        </Row>
                        {/* País, Código BACEN*/}
                        <Row className="m-3">
                        <Col xs="12" md="3">
                            <Form.Label>País:</Form.Label>
                        </Col>
                        <Col xs="12" md="3">
                            <Form.Control 
                                type="text"
                                id="pais"
                                name="pais"
                                value={fornecedor.pais}
                                placeholder="Digite aqui..."
                                onChange={manipularMudancaFormulario}
                                onBlur={possuiConteudo}
                            />
                            <Form.Control.Feedback type="invalid">
                            Todos campos são de preenchimento obrigatório!    
                            </Form.Control.Feedback>
                        </Col>
                        <Col xs="6" md="2">
                            <Form.Label>Código BACEN:</Form.Label>
                        </Col>
                        <Col xs="12" md="3">
                            <Form.Control 
                                type="text"
                                id="bacen"
                                name="bacen"
                                value={fornecedor.bacen}
                                onChange={manipularMudancaFormulario}
                                onBlur={ehNumeroValido}
                            />
                            <Form.Control.Feedback type="invalid">
                            O campo código deverá receber um número válido;
                            </Form.Control.Feedback>
                        </Col>
                    </Row> 
                    {/* CNPJ, IE, Inscrição Municipal*/}   
                    <Row className="m-3">
                        <Col xs="12" md="3">
                            <Form.Label>CNPJ/CPF:</Form.Label>
                        </Col>
                        <Col xs="12" md="2">
                            <Form.Control 
                                type="text"
                                id="cnpj"
                                name="cnpj"
                                value={fornecedor.cnpj}
                                onChange={manipularMudancaFormulario}
                                onBlur={ehNumeroValido}
                            />
                            <Form.Control.Feedback type="invalid">
                            O campo código deverá receber um número válido;
                            </Form.Control.Feedback>
                        </Col>
                        <Col xs="12" md="1">
                            <Form.Label>IE/RG:</Form.Label>
                        </Col>
                        <Col xs="12" md="2">
                            <Form.Control 
                                type="text"
                                id="ie"
                                name="ie"
                                value={fornecedor.ie}
                                onChange={manipularMudancaFormulario}
                                onBlur={ehNumeroValido}
                            />
                            <Form.Control.Feedback type="invalid">
                            O campo código deverá receber um número válido;
                            </Form.Control.Feedback>
                        </Col>
                        <Col xs="12" md="2">
                            <Form.Label>Inscrição Municipal:</Form.Label>
                        </Col>
                        <Col xs="12" md="2">
                            <Form.Control 
                                type="text"
                                id="inscricao"
                                name="inscricao"
                                value={fornecedor.inscricao}
                                onChange={manipularMudancaFormulario}
                                onBlur={ehNumeroValido}
                            />
                            <Form.Control.Feedback type="invalid">
                            O campo código deverá receber um número válido;
                            </Form.Control.Feedback>
                        </Col>
                        </Row>
                        {/* Telefone, Celular, Fax*/}   
                    <Row className="m-3">
                        <Col xs="12" md="3">
                            <Form.Label>Telefone:</Form.Label>
                        </Col>
                        <Col xs="12" md="2">
                            <Form.Control 
                                type="text"
                                id="telefone"
                                name="telefone"
                                value={fornecedor.telefone}
                                onChange={manipularMudancaFormulario}
                                onBlur={ehNumeroValido}
                            />
                            <Form.Control.Feedback type="invalid">
                            O campo código deverá receber um número válido;
                            </Form.Control.Feedback>
                        </Col>
                        <Col xs="12" md="1">
                            <Form.Label>Celular:</Form.Label>
                        </Col>
                        <Col xs="12" md="2">
                            <Form.Control 
                                type="text"
                                id="celular"
                                name="celular"
                                value={fornecedor.celular}
                                onChange={manipularMudancaFormulario}
                                onBlur={ehNumeroValido}
                            />
                            <Form.Control.Feedback type="invalid">
                            O campo código deverá receber um número válido;
                            </Form.Control.Feedback>
                        </Col>
                        <Col xs="12" md="2">
                            <Form.Label>Fax:</Form.Label>
                        </Col>
                        <Col xs="12" md="2">
                            <Form.Control 
                                type="text"
                                id="fax"
                                name="fax"
                                value={fornecedor.fax}
                                onChange={manipularMudancaFormulario}
                                onBlur={ehNumeroValido}
                            />
                            <Form.Control.Feedback type="invalid">
                            O campo código deverá receber um número válido;
                            </Form.Control.Feedback>
                        </Col>
                        </Row>
                    {/* botões */}
                    <Row className="m-3">
                        <Col xs="12" md={{offset:5}}>
                            <Button variant="success" type="submit">Gravar</Button>{' '}
                            <Button variant="secondary" onClick={props.chamartabelafornecedores}>Voltar</Button>
                        </Col>
                    </Row>
                </fieldset>
            </Form>
        </Container>
    );
}
