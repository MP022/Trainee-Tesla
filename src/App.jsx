import './style.css';
import Header from './Header'
import Inicio from './inicio/Inicio'
import Filme from './filme/Filme'
import FormFilme from './formfilme/FormFilme'
import FormComentario from './formcomentario/FormComentario'
import Footer from './Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/Trainee-Tesla/' element={<Inicio />}></Route>;
                <Route path='/Trainee-Tesla/filme/:idFilme' element={<Filme />}></Route>;
                <Route path='/Trainee-Tesla/FormFilme' element={<FormFilme />}></Route>;
                <Route path='/Trainee-Tesla/FormComentario' element={<FormComentario />}></Route>;
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;