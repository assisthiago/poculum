import { Offcanvas } from "react-bootstrap";

export default function Notifications({ show, setShow }) {
    return (
        <Offcanvas placement="end" show={show} onHide={() => setShow(false)} responsive="lg">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Notifications</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p className="mb-0">
                    Lorem Ipsum Dolor Sit Amet
                </p>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
