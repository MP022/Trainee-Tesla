import "../style.css";
import { Estrelas } from "../utilidades";

function Comentario({comentario}){
    return (
        <div class="bg-red-800 w-full h-full bg-cover p-5">
                        <div class="px-5">
                            <div class="flex justify-between">
                                <h1>{comentario.nome}</h1>
                                <Estrelas avaliacao={comentario.avaliacao}/>
                            </div>
                            <h2 class="px-3">{comentario.comentario}</h2>
                        </div>
                    </div>
    );
}

export default Comentario;