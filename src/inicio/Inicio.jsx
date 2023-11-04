import "../style.css";
import Cartao from './CartaoFilme';
import Catalago from '../utilidades.jsx';

function Inicio(){

    return (
        <div className="App" class="flex flex-wrap justify-center px-10 py-6 gap-y-8 gap-x-12">
            {Catalago.map(
                (filme) =>{
                    return (
                        <Cartao filme={filme}/>
                    )  
                }
            )}
        </div>
    );
}

export default Inicio