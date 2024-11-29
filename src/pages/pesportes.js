import { Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";
import Table from 'react-bootstrap/Table';

export default function Pesportes() {
    return <>
        <Menu />
        <Container>
            <Container className="border border-sm border-primary rounded-pill text-center col-sm-6">
                Lista de produtos de Esportes
            </Container>

            <Container className="border border-sm border-primary rounded-pill text-center col-sm-6">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>PRODUTO</th>
                            <th>CATEGORIA</th>
                            <th>DESCRIÇÃO</th>
                            <th>PREÇO</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* LAÇO DE REPETIÇÃO
                         */}

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </Container>
        <Footer />
    </>
}