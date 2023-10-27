import { useNavigate } from "react-router-dom";

function FormComentario(){
    const navigate = useNavigate();

    return (
        <div class="w-screen h-screen items-center">
            <div class="flex flex-col w-3/6 m-10 py-6 bg-slate-700 rounded-xl items-center">
                <h2 class="text-xl text-white center-text">Dê sua opinião:</h2>
                <form action={() => {navigate('/')}} method="post" class="flex flex-col justify-around">
                    <label for="nome" class="center-text text-white rounded-md">Seu nome:</label>
                    <input type="text" id="nome" name="nome" class="rounded-lg" required/>
    
                    <label for="genero" class="center-text text-white">Crítica:</label>
                    <textarea id="mensagem" name="mensagem" rows="4" cols="50" class="rounded-lg" required></textarea>
    
                    <button>
                        <input type="submit" value="Enviar" class="center-text text-white"/>
                    </button>
                </form>
            </div> 
        </div>
        );
}

export default FormComentario;