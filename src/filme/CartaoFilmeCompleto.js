import { useLocation } from "react-router-dom";

function CartaoFilmeCompleto({filmePicUrl}){
    return (
        <div class="bg-slate-500 border-solid m-2 w-3/5 flex px-5 py-4 gap-2 justify-between shadow-md shadow-slate-400 rounded-[24px]">
            <div>
                <h1 class="text-4xl">Elenco: </h1>
                <p class="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quidem laborum error quod voluptatum illo dolor qui, tempore quam, impedit modi minus consequuntur adipisci voluptates asperiores ullam excepturi voluptas nemo.</p>
            </div>
            <div class="flex flex-col w-full">
                <div>
                    <img src={filmePicUrl} class="w-full my-3 shadow-lg shadow-slate-400 rounded-[24px] z-10" alt={"Capa do Filme"}/>
                </div>
                <div class="flex justify-around p-2 z-0">
                    <i class="fa-solid fa-star scale-150" style={{color: "#f6d32d"}}></i>
                    <i class="fa-solid fa-star scale-150"></i>
                    <i class="fa-solid fa-star scale-150"></i>
                    <i class="fa-solid fa-star scale-150"></i>
                    <i class="fa-solid fa-star scale-150"></i>
                </div>
            </div>
            <div>
                <h1 class="text-4xl">Sinópse:</h1>
                <p class="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quidem laborum error quod voluptatum illo dolor qui, tempore quam, impedit modi minus consequuntur adipisci voluptates asperiores ullam excepturi voluptas nemo.</p>
            </div>
        </div>
    );
}

export default CartaoFilmeCompleto;