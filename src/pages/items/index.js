import Link from "next/link";
import { Button, Container, Navbar, Stack } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

export default function Items() {
    return (
        <main>
            <Navbar sticky="top" className="bg-white shadow mb-3">
                <Container fluid>
                    <Link href="/">
                        <Button variant="link" size="sm">
                            <ArrowLeft size={20} />
                        </Button>
                    </Link>
                    <h5 className="position-absolute top-50 start-50 translate-middle fw-light fs-6 text-uppercase m-0">Carrinho</h5>
                </Container>
            </Navbar>
        </main>
    );
}
