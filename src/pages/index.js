import Layout from "@/components/Layout";
import { Badge, Button, Card, Col, Container, Form, Image, InputGroup, Row, Stack } from "react-bootstrap";
import { Backspace } from "react-bootstrap-icons";

export default function Home() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <Layout>
            <Container fluid>
                <Stack direction="horizontal" gap={3} className="justify-content-between">
                    <Badge bg="secondary" className="fw-light">lorem ipsum</Badge>
                    <Button variant="link" size="sm" className="text-decoration-none fw-light">
                        Limpar
                        <Backspace size={15} color="royalblue" className="ms-1" />
                    </Button>
                </Stack>
                <Row className="mt-3">
                    {items.map((item, index) => (
                        <Col key={index} sm={12} className="mb-3">
                            <Card className="shadow-sm">
                                <Card.Body className="">
                                    <Stack direction="horizontal" gap={3} className="justify-content-between">
                                        <div className="position-relative">
                                            <Image src="https://placehold.co/100" alt="" rouded fluid />
                                        </div>
                                        <Stack direction="vertical" className="justify-content-between">
                                            <h5 className="mb-0 fw-light fs-6">Lorem Ipsum Dolor Sit Amet</h5>
                                            <Stack direction="horizontal" gap={3} className="justify-content-between">
                                                <h5 className="mb-0 fw-light fs-6">999.99</h5>
                                                <InputGroup className="w-50">
                                                    <Button variant="light">-</Button>
                                                    <Form.Control type="text" value="1" readOnly className="border-light text-center" />
                                                    <Button variant="warning">+</Button>
                                                </InputGroup>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    );
}
