import "../style.css";
import Cartao from './CartaoFilme'
import { useNavigate } from "react-router-dom";

function Inicio(){
    const navigate = useNavigate();
    const abrirFilme = () => {
        navigate('/filme');
    }

    return (
        <div className="App" class="flex flex-wrap justify-center px-10 py-6 gap-y-8 gap-x-12">
            <Cartao abrirFilme={abrirFilme}/>
            <Cartao />
            <Cartao />
            <Cartao />
            <Cartao />
            <Cartao />
            <Cartao />
            <Cartao />
            <Cartao />
            <Cartao />
        </div>
    );
}

export default Inicio