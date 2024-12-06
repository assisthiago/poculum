import { Button, Form, InputGroup, Offcanvas } from "react-bootstrap";
import { GlobeAmericas, SignpostFill, Signpost2Fill, PersonRaisedHand, Floppy2Fill } from "react-bootstrap-icons";

export default function Address({ show, setShow }) {
    return (
        <Offcanvas
            placement="bottom"
            show={show}
            responsive="lg"
            className="vh-75"
            onHide={() => setShow(false)}
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="fw-light text-uppercase fs-6">Endereço</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>
                            <GlobeAmericas size={20} />
                        </InputGroup.Text>
                        <Form.Control type="number" placeholder="CEP" />
                    </InputGroup>
                    <hr />
                    <InputGroup className="mb-2">
                        <InputGroup.Text>
                            <Signpost2Fill size={20} />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Endereço" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>
                            <SignpostFill size={20} />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Complemento (opcional)" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>
                            <PersonRaisedHand size={20} />
                        </InputGroup.Text>
                        <Form.Control as="textarea" placeholder="Ponto de referência (opcional)" />
                    </InputGroup>
                </Form>
            </Offcanvas.Body>
            <Offcanvas.Body className="p-3 align-items-end d-flex">
                <Button
                    variant="warning"
                    className="w-100 text-decoration-none shadow"
                    onClick={() => setShow(false)}
                >
                    <Floppy2Fill size={20} className="me-2" />
                    Salvar
                </Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
