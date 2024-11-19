import { Offcanvas } from "react-bootstrap";

export default function Address({ show, setShow }) {
    return (
        <Offcanvas placement="bottom" show={show} onHide={() => setShow(false)} responsive="lg">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Address</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p className="mb-0">
                    Lorem Ipsum Dolor Sit Amet
                </p>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
