import Comentario from './Comentario'
import CartaoFilmeCompleto from './CartaoFilmeCompleto'
import { useLocation } from "react-router-dom";

function Filme(){
    const pathnameArray = useLocation().pathname.split('/');
    const idFilme = pathnameArray[pathnameArray.length - 1];

    return (
        <div>
            <div class="flex flex-col items-center">
                <CartaoFilmeCompleto idFilme={0} filmePicUrl={"../filme"+idFilme+".png"}/>
                <div class="space-y-3 bg-red-700 w-full h-full bg-cover p-5">
                    <h1 class="text-4xl">Avaliações</h1>
                    <Comentario />
                    <Comentario />
                    <Comentario />
                    <Comentario />
                </div>
            </div>
        </div>
    );
}

export default Filme