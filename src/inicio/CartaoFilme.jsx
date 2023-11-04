import '../style.css';
import { useNavigate } from "react-router-dom";
import { Estrelas } from "../utilidades";

function CartaoFilme({filme}){
    const navigate = useNavigate();

    return  (
        <div class="bg-slate-500 border-solid m-2 w-1/5 flex flex-col px-5 py-4 gap-2 justify-between group shadow-md shadow-slate-400 rounded-[24px]">
            <button onClick={() => {navigate('/Trainee-Tesla/filme/' + filme.id);}}>
                <img src={filme.picURL} class="w-full hover:scale-110 hover:shadow-none duration-300 my-3 shadow-lg shadow-slate-400 rounded-[24px] z-10" alt="Capa do filme"/>
            </button>
            <Estrelas avaliacao={filme.avaliacao} />
        </div>
    );
}

export default CartaoFilme;