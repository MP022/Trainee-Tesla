import './style.css';
import { useNavigate, useLocation } from "react-router-dom";


function Header(){
    const navigate = useNavigate();
    const abrirInicio = () => {
        navigate('/');
    }
    const abrirFormFilme = () => {
        navigate('/FormFilme');
    }
    const abrirFormComentario = () => {
        navigate('/FormComentario');
    }
    
    return (
        <header class = "h-18 flex bg-slate-950 px-8 py-4 justify-between z-20 sticky top-0 shadow-lg shadow-slate-400 items-center" >
            <button class="flex justify-between gap-2" onClick={abrirInicio}>
                <img class="w-15 h-10" src="./logo.png" alt='Logo do Site'/>
                <h1 class="align-text-bottom text-slate-50 text-3xl">Movie Evaluate.</h1>
            </button>
            {useLocation().pathname === "/" && <button onClick={abrirFormFilme}>
                <i class="fa-solid fa-circle-plus fa-2xl" style={{color: "#f5f5f5"}}></i>
            </button>}
            {useLocation().pathname === "/filme" && <button onClick={abrirFormComentario}>
                <i class="fa-solid fa-circle-plus fa-2xl" style={{color: "#f5f5f5"}}></i>
            </button>}
        </header>
    );
}

export default Header;