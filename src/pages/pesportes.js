import { Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";

export default function Pesportes(){
    return <>
    <Menu/>
    <Container>
       <Container className="border border-sm border-primary rounded-pill text-center col-sm-6">
         Lista de produtos de Esportes 
        </Container>
    
        <Container className="border border-sm border-primary rounded-pill text-center col-sm-6">
         Os produtos
        </Container>
    </Container>
    <Footer />
    </>
}