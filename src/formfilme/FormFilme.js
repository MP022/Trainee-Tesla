import "../style.css";

function FormFilme(){
    return (
    <div class="w-screen h-screen items-center">
        <div class="flex flex-col w-3/6 m-10 py-6 bg-slate-700 rounded-xl items-center">
            <h2 class="text-xl text-white center-text">Insira as informações:</h2>
            <form action="inicio.css" method="post" class="flex flex-col justify-around">
                <label for="nome" class="center-text text-white rounded-md">Nome do filme:</label>
                <input type="text" id="nome" name="nome" class="rounded-lg" required/>

                <label for="genero" class="center-text text-white">Gênero:</label>
                <input type="text" id="genero" name="genero" class="rounded-lg" required/>

                <label for="mensagem" class="center-text text-white">Sinopse:</label>
                <textarea id="mensagem" name="mensagem" rows="4" cols="50" class="rounded-lg" required></textarea>

                <button>
                    <input type="submit" value="Enviar" class="center-text text-white"/>
                </button>
            </form>
        </div> 
    </div>
    );
}

export default FormFilme;