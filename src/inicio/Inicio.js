import "../style.css";
import Cartao from './CartaoFilme'

function Inicio(){

    return (
        <div className="App" class="flex flex-wrap justify-center px-10 py-6 gap-y-8 gap-x-12">
            <Cartao idFilme={0} filmePicUrl={"./filme"+0+".png"}/>
            <Cartao idFilme={1} filmePicUrl={"./filme1.png"}/>
            <Cartao idFilme={2} filmePicUrl={"./filme2.png"}/>
            <Cartao idFilme={3} filmePicUrl={"./filme3.png"}/>
            <Cartao idFilme={4} filmePicUrl={"./filme4.png"}/>
        </div>
    );
}

export default Inicio