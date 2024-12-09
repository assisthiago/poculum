import Item from "@/components/Item";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useState } from "react";
import { Badge, Button, Card, Col, Container, Form, InputGroup, ListGroup, Navbar, Offcanvas, Row, Stack } from "react-bootstrap";
import { ArrowLeft, Backspace, BalloonHeart, Ban, CarFrontFill, ChatLeftHeart, CheckCircle, CheckCircleFill, Floppy2Fill, TruckFlatbed } from "react-bootstrap-icons";


const ORDERS = [
    {
        id: 1, status: "entregue", price: 9999.99, rate: null, delivered_at: "01/12 23h53", products: [
            { id: 2, name: "Lorem Ipsum", price: 1234.56, quantity: 99 },
            { id: 4, name: "Amet Consectetur", price: 2345.67, quantity: 99 },
        ]
    },
    {
        id: 2, status: "cancelado", price: 99.99, rate: null, delivered_at: "01/12 23h53", products: [
            { id: 8, name: "Incididunt Ut", price: 4567.89, quantity: 99 },
            { id: 2, name: "Lorem Ipsum", price: 1234.56, quantity: 99 },
        ]
    },
    {
        id: 3, status: "entregue", price: 999.99, rate: 0, delivered_at: "01/12 23h53", products: [
            { id: 4, name: "Amet Consectetur", price: 2345.67, quantity: 99 },
            { id: 6, name: "Sed Do", price: 3456.78, quantity: 99 },
            { id: 10, name: "Dolore Magna", price: 6789.01, quantity: 99 },
        ]
    },
    {
        id: 4, status: "entregue", price: 999.99, rate: 5, delivered_at: "01/12 23h53", products: [
            { id: 4, name: "Amet Consectetur", price: 2345.67, quantity: 99 },
            { id: 6, name: "Sed Do", price: 3456.78, quantity: 99 },
            { id: 10, name: "Dolore Magna", price: 6789.01, quantity: 99 },
        ]
    },
]


export default function Orders() {

    const [show, setShow] = useState(false)

    return (
        <Layout page="orders">
            <Navbar sticky="top" className="bg-white shadow mb-3">
                <Container fluid>
                    <Link href="/">
                        <Button variant="link" size="sm">
                            <ArrowLeft size={20} />
                        </Button>
                    </Link>
                    <h5 className="position-absolute top-50 start-50 translate-middle fw-light fs-6 text-uppercase m-0">Meus pedidos</h5>
                </Container>
            </Navbar>
            <Container fluid className="mb-3">
                <Stack direction="vertical" gap={3}>
                    {ORDERS.map((order, index) => (
                        <Card className="shadow-sm w-100" key={index}>
                            <Card.Header className="bg-light text-start">
                                <Stack direction="horizontal" className="justify-content-between">
                                    <div className="d-inline-flex align-items-center">
                                        {order.status === "entregue" ? (
                                            <CheckCircle size={20} className="me-2" />
                                        ) : (
                                            <Ban size={20} className="me-2" />
                                        )}
                                        <small className="text-muted fw-bold">Pedido {order.status}</small>
                                        <small className="text-muted ms-2">{order.delivered_at}</small>
                                    </div>
                                    {order.status === "entregue" && order.rate === null && (
                                        <Button variant="link" size="sm" className="text-decoration-none p-0" onClick={() => setShow(true)}>
                                            <BalloonHeart size={20} className="me-1" />
                                            Avaliar
                                        </Button>
                                    )}
                                    {order.status === "entregue" && order.rate !== null && (
                                        <Stack direction="horizontal" gap={1}>
                                            <BalloonHeart size={20} />
                                            <small className="fw-bold text-muted">{order.rate}</small>
                                        </Stack>
                                    )}
                                </Stack>
                            </Card.Header>
                            <Card.Body>
                                <Stack direction="vertical" gap={1} className="mb-1">
                                    {order.products.map((product, index) => (
                                        <ListGroup key={index} variant="flush">
                                            <ListGroup.Item className="d-flex justify-content-between align-items-start p-0">
                                                <small className="me-auto">{product.name}</small>
                                                <Badge bg="secondary" rounded>{product.quantity}</Badge>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    ))}
                                </Stack>
                                <hr />
                                <small>Total de R${order.price}.</small>
                            </Card.Body>
                        </Card>
                    ))}
                </Stack>
            </Container>

            {/* Offcanvas */}
            <Offcanvas placement="bottom" show={show} onHide={() => setShow(false)} responsive="lg" className="vh-75">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Como avalia este pedido?</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className="mb-5">Em 01/12 23:59 - Total de R$9999,99.</p>
                    <p className="text-muted">Escolha de 1 a 5 para classificar.</p>
                    <Stack direction="horizontal" gap={3} className="justify-content-around px-3 mb-4">
                        <BalloonHeart size={30} />
                        <BalloonHeart size={30} />
                        <BalloonHeart size={30} />
                        <BalloonHeart size={30} />
                        <BalloonHeart size={30} />
                    </Stack>
                    <InputGroup className="mt-3">
                        <InputGroup.Text>
                            <ChatLeftHeart size={20} />
                        </InputGroup.Text>
                        <Form.Control as="textarea" placeholder="Deixe um comentário (opcional)" />
                    </InputGroup>
                </Offcanvas.Body>
                <Offcanvas.Body className="p-3 align-items-end d-flex">
                    <Button
                        variant="warning"
                        className="w-100 text-decoration-none shadow"
                        onClick={() => setShow(false)}
                    >
                        <Floppy2Fill size={20} className="me-2" />
                        Avaliar
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </Layout>
    );
}
