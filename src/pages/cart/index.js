import Address from "@/components/Address";
import Item from "@/components/Item";
import Link from "next/link";
import { useState } from "react";
import { Badge, Button, Card, Col, Container, Form, Navbar, Row, Stack } from "react-bootstrap";
import { ArrowLeft, CarFrontFill, CartPlusFill, HouseFill, Mailbox2Flag, PencilSquare, PersonWalking, Wallet2 } from "react-bootstrap-icons";

const ITEMS = [
    { id: 2, name: "Lorem Ipsum", price: 1234.56, image: "https://placehold.co/100" },
    { id: 4, name: "Amet Consectetur", price: 2345.67, image: "https://placehold.co/100" },
    // { id: 6, name: "Sed Do", price: 3456.78, image: "https://placehold.co/100" },
    // { id: 8, name: "Incididunt Ut", price: 4567.89, image: "https://placehold.co/100" },
    // { id: 10, name: "Dolore Magna", price: 6789.01, image: "https://placehold.co/100" },
]

export default function Cart() {
    const [showAddress, setShowAddress] = useState(false);

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
                        <h5 className="position-absolute top-50 start-50 translate-middle fw-light fs-6 text-uppercase m-0">Carrinho</h5>
                    </Container>
                </Navbar>
                <Container fluid>
                    <Row className="mb-3">
                        {ITEMS.map((item, index) => (
                            <Item key={index} instance={item} enableDelete />
                        ))}
                    </Row>
                    <Row>
                        <Col xs={12} className="text-center mb-3">
                            <Link href="/">
                                <Button
                                    variant="link"
                                    className="text-decoration-none text-muted d-inline-flex align-items-center">
                                    <CartPlusFill size={20} className="me-2" />
                                    Adicionar mais produtos
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="mb-3">
                        <p className="fw-light text-muted text-start mb-2">Opções de entrega</p>
                        <Col xs={12}>
                            <Form>
                                <Stack direction="vertical" gap={2} className="w-100">
                                    <Card className="shadow-sm w-100">
                                        <Card.Header className="bg-light text-start">
                                            <Stack direction="horizontal">
                                                <div className="d-inline-flex align-items-center">
                                                    <CarFrontFill size={20} className="me-2" />
                                                    <small>Receber agora</small>
                                                </div>
                                                <Form.Check type="radio" name="delivery" id="delivery" className="ms-auto" />
                                            </Stack>
                                        </Card.Header>
                                        <Card.Body>
                                            <small>Levamos o pedido até você por R$ 99.99.</small>
                                        </Card.Body>
                                    </Card>

                                    <Card className="shadow-sm w-100">
                                        <Card.Header className="bg-light text-start">
                                            <Stack direction="horizontal">
                                                <div className="d-inline-flex align-items-center">
                                                    <PersonWalking size={20} className="me-2" />
                                                    <small>Retirar agora</small>
                                                </div>
                                                <Form.Check type="radio" name="delivery" id="take-" className="ms-auto" />
                                            </Stack>
                                        </Card.Header>
                                        <Card.Body>
                                            <small>Cerca de 1.1km do seu local, sem taxa.</small>
                                        </Card.Body>
                                    </Card>
                                </Stack>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <p className="fw-light text-muted text-start mb-2">Local para entrega</p>
                        <Col xs={12}>
                            <Card className="shadow-sm w-100">
                                <Card.Header className="bg-light text-start">
                                    <Stack direction="horizontal" className="align-items-center">
                                        <HouseFill size={20} className="me-2" />
                                        <small>Localização</small>
                                        <Button
                                            variant="link"
                                            size="sm"
                                            className="ms-auto text-decoration-none p-0"
                                            onClick={() => setShowAddress(true)}
                                        >
                                            <PencilSquare size={20} />
                                        </Button>
                                    </Stack>
                                </Card.Header>
                                <Card.Body>
                                    <Stack direction="vertical" gap={0}>
                                        <small>Lorem Ipsum Amet Consectetur, 9999</small>
                                        <small>AA 99, AAAA 9999</small>
                                        <small>Lorem Ipsum Amet, Lorem Ipsum - Amet</small>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="mb-3">
                        <Col xs={12} className="text-center">
                            <Card className="shadow-sm">
                                <Card.Header className="bg-light text-start">
                                    <div className="d-inline-flex align-items-center">
                                        <Mailbox2Flag size={20} className="me-2" />
                                        <small>Algum comentário para o pedido?</small>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Ex.: Ligar quando estiver próximo, não possui portaria, etc."
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-center">
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Stack direction="vertical" gap={1}>
                                        <Stack direction="horizontal" gap={3} className="justify-content-between">
                                            <h5 className="mb-0 fw-light text-muted fs-6">99 produtos</h5>
                                            <h5 className="mb-0 fw-normal text-muted fs-6">R$ 9999.99</h5>
                                        </Stack>
                                        <Stack direction="horizontal" gap={3} className="justify-content-between">
                                            <h5 className="mb-0 fw-light text-muted fs-6">Entrega</h5>
                                            <h5 className="mb-0 fs-6">
                                                <Badge bg="success">Sem taxa</Badge>
                                                {/* <Badge bg="secondary" className="fw-normal">R$ 99.99</Badge> */}
                                            </h5>
                                        </Stack>
                                        <Stack direction="horizontal" gap={3} className="justify-content-between">
                                            <h5 className="mb-0 fw-light text-muted fs-6">Total</h5>
                                            <h5 className="mb-0 fw-bold fs-6">R$ 9999.99</h5>
                                        </Stack>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <small className="d-block mt-3 mb-0 text-muted">Venda proibida para menodres de 18 anos.</small>
                        <small className="d-block text-muted">Apresente um documento com foto na entrega para comprovar sua idade (+18).</small>
                    </Row>
                </Container>
            </main>
            <Navbar sticky="bottom" className="w-100">
                <Container fluid className="w-100 py-2">
                    <Link href="/" className="w-100">
                        <Button variant="warning" className="shadow w-100 d-inline-flex justify-content-center align-items-center">
                            <Wallet2 size={20} className="me-2" />
                            Selecionar pagamento
                        </Button>
                    </Link>
                </Container>
            </Navbar>

            {/* Offcanvas */}
            <Address show={showAddress} setShow={setShowAddress} />
        </>
    );
}
