import Link from "next/link";
import { useEffect } from "react";
import { Button, Col, Container, Form, InputGroup, Nav, Navbar, Row, Stack, Tab, Tabs } from "react-bootstrap";
import { ArrowLeft, Cash, CashCoin, CreditCard, InfoCircleFill, Wallet } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Payment() {

    return (
        <>
            <main className="min-vh-100">
                <Navbar sticky="top" className="bg-white">
                    <Container fluid>
                        <Link href="/cart">
                            <Button variant="link" size="sm">
                                <ArrowLeft size={20} />
                            </Button>
                        </Link>
                        <h5 className="position-absolute top-50 start-50 translate-middle fw-light fs-6 text-uppercase m-0">Pagamento</h5>
                    </Container>
                </Navbar>
                <Tab.Container id="left-tabs-example" defaultActiveKey="online">
                    <Nav variant="underline" className="flex-row justify-content-around bg-white shadow">
                        <Nav.Item>
                            <Nav.Link eventKey="online">Pagar online</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="offline">Pagar na entrega</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Container>
                        <Tab.Content className="mt-3">

                            {/* Online */}
                            <Tab.Pane eventKey="online">
                                <Stack direction="vertical" gap={3}>
                                    <Form.Label>
                                        <Stack direction="horizontal" gap={3} className="justify-content-between text-start shadow-sm p-3 btn">
                                            <p className="m-0">
                                                <Cash size={24} className="me-3" />
                                                PIX
                                            </p>
                                            <Form.Check type="radio" name="payment" value="online-cash" />
                                        </Stack>
                                    </Form.Label>
                                    <Form.Label>
                                        <Stack direction="horizontal" gap={3} className="justify-content-between text-start shadow-sm p-3 btn">
                                            <p className="m-0">
                                                <CreditCard size={24} className="me-3" />
                                                Cartão de crédito
                                            </p>
                                            <Form.Check type="radio" name="payment" value="online-credit" />
                                        </Stack>
                                    </Form.Label>
                                </Stack>
                            </Tab.Pane>

                            {/* Offline */}
                            <Tab.Pane eventKey="offline">
                                <Stack direction="vertical" gap={3}>
                                    <Form.Label className="p-3 btn shadow-sm">
                                        <Stack direction="vertical">
                                            <Stack
                                                direction="horizontal"
                                                gap={3}
                                                className="justify-content-between text-start mb-2"
                                            >
                                                <p className="m-0">
                                                    <Cash size={24} className="me-3" />
                                                    Dinheiro
                                                </p>
                                                <Form.Check type="radio" name="payment" value="offline-cash" />
                                            </Stack>

                                            <Stack direction="vertical" gap={1} className="justify-content-between text-start">
                                                <small className="m-0 text-muted">Valor do seu pedido: R$ 9999,99</small>
                                                <Form.Control type="text" name="change" placeholder="Troco para quanto?" value="0,00" />
                                                <Form.Text muted>Informe o valor para troco.</Form.Text>
                                            </Stack>
                                        </Stack>
                                    </Form.Label>
                                    <Form.Label>
                                        <Stack direction="horizontal" gap={3} className="justify-content-between text-start shadow-sm p-3 btn">
                                            <p className="m-0">
                                                <CreditCard size={24} className="me-3" />
                                                Cartão de crédito
                                            </p>
                                            <Form.Check type="radio" name="payment" value="offline-credit" />
                                        </Stack>
                                    </Form.Label>
                                    <Stack
                                        direction="horizontal"
                                        gap={3}
                                        className="justify-content-between text-start mb-2"
                                    >
                                        <p className="m-0 lh-1">
                                            <InfoCircleFill size={14} className="me-2" />
                                            <small className="text-muted"><strong>Prefira o pagamento online</strong>. É mais seguro para você e para o entregador.</small>
                                        </p>
                                    </Stack>
                                </Stack>
                            </Tab.Pane>
                        </Tab.Content>
                    </Container>
                </Tab.Container>
                <div className="fixed-bottom w-100 p-3">
                    <Button variant="warning" className="w-100 shadow">Finalizar pedido</Button>
                </div>
            </main>
        </>
    );
}
