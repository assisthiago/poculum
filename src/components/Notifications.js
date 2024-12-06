import { Button, Card, Offcanvas, Stack } from "react-bootstrap";

export default function Notifications({ show, setShow }) {
    const items = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            time: "13:00",
            read: false,
        },
        {
            title: "Ut enim ad minim veniam, quis nostrud exercitation",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            time: "12:30",
            read: true,
        },
        {
            title: "Duis aute irure dolor in reprehenderit in voluptate",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            time: "23:59",
            read: true,
        },
        {
            title: "Excepteur sint occaecat cupidatat non proident",
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            time: "01/06",
            read: false,
        },
        {
            title: "Sed ut perspiciatis unde omnis iste natus error",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            time: "01/12",
            read: true,
        }
    ]

    return (
        <Offcanvas placement="end" show={show} onHide={() => setShow(false)} responsive="lg">
            <Offcanvas.Header closeButton className="shadow">
                <Offcanvas.Title className="fw-light text-uppercase fs-6">Notificações</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack direction="vertical" gap={2}>
                    {items.map((item, index) => (
                        <Card key={index} className="shadow-sm" border={item.read ? "light" : null}>
                            <Card.Body>
                                <Stack direction="horizontal" gap={1} className="justify-content-between align-items-start">
                                    <Card.Title className="fs-6 fw-bolder">{item.title}</Card.Title>
                                    <Card.Subtitle className="text-muted">{item.time}</Card.Subtitle>
                                </Stack>
                                <Card.Text>{item.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
