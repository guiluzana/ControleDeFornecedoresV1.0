import '../estilos/menu.css';
import {Link} from 'react-router-dom';

export default function Menu(props){
    //vários itens sejam exibidos item = {rotulo, url}
    return (
        <div className="menu">
            <ul>
                {
                    /*a função map do javascript aplica uma função
                    para cada item de uma lista, vetor, etc */
                    props.itens.map(({rotulo, url}, i) => {
                        return <li key={i}><Link to={url}>{rotulo}</Link></li>    
                    })
                }
            </ul>
        </div>
    );
}



