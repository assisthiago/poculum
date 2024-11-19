import Link from "next/link";
import { ListColumnsReverse, MinecartLoaded, Search } from "react-bootstrap-icons";

const { Navbar, Container, Stack, Button } = require("react-bootstrap");

export default function Footer() {
    return (
        <>
            <Navbar sticky="bottom" className="bg-white flex-column py-0">
                <Container fluid className="bg-warning py-1 w-100">
                    <Link href="/items" className="w-100">
                        <Button variant="link" size="sm" className="text-decoration-none w-100">
                            <Stack direction="horizontal" className="justify-content-between">
                                <div>
                                    <MinecartLoaded size={20} className="me-1" />
                                    <small className="fs-small text-black">Carrinho</small>
                                </div>
                                <p className="text-decoration-none text-black m-0">990 itens</p>
                                <h5 className="text-decoration-none text-black m-0">9999.99</h5>
                            </Stack>
                        </Button>
                    </Link>
                </Container>
                <Container fluid className="border-top border-secondary-subtle py-1">
                    <Stack direction="horizontal" className="justify-content-around w-100">
                        <Link href="/">
                            <Button variant="link" size="sm" className="text-decoration-none fw-bold">
                                <Search size={20} className="mb-1" />
                                <small className="d-block fs-small text-black">Buscar</small>
                            </Button>
                        </Link>
                        <Link href="/orders">
                            <Button variant="link" size="sm" className="text-decoration-none">
                                <ListColumnsReverse size={20} className="mb-1" />
                                <small className="d-block fs-small text-black">Pedidos</small>
                            </Button>
                        </Link>
                    </Stack>
                </Container>
            </Navbar>
        </>
    )
}
