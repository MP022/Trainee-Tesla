import '../style.css';
import { useNavigate } from "react-router-dom";

function Estrelas(){
    return  <div class="flex justify-around p-2 z-0">
                <i class="fa-solid fa-star scale-150"  style={{color: "#f6d32d"}}></i>
                <i class="fa-solid fa-star scale-150"></i>
                <i class="fa-solid fa-star scale-150"></i>
                <i class="fa-solid fa-star scale-150"></i>
                <i class="fa-solid fa-star scale-150"></i>
            </div>;
}

function CartaoFilme({filmePicUrl, idFilme}){
    const navigate = useNavigate();

    return  (
        <div class="bg-slate-500 border-solid m-2 w-1/5 flex flex-col px-5 py-4 gap-2 justify-between group shadow-md shadow-slate-400 rounded-[24px]">
            <button onClick={() => {navigate('/filme/' + idFilme);}}>
                <img src={filmePicUrl} class="w-full hover:scale-110 hover:shadow-none duration-300 my-3 shadow-lg shadow-slate-400 rounded-[24px] z-10" alt="Capa do filme"/>
            </button>
            <Estrelas />
        </div>
    );
}

export default CartaoFilme;