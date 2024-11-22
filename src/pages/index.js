import Item from "@/components/Item";
import Layout from "@/components/Layout";
import { Badge, Button, Card, Col, Container, Form, Image, InputGroup, Row, Stack } from "react-bootstrap";
import { Backspace } from "react-bootstrap-icons";


const ITEMS = [
    { id: 1, name: "Aliqua Ut", price: 234.56, image: "https://placehold.co/100" },
    { id: 2, name: "Lorem Ipsum", price: 1234.56, image: "https://placehold.co/100" },
    { id: 3, name: "Dolor Sit", price: 789.01, image: "https://placehold.co/100" },
    { id: 4, name: "Amet Consectetur", price: 2345.67, image: "https://placehold.co/100" },
    { id: 5, name: "Adipiscing Elit", price: 890.12, image: "https://placehold.co/100" },
    { id: 6, name: "Sed Do", price: 3456.78, image: "https://placehold.co/100" },
    { id: 7, name: "Eiusmod Tempor", price: 901.23, image: "https://placehold.co/100" },
    { id: 8, name: "Incididunt Ut", price: 4567.89, image: "https://placehold.co/100" },
    { id: 9, name: "Labore Et", price: 123.45, image: "https://placehold.co/100" },
    { id: 10, name: "Dolore Magna", price: 6789.01, image: "https://placehold.co/100" },
]


export default function Home() {

    return (
        <Layout>
            <Container fluid>
                <Stack direction="horizontal" gap={3} className="justify-content-between">
                    <Badge bg="secondary" className="fw-light shadow-sm">lorem ipsum</Badge>
                    <Button variant="link" size="sm" className="text-decoration-none fw-light">
                        Limpar
                        <Backspace size={15} color="royalblue" className="ms-1" />
                    </Button>
                </Stack>
                <Row className="mt-3">
                    {ITEMS.map((item, index) => (
                        <Item key={index} instance={item} />
                    ))}
                </Row>
            </Container>
        </Layout>
    );
}
