import Address from "@/components/Address";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Container, Form, InputGroup, Navbar } from "react-bootstrap";
import { AlphabetUppercase, ArrowLeft, CalendarEvent, Envelope, Floppy2Fill, GeoAltFill, Icon123 } from "react-bootstrap-icons";

export default function Account() {

    // Offcanvas
    const [showAddress, setShowAddress] = useState(false);

    useEffect(() => {
        document.title = "Poculum - Conta";
    }, []);

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
                        <h5 className="position-absolute top-50 start-50 translate-middle fw-light fs-6 text-uppercase m-0">Conta</h5>
                    </Container>
                </Navbar>
                <Container fluid>
                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>
                                <AlphabetUppercase size={20} />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Nome completo" />
                        </InputGroup>
                        <hr />
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <Envelope size={20} />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="E-mail" />
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <Icon123 size={20} />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Telefone" />
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <CalendarEvent size={20} />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Data de nascimento" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>
                                <GeoAltFill size={20} />
                            </InputGroup.Text>
                            <Form.Control readOnly
                                type="text"
                                placeholder="Endereço"
                                value="Lorem Ipsum Dolor Sit Amet, 9999"
                                onClick={() => setShowAddress(true)}
                                className="text-link fw-light"
                            />
                        </InputGroup>
                        <Button
                            variant="warning"
                            className="w-100 text-decoration-none shadow mt-3"
                        >
                            <Floppy2Fill size={20} className="me-2" />
                            Salvar
                        </Button>
                    </Form>
                </Container>
            </main>

            {/* Offcanvas */}
            <Address show={showAddress} setShow={setShowAddress} />
        </>
    );
}
