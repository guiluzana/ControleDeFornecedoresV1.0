import '../estilos/rodape.css';

export default function Rodape(props){
    return (
        <div className="rodape">
            <p className="informacao">{props.informacao}</p>
        </div>
    );
}
