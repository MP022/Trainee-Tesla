import "../style.css";
import Comentario from './Comentario';
import CartaoFilmeCompleto from './CartaoFilmeCompleto';
import Catalago from '../utilidades.jsx';
import { useLocation } from "react-router-dom";

function Filme(){
    const pathnameArray = useLocation().pathname.split('/');
    const idFilme = pathnameArray[pathnameArray.length - 1];

    const filme = Catalago.filter((val) =>{
        if (val.id == idFilme){
            return val;
        }
      })[0];

    return (
        <div>
            <div class="flex flex-col items-center">
                <CartaoFilmeCompleto filme={filme}/>
                <div class="space-y-3 bg-red-700 w-full h-full bg-cover p-5">
                    <h1 class="text-4xl">Avaliações</h1>
                    {filme.comentarios.map(
                        (comentario) =>{
                            return (
                                <Comentario comentario={comentario} />
                            )  
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

export default Filme