import Link from "next/link";
import { Button, Container, Navbar, Stack } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Custom404() {

    return (
        <>
            <main className="min-vh-100">
                <Navbar sticky="top" className="bg-white shadow mb-3">
                    <Container fluid>
                        <Link href="/">
                            <Button variant="link" size="sm">
                                <ArrowLeft size={20} />
                            </Button>
                        </Link>
                        <h5 className="position-absolute top-50 start-50 translate-middle fw-light fs-6 text-uppercase m-0">404</h5>
                    </Container>
                </Navbar>
                <Container fluid>
                    <Stack
                        direction="vertical"
                        gap={3}
                        className="justify-content-center align-items-center text-center position-absolute top-50 start-50 translate-middle w-75"
                    >
                        <h1 className="fw-light text-uppercase">Página não encontrada</h1>
                        <p className="text-muted">A página não existe ou foi removida.</p>
                        <Link href="/">
                            <Button variant="link" className="text-decoration-none">Voltar</Button>
                        </Link>
                    </Stack>
                </Container>
            </main>
        </>
    );
}
