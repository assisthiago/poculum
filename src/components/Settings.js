import { Offcanvas } from "react-bootstrap";

export default function Settings({ show, setShow }) {
    return (
        <Offcanvas placement="start" show={show} onHide={() => setShow(false)} responsive="lg">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Settings</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p className="mb-0">
                    Lorem Ipsum Dolor Sit Amet
                </p>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
