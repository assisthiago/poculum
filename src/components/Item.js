import { useState } from "react";
import { Button, Card, Col, Form, Image, InputGroup, Offcanvas, Stack } from "react-bootstrap"
import { Trash3 } from "react-bootstrap-icons"

export default function Item({ instance, enableDelete = false }) {

    const [show, setShow] = useState(false)

    return (
        <>
            <Col sm={12} className="mb-3">
                <Card border="light" className="shadow">
                    <Card.Body>
                        <Stack direction="horizontal" gap={3} className="justify-content-between">
                            <div className="position-relative">
                                <Image src={instance.image} alt={instance.name} rounded fluid />
                            </div>
                            <Stack direction="vertical" className="justify-content-between">
                                <Stack direction="horizontal" className="justify-content-between">
                                    <h5 className="mb-0 fw-light fs-6">{instance.name}</h5>
                                    {enableDelete && (
                                        <Button variant="link" size="sm" className="p-0" onClick={() => setShow(true)}>
                                            <Trash3 size={15} />
                                        </Button>
                                    )}
                                </Stack>
                                <Stack direction="horizontal" gap={3} className="justify-content-between">
                                    <h5 className="mb-0 fw-bold fs-6">R$ {instance.price}</h5>
                                    <InputGroup className="w-50">
                                        <Button variant="light" size="sm" className="shadow-sm">-</Button>
                                        <Form.Control type="text" size="sm" value="1" readOnly className="border-light text-center shadow-sm" />
                                        <Button variant="warning" size="sm" className="shadow-sm">+</Button>
                                    </InputGroup>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Card.Body>
                </Card>
            </Col>
            <Offcanvas placement="bottom" show={show} onHide={() => setShow(false)} responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Deseja remover este produto?</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>Amet Consectetur <small className="text-muted">(99 unidades)</small></p>
                    <Button variant="danger" size="sm" className="w-100 shadow-sm" onClick={() => setShow(false)}>Remover</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
