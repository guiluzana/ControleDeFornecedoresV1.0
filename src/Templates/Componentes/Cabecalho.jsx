import '../estilos/cabecalho.css';

export default function Cabecalho(props){
    return (
        <div className="cabecalho">
            <div className="titulo">
                <h1>{props.titulo}</h1>
            </div>
            <div className="usuario">
                <p>Usuário: <img src={props.usuario.avatar}/> {props.usuario.nome}</p>
            </div>
        </div>
    );
}
