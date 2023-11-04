import "../style.css";
import { useLocation } from "react-router-dom";
import { Estrelas } from "../utilidades";

function CartaoFilmeCompleto({filme}){
    return (
        <div class="bg-slate-500 border-solid m-2 w-3/5 flex px-5 py-4 gap-2 justify-between shadow-md shadow-slate-400 rounded-[24px]">
            <div>
                <h1 class="text-4xl">Elenco: </h1>
                <p class="text-lg">{filme.elenco}</p>
            </div>
            <div class="flex flex-col w-full">
                <div>
                    <img src={filme.picURL} class="w-full my-3 shadow-lg shadow-slate-400 rounded-[24px] z-10" alt={"Capa do Filme"}/>
                </div>
                <Estrelas avaliacao={filme.avaliacao}/>
            </div>
            <div>
                <h1 class="text-4xl">Sinópse:</h1>
                <p class="text-lg">{filme.sinopse}</p>
            </div>
        </div>
    );
}

export default CartaoFilmeCompleto;