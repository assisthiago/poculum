import { useState } from "react";
import { Button, Container, Form, InputGroup, Navbar, Stack } from "react-bootstrap";
import { BellFill, GeoAltFill, PersonVcard, Search } from "react-bootstrap-icons";

import Address from "./Address";
import Notifications from "./Notifications";
import Settings from "./Settings";

export default function Header({ page = "" }) {

    // Offcanvas
    const [showAddress, setShowAddress] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <>
            {page === "" ? (
                <Navbar sticky="top" className="bg-white shadow py-3 mb-3">
                    <Container fluid className="flex-column">
                        <Stack direction="horizontal" className="justify-content-between mb-3">
                            <Button variant="link" size="sm" onClick={() => setShowSettings(true)}>
                                <PersonVcard size={20} />
                            </Button>
                            <Button
                                variant="link"
                                size="sm"
                                className="d-flex align-items-center text-decoration-none"
                                onClick={() => setShowAddress(true)}
                            >
                                <GeoAltFill size={15} />
                                <span className="ms-1 fw-light">Lorem Ipsum Dolor Sit Amet, 9999</span>
                            </Button>
                            <Button variant="link" size="sm" onClick={() => setShowNotifications(true)}>
                                <BellFill size={15} />
                            </Button>
                        </Stack>
                        <Form className="d-block w-100">
                            <InputGroup>
                                <Form.Control type="search" placeholder="Buscar produtos" className="mr-2 shadow-sm" />
                                <Button variant="warning" className="shadow-sm"><Search size={15} /></Button>
                            </InputGroup>
                        </Form>
                    </Container>
                </Navbar>
            ) : ""}

            {/* Offcanvas */}
            <Address show={showAddress} setShow={setShowAddress} />
            <Notifications show={showNotifications} setShow={setShowNotifications} />
            <Settings show={showSettings} setShow={setShowSettings} />
        </>
    );
}
