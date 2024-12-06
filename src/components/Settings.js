import Link from "next/link";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import { CreditCardFill, DoorClosedFill, InfoSquareFill, Pen, PersonBadgeFill } from "react-bootstrap-icons";

export default function Settings({ show, setShow }) {
    return (
        <Offcanvas placement="start" show={show} onHide={() => setShow(false)} responsive="lg">
            <Offcanvas.Header closeButton className="shadow">
                <Offcanvas.Title className="fw-light text-uppercase fs-6">Conta</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack direction="vertical" gap={3}>
                    <Link href="/account" className="w-100">
                        <Button variant="link" className="text-decoration-none shadow-sm w-100">
                            <Stack direction="horizontal" gap={3}>
                                <PersonBadgeFill size={24} />
                                <Stack direction="vertical" className="text-start">
                                    <p className="m-0 text-black">Lorem Ipsum</p>
                                    <p className="m-0 text-muted">lorem.ipsum@email.com</p>
                                    <p className="m-0 text-muted">(00) 00000-0000</p>
                                </Stack>
                                <Pen size={24} />
                            </Stack>
                        </Button>
                    </Link>
                    <Link href="/terms" className="w-100">
                        <Button variant="link" className="text-decoration-none shadow-sm w-100" disabled>
                            <Stack direction="horizontal" gap={3}>
                                <InfoSquareFill size={24} />
                                <p className="m-0 text-black">Termos e Privacidade</p>
                            </Stack>
                        </Button>
                    </Link>
                    <Link href="/sign-out" className="w-100">
                        <Button variant="link" className="text-decoration-none shadow-sm w-100">
                            <Stack direction="horizontal" gap={3}>
                                <DoorClosedFill size={24} />
                                <p className="m-0 text-black">Sair</p>
                            </Stack>
                        </Button>
                    </Link>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
